"use client"

import { useEffect } from "react"
import { useActiveTask } from "@/hooks/ActiveTaskContext"

const sampleTexts = [
  {"text": "@ $! @respondents: No woman you shouldn't complain about cleaning up your house. Gahyg, do a thron.", 
    "label": "hate_speech"},
  {"text": "another one", 
    "label": "offensive"},
  {"text": "This is actually a legitimate comment about the weather today.", 
    "label": "neither"},
  {"text": "Some people just don't understand basic decency anymore smh", 
    "label": "offensive"},
  {"text": "Great job on the presentation yesterday! Really loved the insights.", 
    "label": "neither"}
]

export default function ActiveTask({ onComplete, onEndShift }) {
  const {
    currentTextIndex,
    setCurrentTextIndex,
    timeElapsed,
    setTimeElapsed,
    earned,
    setEarned,
    judgmentsMade,
    setJudgmentsMade,
    accuracy,
    setAccuracy,
    hateSpeechCount,
    setHateSpeechCount,
    offensiveCount,
    setOffensiveCount,
    neitherCount,
    setNeitherCount,
    finalTime,
    setFinalTime,
  } = useActiveTask()
  const totalJudgments = sampleTexts.length


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

  const handleClassify = (classification, trueLabel) => {
    const earningPerJudgment = 0.03
    const newJudgmentCount = judgmentsMade + 1
    
    setEarned((prev) => prev + earningPerJudgment)
    setJudgmentsMade((prev) => prev + 1)
    
    if (classification === trueLabel) {
      setAccuracy((prev) => (prev * judgmentsMade + 1) / newJudgmentCount)
    } else {
      setAccuracy((prev) => (prev * judgmentsMade) / newJudgmentCount)
    }
    switch (classification) {
      case "hate_speech":
        setHateSpeechCount((prev) => prev + 1)
        break
      case "offensive":
        setOffensiveCount((prev) => prev + 1)
        break
      case "neither":
        setNeitherCount((prev) => prev + 1)
        break
    }

    if (currentTextIndex < sampleTexts.length - 1) {
      setCurrentTextIndex((prev) => prev + 1)
    } else {
      // Task complete
      onComplete()
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
          <p className="text-sm text-center text-[#000000]">
            {sampleTexts[currentTextIndex].text}
          </p>
        </div>
      </div>

      {/* Classification Buttons */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => handleClassify("hate_speech", sampleTexts[currentTextIndex].label)}
            className="px-6 py-2 border border-[#d9d9d9] rounded text-sm hover:bg-[#f2f2f2] transition-colors"
          >
            hate speech
          </button>
          <button
            onClick={() => handleClassify("offensive", sampleTexts[currentTextIndex].label)}
            className="px-6 py-2 border border-[#d9d9d9] rounded text-sm hover:bg-[#f2f2f2] transition-colors"
          >
            offensive
          </button>
          <button
            onClick={() => handleClassify("neither", sampleTexts[currentTextIndex].label)}
            className="px-6 py-2 border border-[#d9d9d9] rounded text-sm hover:bg-[#f2f2f2] transition-colors"
          >
            neither
          </button>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="max-w-3xl mx-auto px-6 mt-8">
        <div className="text-center text-xs text-[#828282]">
          {currentTextIndex + 1} of {sampleTexts.length}
        </div>
      </div>
    </div>
  )
}
