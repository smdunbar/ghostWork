"use client"

export default function StoriesPage() {
  const stories = [
    {
      name: "Oskarina Fuentes Anaya ",
      description: "Companies like Appen profited off of Venezuela's economic crisis.",
      image: "oskarina.png"
    },
    {
      name: "Other",
      description: "cool girl or whatever",
      image: "simone.jpeg"
    },
  ]

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-amber-400 font-bold text-3xl mb-16 text-center">Read Their Stories</h1>

    
      <div className="space-y-8 flex flex-row gap-16 justify-center"  >
       {stories.map((story, index) => (
          <div  className="flex  gap-6 flex-col">
            {/* Placeholder Avatar */}
            <img src={story.image} alt={story.name} className="w-128 h-100 bg-neutral-900 rounded-lg object-cover object-bottom flex-shrink-0 shadow-lg border-5 border-amber-400" />
            
            <div className="pt-2 max-w-xs">
              <h2 className="font-medium text-lg text-white mb-1">{story.name}</h2>
              <p className="text-sm text-neutral-300">{story.description}</p>
            </div>
          </div>
      
    ))}
    </div>
    </div>

  )
}
