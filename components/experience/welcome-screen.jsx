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
  const [showButton, setShowButton] = useState(false)

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
    }, 40)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (isTypingComplete) {
      const timer = setTimeout(() => {
        setShowButton(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [isTypingComplete])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a]">
      <div className="w-full px-8 justify-center flex">
        <div className="max-w-lg">
        <div className="text-white text-lg leading-relaxed whitespace-pre-line min-h-[200px]">
          {displayedText}
          {!isTypingComplete && <span className="animate-pulse">|</span>}
        </div>
        
        {showButton && (
          <div className="flex justify-center mt-8">
            <button
              onClick={onStartShift}
              className="inline-flex items-center gap-2 bg-[#19c093] text-white px-10 py-2 rounded-full text-lg font-medium hover:bg-[#17a882] transition-colors"
            >
              Start your shift
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
      </div>
    </div>
  )
}
