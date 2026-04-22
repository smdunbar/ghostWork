"use client"

import { useState, useEffect } from "react"

function mulberry32(seed) {
  let t = seed >>> 0
  return function () {
    t += 0x6d2b79f5
    let x = Math.imul(t ^ (t >>> 15), 1 | t)
    x ^= x + Math.imul(x ^ (x >>> 7), 61 | x)
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296
  }
}

function shuffleInPlace(arr, rand = Math.random) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

// Minimal CSV parser for this dataset (handles commas + quotes).
function parseCsv(text) {
  const rows = []
  let row = []
  let field = ""
  let inQuotes = false

  const pushField = () => {
    row.push(field)
    field = ""
  }
  const pushRow = () => {
    // Skip empty rows
    if (row.length > 0 && row.some((c) => c !== "")) rows.push(row)
    row = []
  }

  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    if (ch === '"') {
      if (inQuotes && text[i + 1] === '"') {
        field += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
      continue
    }
    if (!inQuotes && ch === ",") {
      pushField()
      continue
    }
    if (!inQuotes && (ch === "\n" || ch === "\r")) {
      // handle CRLF
      if (ch === "\r" && text[i + 1] === "\n") i++
      pushField()
      pushRow()
      continue
    }
    field += ch
  }

  // flush last
  pushField()
  pushRow()

  const header = rows[0]
  const dataRows = rows.slice(1)
  const idx = (name) => header.indexOf(name)
  const classIdx = idx("class")
  const tweetIdx = idx("tweet")
  const idIdx = header[0] === "" ? 0 : idx("")

  return dataRows
    .map((r, i) => {
      const rawId = (idIdx >= 0 ? r[idIdx] : String(i)).trim()
      const tweet = (r[tweetIdx] ?? "").trim()
      const gold = Number((r[classIdx] ?? "").trim())
      if (!tweet || Number.isNaN(gold)) return null
      return { sourceId: rawId || String(i), tweet, gold }
    })
    .filter(Boolean)
}

function buildDeck(examples, { seed = Date.now(), uniqueCount = 25, repeatCount = 5 } = {}) {
  const rand = mulberry32(seed)
  const pool = [...examples]
  shuffleInPlace(pool, rand)
  const picked = pool.slice(0, Math.min(uniqueCount, pool.length)).map((ex) => ({
    taskId: `u_${ex.sourceId}`,
    sourceId: ex.sourceId,
    tweet: ex.tweet,
    gold: ex.gold,
    isRepeat: false,
    repeatOf: null,
  }))

  const repeatSource = [...picked]
  shuffleInPlace(repeatSource, rand)
  const repeats = repeatSource.slice(0, Math.min(repeatCount, picked.length)).map((ex) => ({
    taskId: `r_${ex.sourceId}_${Math.floor(rand() * 1e9)}`,
    sourceId: ex.sourceId,
    tweet: ex.tweet,
    gold: ex.gold,
    isRepeat: true,
    repeatOf: ex.taskId,
  }))

  // Insert repeats AFTER their original appears (so it can validate consistency).
  const deck = [...picked]
  const indexByTaskId = new Map(deck.map((t, idx) => [t.taskId, idx]))
  for (const rep of repeats) {
    const originalIndex = indexByTaskId.get(rep.repeatOf) ?? 0
    const insertMin = originalIndex + 1
    const insertMax = deck.length
    const insertAt = insertMin + Math.floor(rand() * Math.max(1, insertMax - insertMin + 1))
    deck.splice(Math.min(insertAt, deck.length), 0, rep)
    // Update indices after insertion
    for (let i = insertAt; i < deck.length; i++) indexByTaskId.set(deck[i].taskId, i)
  }

  return { seed, deck, uniqueCount: picked.length, repeatCount: repeats.length }
}

