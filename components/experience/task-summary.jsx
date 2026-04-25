"use client"

import { ArrowRight } from "lucide-react"
import { useActiveTask } from "@/hooks/ActiveTaskContext"

export default function TaskSummary({ onReturnToHub }) {
  const { timeElapsed, earned, judgmentsMade, hateSpeechCount, offensiveCount, neitherCount, accuracy } = useActiveTask()

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }
  
  return (
    <div className="min-h-[calc(100vh-73px)] bg-neutral-950">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 pt-10">
        <div className="flex items-center gap-2 mb-12">
          <img src="/logo.png" alt="Ghost Work Logo" className="h-8 w-8" />
          <span className="font-medium text-white">Ghost Work</span>
        </div>
      </div>

      {/* Summary Content */}
      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center">
        <div>
        <h2 className="font-bold text-sm mb-6">Summary of Task</h2>

        {/* Top Stats Row */}
        <div className="flex items-start gap-8 mb-8">
          <div>
            <div className="text-4xl font-bold">{judgmentsMade}</div>
            <div className="text-xs text-neutral-400">questions answered</div>
          </div>
          <div>
            <div className="text-4xl font-bold font-mono text-emerald-400">{formatTime(timeElapsed)}</div>
            <div className="text-xs text-neutral-400">time taken</div>
          </div>
          <div className="bg-red-500 text-neutral-950 px-6 py-4 rounded">
            <div className="text-3xl font-bold">${earned.toFixed(2)}</div>
            <div className="text-xs">earnings from task</div>
          </div>
        </div>

        {/* Judgments */}
        <div className="mb-6">
          <h3 className="font-bold text-sm mb-3">Judgments</h3>
          <div className="flex items-center gap-8">
            <div>
              <div className="text-3xl font-bold text-emerald-400">17</div>
              <div className="text-xs text-neutral-400">trusted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500">13</div>
              <div className="text-xs text-neutral-400">untrusted</div>
            </div>
          </div>
        </div>

        {/* Label Distribution */}
        <div className="mb-12">
          <h3 className="font-bold text-sm mb-3">Label distribution</h3>
          <div className="flex items-center gap-8">
            <div>
              <div className="text-3xl font-bold">{hateSpeechCount}</div>
              <div className="text-xs text-neutral-400">hate speech</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{offensiveCount}</div>
              <div className="text-xs text-neutral-400">offensive</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{neitherCount}</div>
              <div className="text-xs text-neutral-400">neither</div>
            </div>
          
          </div>
        </div>

        {/* Return Button */}
        <div className="flex justify-center">
          <button
            onClick={onReturnToHub}
            className="inline-flex items-center gap-2 bg-red-500 text-neutral-950 px-6 py-2 rounded-full text-sm font-medium hover:bg-red-400 transition-colors"
          >
            Return to task hub
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}
