"use client"

import { ArrowRight } from "lucide-react"

export default function HomePage({ onNavigate }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
    
      <div className="border-5 border-[#19c093] rounded-lg p-8 mb-8 shadow-lg">
      <div className="flex">
        <img src="laptop-typing.jpg" alt="Laptop Typing" className="w-1/2 rounded-lg mr-8" />
        <div>
          <h1 className="text-[#19c093] font-bold text-3xl mb-4">
            Data Worker Experience
          </h1>
          <p className="text-[#666666] text-lg leading-relaxed mb-6 max-w-md">
            Take a deep dive into the world of ghost work and experience the challenges and realities faced by data workers. This interactive experience is designed to shed light on the often invisible labor that powers our digital world. Do you have what it takes to navigate the complexities of ghost work? Enter the experience and find out!
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => onNavigate("experience")}
              className="bg-[#19c093] text-white px-10 py-2 rounded-full text-lg font-medium hover:bg-[#17a882] transition-colors"
            >
              Enter experience <ArrowRight className="inline-block ml-2" />
            </button>
          </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-2 gap-6">
        <div className="border-5 border-[#d44d5c] bg-white rounded-lg p-6 shadow-lg">
          <div className="flex items-center  gap-8 justify-evenly">
            <div className="w-72">
          <h2 className="text-[#d44d5c] font-bold text-2xl mb-2">Research</h2>
          <p className="text-[#666666] text-lg">
            Explore the research and findings that informed the design of Ghost Work.
          </p>
          </div>
          <button
              onClick={() => onNavigate("research")}
              className="bg-[#d44d5c] text-white px-10 py-2 rounded-full text-lg font-medium hover:bg-[#b83d4a] transition-colors"
            >
              <ArrowRight className="inline-block ml-2" />
            </button>
            </div>
        </div>
        <div className="border-5 border-[#f3b700] bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-8 justify-evenly">
            <div className="w-72">
          <h2 className="text-[#f3b700] font-bold text-2xl mb-2">About</h2>
          <p className="text-[#666666] text-lg">
            Like our work? Click here to learn more about the developers behind Ghost Work.
          </p>
          </div>
          <button
              onClick={() => onNavigate("about")}
              className="bg-[#f3b700] text-white px-10 py-2 rounded-full text-lg font-medium hover:bg-[#d4a600] transition-colors"
            >
              <ArrowRight className="inline-block ml-2" />
            </button>
            </div>
        </div>
      </div>
    </div>
  )
}
