"use client"

import { ArrowRight } from "lucide-react"

export default function HomePage({ onNavigate }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Main Hero Section */}
      <div className="border-2 border-[#19c093] rounded-lg p-8 mb-8">
        <h1 className="text-[#19c093] font-bold text-xl mb-4 underline">
          Data Worker Experience
        </h1>
        <p className="text-[#828282] text-sm leading-relaxed mb-6 max-w-md">
          Brief overview of experience: Lorem ipsum dolor sit amet, consectetur adipiscing 
          elit. Aliquam vestibulum est mi. Pellentesque iaculis. Curabitur maximus semper 
          nibh vitae. Cras pretium felis orci, sed rutrum mauris ultricies quis.
        </p>
        <button
          onClick={() => onNavigate("experience")}
          className="bg-[#19c093] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#17a882] transition-colors"
        >
          Enter into the experience here
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-[#d44d5c] rounded-lg p-6">
          <h2 className="text-white font-bold text-lg mb-2">Research</h2>
          <p className="text-white/80 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="bg-[#f3b700] rounded-lg p-6">
          <h2 className="text-white font-bold text-lg mb-2">About</h2>
          <p className="text-white/80 text-sm">
            Learn more about the developers behind Ghost Work
          </p>
        </div>
      </div>
    </div>
  )
}
