"use client"

import { ArrowRight } from "lucide-react"

export default function TaskSummary({ onReturnToHub }) {
  return (
    <div className="min-h-[calc(100vh-73px)] bg-white">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 pt-4">
        <div className="flex items-center gap-2 mb-12">
          <div className="w-3 h-3 rounded-full bg-[#19c093]" />
          <span className="font-medium text-[#000000]">Ghost Work</span>
        </div>
      </div>

      {/* Summary Content */}
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-bold text-sm mb-6">Summary of Task</h2>

        {/* Top Stats Row */}
        <div className="flex items-start gap-8 mb-8">
          <div>
            <div className="text-4xl font-bold">30</div>
            <div className="text-xs text-[#828282]">questions answered</div>
          </div>
          <div>
            <div className="text-4xl font-bold font-mono text-[#19c093]">0:05:31</div>
            <div className="text-xs text-[#828282]">time taken</div>
          </div>
          <div className="bg-[#d44d5c] text-white px-6 py-4 rounded">
            <div className="text-3xl font-bold">$0.11</div>
            <div className="text-xs">earnings from task</div>
          </div>
        </div>

        {/* Judgments */}
        <div className="mb-6">
          <h3 className="font-bold text-sm mb-3">Judgments</h3>
          <div className="flex items-center gap-8">
            <div>
              <div className="text-3xl font-bold text-[#19c093]">17</div>
              <div className="text-xs text-[#828282]">trusted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#d44d5c]">13</div>
              <div className="text-xs text-[#828282]">untrusted</div>
            </div>
          </div>
        </div>

        {/* Label Distribution */}
        <div className="mb-12">
          <h3 className="font-bold text-sm mb-3">Label distribution</h3>
          <div className="flex items-center gap-8">
            <div>
              <div className="text-3xl font-bold">12</div>
              <div className="text-xs text-[#828282]">hate speech</div>
            </div>
            <div>
              <div className="text-3xl font-bold">10</div>
              <div className="text-xs text-[#828282]">offensive</div>
            </div>
            <div>
              <div className="text-3xl font-bold">8</div>
              <div className="text-xs text-[#828282]">neither</div>
            </div>
          </div>
        </div>

        {/* Return Button */}
        <div className="flex justify-center">
          <button
            onClick={onReturnToHub}
            className="inline-flex items-center gap-2 bg-[#d44d5c] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#b33d4a] transition-colors"
          >
            Return to task hub
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
