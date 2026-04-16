"use client"

export default function Navigation({ currentPage, onNavigate }) {
  const navItems = [
    { label: "Home", page: "home" },
    { label: "Experience", page: "experience" },
    { label: "Research", page: "research" },
    { label: "About", page: "about" },
  ]

  return (
    <header className="border-b border-[#f2f2f2] bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#19c093]" />
          <span className="font-medium text-[#000000]">Ghost Work</span>
        </div>
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`text-sm transition-colors ${
                currentPage === item.page
                  ? "text-[#19c093] font-medium"
                  : "text-[#828282] hover:text-[#000000]"
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
