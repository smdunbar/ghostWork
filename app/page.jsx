"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import HomePage from "@/components/home-page"
import ExperiencePage from "@/components/experience-page"
import ResearchPage from "@/components/research-page"
import AboutPage from "@/components/about-page"
import StoriesPage from "@/components/stories-page"

export default function GhostWork() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />
      case "experience":
        return <ExperiencePage onNavigate={setCurrentPage} />
      case "research":
        return <ResearchPage />
      case "about":
        return <AboutPage />
      case "stories":
        return <StoriesPage/>
      default:
        return <HomePage onNavigate={setCurrentPage} />
    }
  }

  return (
    
    <div className="min-h-screen bg-neutral-950">
      {currentPage === "experience" ? null : <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />}
      <main>{renderPage()}</main>
    </div>
  )
}
