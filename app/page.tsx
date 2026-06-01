"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const subjects = [
  { id: "maths", name: "Maths", emoji: "📐" },
  { id: "science", name: "Science", emoji: "🔬" },
  { id: "hindi", name: "Hindi", emoji: "📖" },
  { id: "geography", name: "Geography", emoji: "🌍" },
  { id: "computer", name: "Computer Science", emoji: "💻" },
  { id: "history", name: "History", emoji: "📜" },
]

export default function SubjectSelection() {
  const [selected, setSelected] = useState<string[]>(["maths", "science"])

  const toggleSubject = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((s) => s !== id))
    } else if (selected.length < 2) {
      setSelected([...selected, id])
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Mobile Container */}
      <div className="w-[390px] min-h-[844px] bg-background rounded-3xl overflow-hidden shadow-2xl border border-border/50 flex flex-col">
        
        {/* Main Content */}
        <main className="px-6 py-8 flex flex-col flex-1">
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-[#1B3A6B] leading-tight">
              Which 2 subjects today?
            </h1>
            <p className="text-muted-foreground mt-2">
              Pick what you feel like talking about
            </p>
          </div>

          {/* Subject Grid */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {subjects.map((subject) => {
              const isSelected = selected.includes(subject.id)
              return (
                <button
                  key={subject.id}
                  onClick={() => toggleSubject(subject.id)}
                  className={`
                    flex flex-col items-center justify-center gap-2 p-5 rounded-2xl 
                    transition-all duration-200 cursor-pointer border-2
                    ${isSelected 
                      ? "bg-teal-50 border-[#0D7A5F] shadow-sm" 
                      : "bg-card border-border hover:border-muted-foreground/30 hover:bg-muted/50"
                    }
                  `}
                >
                  <span className="text-3xl">{subject.emoji}</span>
                  <span className={`text-sm font-medium ${isSelected ? "text-[#0D7A5F]" : "text-foreground"}`}>
                    {subject.name}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Selection Indicator */}
          <p className="text-center text-sm text-muted-foreground mb-6">
            {selected.length}/2 selected
          </p>

          {/* Spacer */}
          <div className="flex-1" />

          {/* CTA Button */}
          <Button 
            disabled={selected.length === 0}
            className="w-full bg-[#0D7A5F] hover:bg-[#0A6850] text-white font-semibold py-6 text-base rounded-xl shadow-lg shadow-teal-500/20 transition-all hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"
          >
            {"Let's go →"}
          </Button>

        </main>

        {/* Bottom Safe Area */}
        <div className="h-8 bg-background" />
      </div>
    </div>
  )
}
