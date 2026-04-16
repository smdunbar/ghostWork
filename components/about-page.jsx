"use client"

export default function AboutPage() {
  const developers = [
    {
      name: "Avery Espiritu",
      description: "cool guy or whatever",
    },
    {
      name: "Simone Dunbar",
      description: "cool girl or whatever",
    },
  ]

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-[#19c093] font-bold text-xl mb-8">About the Developers</h1>

      <div className="space-y-8">
        {developers.map((dev, index) => (
          <div key={index} className="flex items-start gap-6">
            {/* Placeholder Avatar */}
            <div className="w-32 h-32 bg-[#f2f2f2] rounded-lg flex-shrink-0" />
            
            <div className="pt-2">
              <h2 className="font-medium text-[#000000] mb-1">{dev.name}</h2>
              <p className="text-sm text-[#828282]">{dev.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