export default function ActiveTask({ onComplete, onEndShift }) {
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(null)
  const [deckInfo, setDeckInfo] = useState(null)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [earned, setEarned] = useState(0)
  const [judgmentsMade, setJudgmentsMade] = useState(0)
  const [labelCounts, setLabelCounts] = useState({ 0: 0, 1: 0, 2: 0 })
  const [repeatStats, setRepeatStats] = useState({ repeatsSeen: 0, repeatsConsistent: 0 })
  const [labelsByTaskId, setLabelsByTaskId] = useState({})

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `0:${mins}:${secs.toString().padStart(2, "0")}`
  }

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        setLoading(true)
        setLoadError(null)
        const res = await fetch("/hatespeech.csv", { cache: "no-store" })
        if (!res.ok) throw new Error(`Failed to load dataset (HTTP ${res.status})`)
        const text = await res.text()
        const parsed = parseCsv(text)
        if (parsed.length < 1) throw new Error("Dataset is empty or could not be parsed")

        const seed = Math.floor(Math.random() * 2 ** 31)
        const info = buildDeck(parsed, { seed, uniqueCount: 25, repeatCount: 5 })

        if (!cancelled) {
          setDeckInfo(info)
          setCurrentTextIndex(0)
          setEarned(0)
          setJudgmentsMade(0)
          setLabelCounts({ 0: 0, 1: 0, 2: 0 })
          setRepeatStats({ repeatsSeen: 0, repeatsConsistent: 0 })
          setLabelsByTaskId({})
        }
      } catch (e) {
        if (!cancelled) setLoadError(e?.message ?? String(e))
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  const currentItem = deckInfo?.deck?.[currentTextIndex] ?? null

  const handleClassify = (labelNum) => {
    if (!currentItem) return

    // Save label for this taskId
    setLabelsByTaskId((prev) => ({ ...prev, [currentItem.taskId]: labelNum }))
    setLabelCounts((prev) => ({ ...prev, [labelNum]: (prev[labelNum] ?? 0) + 1 }))

    const isCorrect = labelNum === currentItem.gold
    const earningCorrect = 0.01
    const earningIncorrect = 0.001
    setEarned((prev) => prev + (isCorrect ? earningCorrect : earningIncorrect))
    setJudgmentsMade((prev) => prev + 1)

    if (currentItem.isRepeat && currentItem.repeatOf) {
      setRepeatStats((prev) => {
        const firstLabel = labelsByTaskId[currentItem.repeatOf]
        const consistent = firstLabel !== undefined && firstLabel === labelNum
        return {
          repeatsSeen: prev.repeatsSeen + 1,
          repeatsConsistent: prev.repeatsConsistent + (consistent ? 1 : 0),
        }
      })
    }

    if (currentTextIndex < deckInfo.deck.length - 1) {
      setCurrentTextIndex((prev) => prev + 1)
    } else {
      onComplete?.({
        total: deckInfo.deck.length,
        earned,
        judgmentsMade: judgmentsMade + 1,
        labelCounts,
        repeatStats,
        seed: deckInfo.seed,
      })
    }
  }

  return (
    <div className="min-h-[calc(100vh-73px)] bg-white">
      {/* Header with End Shift */}
      <div className="max-w-3xl mx-auto px-6 pt-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#19c093]" />
            <span className="font-medium text-[#000000]">Ghost Work</span>
          </div>
          <button
            onClick={onEndShift}
            className="text-sm text-[#d44d5c] hover:text-[#b33d4a] font-medium transition-colors"
          >
            End your shift
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-3xl mx-auto px-6 mb-8">
        <div className="flex items-center gap-16">
          <div>
            <div className={`text-2xl font-bold font-mono ${timeElapsed > 0 ? "text-[#19c093]" : "text-[#000000]"}`}>
              {formatTime(timeElapsed)}
            </div>
            <div className="text-xs text-[#828282]">time elapsed</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono">${earned.toFixed(2)}</div>
            <div className="text-xs text-[#828282]">earned</div>
          </div>
        </div>
      </div>

      {/* Task Instructions */}
      <div className="max-w-3xl mx-auto px-6 mb-6">
        <p className="text-sm text-[#828282]">
          Task: Label the below text under one of three categories
        </p>
      </div>

      {/* Text to Classify */}
      <div className="max-w-3xl mx-auto px-6 mb-8">
        <div className="bg-[#f2f2f2] rounded-lg p-8 min-h-[150px] flex items-center justify-center">
          {loading ? (
            <p className="text-sm text-center text-[#828282]">Loading task…</p>
          ) : loadError ? (
            <div className="text-sm text-center">
              <div className="text-[#d44d5c] font-medium mb-2">Couldn’t load dataset</div>
              <div className="text-[#828282]">{loadError}</div>
            </div>
          ) : (
            <p className="text-sm text-center text-[#000000]">{currentItem?.tweet}</p>
          )}
        </div>
      </div>

      {/* Classification Buttons */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => handleClassify(0)}
            disabled={loading || !!loadError}
            className="px-6 py-2 border border-[#d9d9d9] rounded text-sm hover:bg-[#f2f2f2] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            hate speech
          </button>
          <button
            onClick={() => handleClassify(1)}
            disabled={loading || !!loadError}
            className="px-6 py-2 border border-[#d9d9d9] rounded text-sm hover:bg-[#f2f2f2] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            offensive
          </button>
          <button
            onClick={() => handleClassify(2)}
            disabled={loading || !!loadError}
            className="px-6 py-2 border border-[#d9d9d9] rounded text-sm hover:bg-[#f2f2f2] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            neither
          </button>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="max-w-3xl mx-auto px-6 mt-8">
        <div className="text-center text-xs text-[#828282]">
          {deckInfo?.deck?.length ? `${currentTextIndex + 1} of ${deckInfo.deck.length}` : "—"}
        </div>
      </div>
    </div>
  )
}
