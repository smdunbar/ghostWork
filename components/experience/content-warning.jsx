"use client"

import { ArrowRight } from "lucide-react"

export default function ContentWarning({ onContinue }) {
  return (
    <div className="min-h-[calc(100vh-73px)] flex items-center justify-center bg-white">
      <div className="max-w-md text-center px-6">
        <h2 className="text-sm font-bold tracking-wide mb-6">CONTENT WARNING:</h2>
        <p className="text-sm text-[#828282] leading-relaxed mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum est 
          et elit ullamcorper accumsan. Curabitur laoreet maximus est. Cras pretium felis 
          orci, sed rutrum mauris ultricies quis. By clicking continue, you have read the 
          content warning and have acknowledged the potential harms of this experience.
        </p>
        <button
          onClick={onContinue}
          className="inline-flex items-center gap-2 bg-[#19c093] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#17a882] transition-colors"
        >
          Continue
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
