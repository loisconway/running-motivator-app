"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles, Loader2 } from "lucide-react"
import Image from "next/image"

export default function MotivationGenerator() {
  const [motivation, setMotivation] = useState<string>("")
  const [isGenerating, setIsGenerating] = useState(false)

  const generateMotivation = async () => {
    setIsGenerating(true)
    setMotivation("")

    try {
      const response = await fetch("/api/generate-motivation", {
        method: "POST",
      })

      if (!response.ok) throw new Error("Failed to generate motivation")

      const data = await response.json()
      setMotivation(data.text)
    } catch (error) {
      console.error("Error generating motivation:", error)
      setMotivation("Every step you take is a victory. Get out there and show yourself what you're capable of!")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-2xl p-12 space-y-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden bg-secondary/10">
              <Image src="/images/coach-bennot.png" alt="Coach Bennot" fill className="object-cover" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-balance">Coach Bennot</h2>
        </div>

        {motivation ? (
          <div className="space-y-6">
            <Card className="p-8 bg-secondary/5 border-secondary/20">
              <p className="text-xl leading-relaxed text-balance">{motivation}</p>
            </Card>
            <Button
              onClick={generateMotivation}
              disabled={isGenerating}
              size="lg"
              variant="secondary"
              className="w-full text-lg py-6"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Get More Motivation
                </>
              )}
            </Button>
          </div>
        ) : (
          <Button onClick={generateMotivation} disabled={isGenerating} size="lg" className="w-full text-lg py-6">
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Generate Motivation
              </>
            )}
          </Button>
        )}
      </Card>
    </div>
  )
}
