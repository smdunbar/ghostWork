import { useState } from "react"

export function useActiveTaskState() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [earned, setEarned] = useState(0)
  const [judgmentsMade, setJudgmentsMade] = useState(0)
  const [accuracy, setAccuracy] = useState(0)
  const [hateSpeechCount, setHateSpeechCount] = useState(0)
  const [offensiveCount, setOffensiveCount] = useState(0)
  const [neitherCount, setNeitherCount] = useState(0)
  const [finalTime, setFinalTime] = useState(0)

  return {
    currentTextIndex,
    setCurrentTextIndex,
    timeElapsed,
    setTimeElapsed,
    earned,
    setEarned,
    judgmentsMade,
    setJudgmentsMade,
    accuracy,
    setAccuracy,
    hateSpeechCount,
    setHateSpeechCount,
    offensiveCount,
    setOffensiveCount,
    neitherCount,
    setNeitherCount,
    finalTime,
    setFinalTime,
  }
}
