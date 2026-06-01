"use client"

import { useState } from "react"
import { Send } from "lucide-react"

type Message = {
  id: number
  sender: "kyunrious" | "student"
  text: string
}

const initialMessages: Message[] = [
  { id: 1, sender: "kyunrious", text: "Hey! You had Maths today. What did you cover? 😊" },
  { id: 2, sender: "student", text: "Fractions. Didn't really get the word problems tbh" },
  { id: 3, sender: "kyunrious", text: "Word problems are tricky! Key rule — 'of' means multiply, 'shared equally' means divide. Want an example?" },
  { id: 4, sender: "student", text: "yes" },
  { id: 5, sender: "kyunrious", text: "If you have ¾ of a pizza shared between 2 people, each gets ⅜. That's ¾ ÷ 2 = ⅜. Makes sense?" },
  { id: 6, sender: "student", text: "ohh okay yeah" },
  { id: 7, sender: "kyunrious", text: "Nice! Before we move on — why do you think you learned fractions today? Take a guess 🤔" },
]

export default function ChatScreen() {
  const [messages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState("")

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Mobile Container */}
      <div className="w-[390px] h-[844px] bg-background rounded-3xl overflow-hidden shadow-2xl border border-border/50 flex flex-col">
        
        {/* Header */}
        <header className="bg-[#1B3A6B] px-4 py-4 flex items-center gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-[#0D7A5F] flex items-center justify-center">
            <span className="text-white font-bold text-lg">K</span>
          </div>
          {/* Name and Subject */}
          <div>
            <h1 className="text-white font-semibold text-base">KYUNrious</h1>
            <p className="text-white/70 text-sm">· Maths</p>
          </div>
        </header>

        {/* Chat Messages */}
        <main className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-[#F8FAFC]">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "student" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`
                  max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed
                  ${message.sender === "kyunrious" 
                    ? "bg-[#D6E8F8] text-[#1B3A6B] rounded-tl-md" 
                    : "bg-[#E5E7EB] text-foreground rounded-tr-md"
                  }
                `}
              >
                {message.text}
              </div>
            </div>
          ))}
        </main>

        {/* Input Bar */}
        <div className="bg-white border-t border-border px-4 py-3">
          <div className="flex items-center gap-3 bg-[#F1F5F9] rounded-full px-4 py-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type in English, Hindi, anything..."
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
            />
            <button 
              className="w-9 h-9 rounded-full bg-[#0D7A5F] flex items-center justify-center hover:bg-[#0A6850] transition-colors"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Bottom Safe Area */}
        <div className="h-6 bg-white" />
      </div>
    </div>
  )
}
