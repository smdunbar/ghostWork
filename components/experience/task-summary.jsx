"use client"

import { ArrowRight, ArrowLeft } from "lucide-react"
import { useActiveTask } from "@/hooks/ActiveTaskContext"


export default function TaskSummary({ onReturnToHub, onRedoTask }) {
  const { timeElapsed, earned, judgmentsMade, hateSpeechCount, offensiveCount, neitherCount, accuracy } = useActiveTask()
  const randomRedo = Math.random() < 0.2 // 20% chance the task needs to be redone
  const randomNoPay = Math.random() < 0.1 // 10% chance the worker is not paid for the task, even if it doesn't need to be redone
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }
  

  return (
      randomRedo ? (
      <div className="min-h-[calc(100vh-73px)] bg-neutral-950 flex flex-col items-center justify-center">
        <h2 className="font-bold text-2xl text-red-500 mb-4">Task needs to be redone</h2>
        <p className="text-med text-neutral-400 mb-6 max-w-xl"> The client, "defNotX", has returned the task, as it did not meet their quality standards.
          Please review your judgments and try again. Focus on accuracy and carefully consider each question. <span className=" text-white"> If you do not choose
          to redo the task, you will not receive payment for this work. Additionally, if you choose to redo the task, you will not be compensated for the additional work.</span>
        </p>
        <div className="flex justify-center gap-4">
         <button
          onClick={onReturnToHub}
          className="inline-flex items-center gap-2 bg-red-500 text-neutral-950 px-8 py-2 rounded-full text-lg font-medium hover:bg-red-400 transition-colors"
        >
         
          <ArrowLeft className="w-4 h-4" />
           Return to Task Hub
          
        </button>
        <button
          onClick={onRedoTask}
          className="inline-flex items-center gap-2 bg-emerald-400 text-neutral-950 px-10 py-2 rounded-full text-lg font-medium hover:bg-emerald-300 transition-colors"
        >
          Redo Task
          <ArrowRight className="w-4 h-4" />
        </button>
        </div>
      </div>
    ) : (
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
            {randomNoPay ? (
              <>
                <div className="text-3xl font-bold">$0.00</div>

              </>
            ) : (
            <div className="text-3xl font-bold">${earned.toFixed(2)}</div>)}
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
)
}

