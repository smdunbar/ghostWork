"use client"

import { createContext, useContext } from "react"
import { useActiveTaskState } from "./useActiveTaskState"

const ActiveTaskContext = createContext()

export function ActiveTaskProvider({ children }) {
  const state = useActiveTaskState()
  return (
    <ActiveTaskContext.Provider value={state}>
      {children}
    </ActiveTaskContext.Provider>
  )
}

export function useActiveTask() {
  const context = useContext(ActiveTaskContext)
  if (!context) {
    throw new Error("useActiveTask must be used within ActiveTaskProvider")
  }
  return context
}
