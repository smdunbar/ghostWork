"use client"

import { ArrowRight, ArrowLeft } from "lucide-react"


export default function ContentWarning({ onContinue, onReturn }) {
  return (
    <div className="min-h-[calc(100vh-73px)] flex items-center justify-center bg-neutral-950">
      <div className="max-w-2xl text-center px-6">
        <h2 className="text-3xl font-bold tracking-wide mb-6 text-red-500 ">CONTENT WARNING:</h2>
        <p className="text-xl text-neutral-300 leading-relaxed mb-8">
          This experience contains depictions of the working conditions and challenges faced by data workers, which may include themes of labor exploitation, economic precarity, and emotional distress. 
          Additionally, this experiences includes instances of hateful and offensive speech that data workers may encounter in their work. 
          It is designed to provide insight into the realities of ghost work, but may be triggering for some individuals. Please proceed with caution and take care of your well-being while engaging with this content.
        </p>
        <div className="flex justify-center gap-4">
         <button
          onClick={onReturn}
          className="inline-flex items-center gap-2 bg-red-500 text-neutral-950 px-8 py-2 rounded-full text-lg font-medium hover:bg-red-400 transition-colors"
        >
         
          <ArrowLeft className="w-4 h-4" />
           Return home
          
        </button>
        <button
          onClick={onContinue}
          className="inline-flex items-center gap-2 bg-emerald-400 text-neutral-950 px-10 py-2 rounded-full text-lg font-medium hover:bg-emerald-300 transition-colors"
        >
          Continue
          <ArrowRight className="w-4 h-4" />
        </button>
        </div>
      </div>
    </div>
  )
}
