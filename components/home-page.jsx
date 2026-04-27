"use client"

import { ArrowRight } from "lucide-react"

export default function HomePage({ onNavigate }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
    
      <div className="border-5 border-emerald-400 rounded-lg p-8 mb-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <div className="flex">
        <img src="laptop-typing.jpg" alt="Laptop Typing" className="w-1/2 rounded-lg mr-8" />
        <div>
          <h1 className="text-emerald-400 font-bold text-3xl mb-4">
            Data Worker Experience
          </h1>
          <p className="text-neutral-300 text-lg leading-relaxed mb-6 max-w-md">
            Take a deep dive into the world of ghost work and experience the challenges and realities faced by data workers. This interactive experience is designed to shed light on the often invisible labor that powers our digital world. Do you have what it takes to navigate the complexities of ghost work? Enter the experience and find out!
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => onNavigate("experience")}
              className="bg-emerald-400 text-neutral-950 px-10 py-2 rounded-full text-lg font-medium hover:bg-emerald-300 transition-colors"
            >
              Enter experience <ArrowRight className="inline-block ml-2" />
            </button>
          </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-2 gap-6">
        <button onClick={() => onNavigate("research")} className="border-5 border-red-500 bg-neutral-900 rounded-lg p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
          <div className="flex items-center  gap-8 justify-evenly">
          
          <h2 className="text-red-500 font-bold text-2xl mb-2">Research</h2>
          <div className="w-2 h-20 bg-red-500 rounded-full"></div>
          <p className="text-neutral-300 text-lg ">
            Explore the research and findings that informed our design.
          </p>
          
          
            </div>
        </button>
        <button onClick={() => onNavigate("about")} className="border-5 border-amber-400 bg-neutral-900 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
          <div className="flex items-center gap-8 justify-evenly">
          
          <h2 className="text-amber-400 font-bold text-2xl mb-2">About</h2>
          <div className="w-2 h-20 bg-amber-400 rounded-full"></div>
          <p className="text-neutral-300 text-lg">
            Like our work? Click here to learn more about the developers behind Ghost Work.
          </p>
          
            </div>
            </button>
       
      </div>
    </div>
  )
}
