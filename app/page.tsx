"use client"

import { useState } from "react"
import { ArrowRight, ShieldCheck } from "lucide-react"

export default function FeedbackScreen() {
  const [feedback, setFeedback] = useState("")

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Mobile Container */}
      <div className="w-[390px] h-[844px] bg-white rounded-3xl overflow-hidden shadow-2xl border border-border/50 flex flex-col">
        
        {/* Content Area */}
        <main className="flex-1 px-6 pt-12 pb-6 flex flex-col">
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-[#1B3A6B] font-bold text-2xl mb-2">
              One quick thing <span role="img" aria-label="eyes">👀</span>
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed">
              How was class today? This is just between us — your teacher only sees patterns, never your name.
            </p>
          </div>

          {/* Text Area */}
          <div className="flex-1 flex flex-col gap-4">
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Anything about how it was taught, the pace, the vibe..."
              className="w-full flex-1 min-h-[200px] p-4 rounded-2xl bg-[#F8FAFC] border border-border text-foreground text-base leading-relaxed placeholder:text-muted-foreground resize-none outline-none focus:ring-2 focus:ring-[#0D7A5F]/20 focus:border-[#0D7A5F] transition-all"
            />
            
            {/* Reassurance Text */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-[#0D7A5F]" />
              <p className="text-sm">
                Fully anonymous. Your name is never shared.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full mt-6 bg-[#0D7A5F] hover:bg-[#0A6850] text-white font-semibold py-4 px-6 rounded-full flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#0D7A5F]/20">
            <span>Share</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </main>

        {/* Bottom Safe Area */}
        <div className="h-8 bg-white" />
      </div>
    </div>
  )
}
