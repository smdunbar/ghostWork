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
      <h1 className="text-[#f3b700] font-bold text-3xl mb-8 text-center">About the Developers</h1>

      <div className="space-y-8">
       
          <div  className="flex items-start gap-16">
            {/* Placeholder Avatar */}
            <img src="avery.jpeg" alt="Avery Avatar" className="w-64 h-72 bg-[#f2f2f2] rounded-lg object-cover flex-shrink-0 shadow-lg border-5 border-[#f3b700]" />
            
            <div className="pt-2">
              <h2 className="font-medium text-[#000000] mb-1">{"Avery Espiritu"}</h2>
              <p className="text-sm text-[#666666]">{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at odio non ligula eleifend scelerisque. Suspendisse nec rhoncus purus. Quisque efficitur nulla urna, sed interdum quam accumsan non. Nullam dictum felis sit amet consectetur lacinia. Suspendisse orci dui"}</p>
            </div>
          </div>
          <div  className="flex justify-end items-center gap-16">
             <div className="pt-2">
              <h2 className="font-medium text-[#000000] mb-1">{"Simone Dunbar"}</h2>
              <p className="text-sm text-[#666666]">{"Hey! I’m Simone, a computer science and applied mathematics student with a passion for creating impactful solutions that bridge the gap between technology and design. My work spans web development, machine learning, and graphic design, allowing me to blend technical skills with creative problem-solving. I’ve had the opportunity to work on projects focused on accessibility in UI components, developing web applications that track prescription drug interactions, and designing tech solutions to improve healthcare access for women. I’m driven by a desire to learn and innovate, always seeking opportunities to use my skills to create user-centered, inclusive experiences. With a commitment to making a positive impact, I’m excited to continue growing and contributing to the tech industry."}</p>
            </div>
            {/* Placeholder Avatar */}
            <div className="w-64 h-72 bg-[#f2f2f2] rounded-xl flex-shrink-0 flex items-center justify-center">
            <img src="simone.jpeg" alt="Simone Avatar" className="w-64 h-72 bg-[#f2f2f2] rounded-lg object-cover shadow-lg border-5 border-[#f3b700]" />
            </div>
           
          </div>

      </div>
    </div>
  )
}
