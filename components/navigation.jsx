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
          <img src="/logo.png" alt="Ghost Work Logo" className="h-8 w-8" />
          <span className="font-medium text-[#000000] text-xl">Ghost Work</span>
        </div>
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`text-lg transition-colors ${
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
