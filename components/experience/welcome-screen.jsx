"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

export default function WelcomeScreen({ onStartShift }) {
  const fullText = `Welcome to Ghost Work. A simulation of the data worker experience.

While you traverse the simulation, imagine yourself working as a data labeler whose income relies primarily on this job. This experience aims to replicate the strenuous working conditions data workers endure on a daily basis.

Your goal is to make the most money possible by correctly completing the task.

glhf.`

  const [displayedText, setDisplayedText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
        setIsTypingComplete(true)
      }
    }, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-[calc(100vh-73px)] flex items-center justify-center bg-[#1a1a1a]">
      <div className="max-w-lg px-8">
        <div className="text-white text-sm leading-relaxed whitespace-pre-line min-h-[200px]">
          {displayedText}
          {!isTypingComplete && <span className="animate-pulse">|</span>}
        </div>
        
        {isTypingComplete && (
          <button
            onClick={onStartShift}
            className="mt-8 inline-flex items-center gap-2 bg-[#19c093] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#17a882] transition-colors"
          >
            Start your shift
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  )
}
