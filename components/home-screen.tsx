"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Zap } from "lucide-react"
import Image from "next/image"

interface HomeScreenProps {
  onShouldIRun: () => void
  onMotivateMe: () => void
}

export default function HomeScreen({ onShouldIRun, onMotivateMe }: HomeScreenProps) {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-balance">Run MotivAItor</h1>
          <p className="text-xl text-muted-foreground text-balance">Your personal companion to get you moving</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 space-y-6 hover:shadow-lg transition-shadow cursor-pointer group" onClick={onMotivateMe}>
            <div className="flex justify-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                <Image src="/images/coach-bennot.png" alt="Coach Bennot" fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-center text-balance">Coach Ben-not</h2>
              <p className="text-muted-foreground text-center leading-relaxed">
                Coach Ben-not can inspire you to get you to your next starting line.
              </p>
            </div>
            <Button className="w-full text-lg py-6" size="lg" variant="secondary" onClick={onMotivateMe}>
              Motivate Me
            </Button>
          </Card>
          <Card className="p-8 space-y-6 hover:shadow-lg transition-shadow cursor-pointer group" onClick={onShouldIRun}>
            <div className="flex justify-center">
              <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Zap className="h-12 w-12 text-primary" />
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-center text-balance">Should I Run Today?</h2>
              <p className="text-muted-foreground text-center leading-relaxed">
                Answer a few quick questions to find out if today is your day to hit the pavement
              </p>
            </div>
            <Button className="w-full text-lg py-6" size="lg" onClick={onShouldIRun}>
              Start Questions
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
