"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, XCircle } from "lucide-react"

type Question = {
  id: string
  text: string
  yesLeadsTo: "next" | "no-run" | "yes-run"
  noLeadsTo: "next" | "no-run" | "yes-run"
}

const questions: Question[] = [
  {
    id: "injured",
    text: "Are you currently injured or in pain?",
    yesLeadsTo: "no-run",
    noLeadsTo: "next",
  },
  {
    id: "sick",
    text: "Are you feeling sick or unwell?",
    yesLeadsTo: "no-run",
    noLeadsTo: "next",
  },
  {
    id: "rested",
    text: "Did you get adequate rest last night?",
    yesLeadsTo: "yes-run",
    noLeadsTo: "no-run",
  },
]

export default function QuestionnaireFlow() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [result, setResult] = useState<"yes-run" | "no-run" | null>(null)

  const currentQuestion = questions[currentQuestionIndex]

  const handleAnswer = (answer: "yes" | "no") => {
    const nextStep = answer === "yes" ? currentQuestion.yesLeadsTo : currentQuestion.noLeadsTo

    if (nextStep === "next") {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setResult(nextStep)
    }
  }

  if (result) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-2xl p-12 space-y-8 text-center">
          <div className="flex justify-center">
            {result === "yes-run" ? (
              <div className="p-6 bg-primary/10 rounded-full">
                <CheckCircle2 className="h-24 w-24 text-primary" />
              </div>
            ) : (
              <div className="p-6 bg-destructive/10 rounded-full">
                <XCircle className="h-24 w-24 text-destructive" />
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-balance">
              {result === "yes-run" ? "Yes, Go Run!" : "Take a Rest Day"}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto text-balance">
              {result === "yes-run"
                ? "Your body is ready! Lace up those shoes and hit the road. Every run makes you stronger."
                : "Listen to your body. Rest and recovery are just as important as training. Come back stronger tomorrow."}
            </p>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-2xl p-12 space-y-8">
        <div className="space-y-4">
          <div className="text-sm text-muted-foreground">
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-balance leading-tight">{currentQuestion.text}</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <Button size="lg" className="text-xl py-8" onClick={() => handleAnswer("yes")}>
            Yes
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-xl py-8 bg-transparent"
            onClick={() => handleAnswer("no")}
          >
            No
          </Button>
        </div>

        <div className="flex gap-2 justify-center">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-12 rounded-full transition-colors ${
                index === currentQuestionIndex
                  ? "bg-primary"
                  : index < currentQuestionIndex
                    ? "bg-primary/50"
                    : "bg-muted"
              }`}
            />
          ))}
        </div>
      </Card>
    </div>
  )
}
