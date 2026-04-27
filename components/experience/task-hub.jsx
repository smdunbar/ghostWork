"use client"

import { ArrowRight, Info } from "lucide-react"
import StatsCharts from "./stats-charts"

export default function TaskHub({ onClaimTask, taskCompleted, onEndShift }) {
  return (
    <div className="min-h-[calc(100vh-73px)] bg-neutral-950">
      {/* Header with End Shift */}
      <div className="max-w-5xl mx-auto px-6 pt-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
             <img src="/logo.png" alt="Ghost Work Logo" className="h-8 w-8" />
            <span className="font-medium text-xl text-white">Ghost Work</span>
          </div>
          <button
            onClick={onEndShift}
            className="text-lg text-neutral-950 bg-red-500 hover:bg-red-400 font-medium transition-colors px-8 py-2 rounded-full inline-flex items-center gap-2"
          >
            End your shift
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="max-w-5xl mx-auto px-6 mb-8">
        <div className="flex items-center gap-8">
          <div>
            <div className="text-3xl font-bold">8</div>
            <div className="text-xs text-neutral-400">tasks completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold">21</div>
            <div className="text-xs text-neutral-400">weekly hours log</div>
          </div>
          <div>
            <div className="text-3xl font-bold">347</div>
            <div className="text-xs text-neutral-400 flex items-center gap-1">
              judgments rate
              <Info className="w-3 h-3" />
            </div>
          </div>
          <div className="bg-emerald-400 text-neutral-950 px-4 py-2 rounded">
            <div className="text-2xl font-bold">$43.76</div>
            <div className="text-xs">weekly earnings</div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="max-w-5xl mx-auto px-6 mb-8">
        <StatsCharts />
      </div>

      {/* Available Tasks */}
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-bold text-sm mb-4">Available Tasks</h2>
        
        {!taskCompleted ? (
          <div className="border border-neutral-700 rounded-lg p-4 flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">Hate Speech Classifications</div>
              <div className="text-xs text-neutral-400">Average Expected Time: 3 minutes</div>
              <div className="text-xs text-neutral-400">Client: defNotX</div>

            </div>
            <button
              onClick={onClaimTask}
              className="inline-flex items-center gap-2 bg-emerald-400 text-neutral-950 px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-300 transition-colors"
            >
              Claim Task
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="text-neutral-400 text-sm text-center py-8">
            no available tasks.
          </div>
        )}
      </div>
    </div>
  )
}
