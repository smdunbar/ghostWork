"use client"

import { ArrowRight, Info } from "lucide-react"
import StatsCharts from "./stats-charts"

export default function TaskHub({ onClaimTask, taskCompleted, onEndShift }) {
  return (
    <div className="min-h-[calc(100vh-73px)] bg-white">
      {/* Header with End Shift */}
      <div className="max-w-5xl mx-auto px-6 pt-4">
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

      {/* Stats Row */}
      <div className="max-w-5xl mx-auto px-6 mb-8">
        <div className="flex items-center gap-8">
          <div>
            <div className="text-3xl font-bold">8</div>
            <div className="text-xs text-[#828282]">tasks completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold">21</div>
            <div className="text-xs text-[#828282]">weekly hours log</div>
          </div>
          <div>
            <div className="text-3xl font-bold">347</div>
            <div className="text-xs text-[#828282] flex items-center gap-1">
              judgments rate
              <Info className="w-3 h-3" />
            </div>
          </div>
          <div className="bg-[#19c093] text-white px-4 py-2 rounded">
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
          <div className="border border-[#d9d9d9] rounded-lg p-4 flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">Hate Speech Classifications</div>
              <div className="text-xs text-[#828282]">Average Expected Time: 3 minutes</div>
            </div>
            <button
              onClick={onClaimTask}
              className="inline-flex items-center gap-2 bg-[#19c093] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#17a882] transition-colors"
            >
              Claim Task
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="text-[#828282] text-sm text-center py-8">
            no available tasks.
          </div>
        )}
      </div>
    </div>
  )
}
