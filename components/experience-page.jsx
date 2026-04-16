"use client"

import { useState } from "react"
import ContentWarning from "./experience/content-warning"
import WelcomeScreen from "./experience/welcome-screen"
import TransitionScreen from "./experience/transition-screen"
import TaskHub from "./experience/task-hub"
import ActiveTask from "./experience/active-task"
import TaskSummary from "./experience/task-summary"

export default function ExperiencePage({ onNavigate }) {
  const [state, setState] = useState("warning")
  const [taskCompleted, setTaskCompleted] = useState(false)

  const handleStartShift = () => {
    setState("transition")
    setTimeout(() => {
      setState("taskHub")
    }, 1500)
  }

  const handleClaimTask = () => {
    setState("activeTask")
  }

  const handleTaskComplete = () => {
    setTaskCompleted(true)
    setState("summary")
  }

  const handleReturnToHub = () => {
    setState("taskHub")
  }

  const handleEndShift = () => {
    setState("welcome")
    setTaskCompleted(false)
  }

  switch (state) {
    case "warning":
      return <ContentWarning onContinue={() => setState("welcome")} />
    case "welcome":
      return <WelcomeScreen onStartShift={handleStartShift} />
    case "transition":
      return <TransitionScreen />
    case "taskHub":
      return (
        <TaskHub 
          onClaimTask={handleClaimTask} 
          taskCompleted={taskCompleted}
          onEndShift={handleEndShift}
        />
      )
    case "activeTask":
      return (
        <ActiveTask 
          onComplete={handleTaskComplete}
          onEndShift={handleEndShift}
        />
      )
    case "summary":
      return <TaskSummary onReturnToHub={handleReturnToHub} />
    default:
      return <ContentWarning onContinue={() => setState("welcome")} />
  }
}
