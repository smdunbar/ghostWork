"use client"

export default function Navigation({ currentPage, onNavigate }) {
  const navItems = [
    { label: "Home", page: "home" },
    { label: "Experience", page: "experience" },
    { label: "Stories", page: "stories" },
    { label: "Research", page: "research" },
    { label: "About", page: "about" },
    
  ]

  return (
    <header className="border-b border-neutral-800 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Ghost Work Logo" className="h-8 w-8" />
          <span className="font-medium text-white text-xl">Ghost Work</span>
        </div>
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`text-lg transition-colors ${
                currentPage === item.page
                  ? "text-emerald-400 font-medium"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
