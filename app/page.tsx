"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import HomeScreen from "@/components/home-screen"
import QuestionnaireFlow from "@/components/questionnaire-flow"
import MotivationGenerator from "@/components/motivation-generator"

type Screen = "home" | "questionnaire" | "motivation"

export default function Page() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home")

  return (
    <div className="relative min-h-screen">
      {currentScreen !== "home" && (
        <div className="absolute top-6 right-6 z-10">
          <Button onClick={() => setCurrentScreen("home")} variant="outline" size="sm" className="gap-2">
            <Home className="h-4 w-4" />
            Home
          </Button>
        </div>
      )}

      {currentScreen === "home" && (
        <HomeScreen
          onShouldIRun={() => setCurrentScreen("questionnaire")}
          onMotivateMe={() => setCurrentScreen("motivation")}
        />
      )}

      {currentScreen === "questionnaire" && <QuestionnaireFlow />}

      {currentScreen === "motivation" && <MotivationGenerator />}
    </div>
  )
}
