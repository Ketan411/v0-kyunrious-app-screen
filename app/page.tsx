"use client"

import { useState, useRef, useEffect } from "react"
import { Calendar, Lightbulb, Check, X, Send, Shield, ChevronLeft, Star, Flame, Loader2 } from "lucide-react"
import { useChat } from "@ai-sdk/react"

type Screen = "home" | "subjects" | "chat" | "feedback" | "streak" | "teacher"

export default function KYUNriousApp() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home")

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-[390px] h-[844px] bg-white rounded-3xl overflow-hidden shadow-2xl border border-border/50 flex flex-col">
        {currentScreen === "home" && <HomeScreen onNavigate={setCurrentScreen} />}
        {currentScreen === "subjects" && <SubjectPicker onNavigate={setCurrentScreen} />}
        {currentScreen === "chat" && <ChatScreen onNavigate={setCurrentScreen} />}
        {currentScreen === "feedback" && <FeedbackScreen onNavigate={setCurrentScreen} />}
        {currentScreen === "streak" && <StreakScreen onNavigate={setCurrentScreen} />}
        {currentScreen === "teacher" && <TeacherDashboard onNavigate={setCurrentScreen} />}
      </div>
    </div>
  )
}

// ============ HOME SCREEN ============
function HomeScreen({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  const subjects = ["Maths", "Science", "Hindi", "English", "History", "Geography"]

  return (
    <div className="flex flex-col h-full">
      <header className="bg-[#1B3A6B] px-6 pt-12 pb-6">
        <h1 className="text-white font-bold text-2xl tracking-tight">KYUNrious</h1>
      </header>

      <main className="flex-1 px-6 py-6 flex flex-col gap-6 overflow-y-auto">
        <div className="bg-[#FEF3C7] rounded-2xl px-4 py-3 flex items-center gap-3 w-fit">
          <Flame className="w-5 h-5 text-[#F59E0B]" />
          <span className="text-[#92400E] font-semibold">12 day streak</span>
        </div>

        <div>
          <h2 className="text-[#1E293B] font-semibold text-xl">{"Hey Priya! \uD83D\uDC4B"}</h2>
          <p className="text-[#64748B] mt-1">Ready to learn something new?</p>
        </div>

        <div>
          <h3 className="text-[#64748B] font-medium text-sm uppercase tracking-wide mb-3">{"Today's subjects"}</h3>
          <div className="flex flex-wrap gap-2">
            {subjects.map((subject) => (
              <span key={subject} className="bg-[#F1F5F9] text-[#475569] px-4 py-2 rounded-full text-sm font-medium">
                {subject}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => onNavigate("subjects")}
          className="w-full bg-[#0D7A5F] hover:bg-[#0A6850] text-white font-semibold py-4 px-6 rounded-2xl transition-all shadow-lg shadow-[#0D7A5F]/20 mt-auto"
        >
          {"Start today's chat \u2192"}
        </button>

        <button
          onClick={() => onNavigate("teacher")}
          className="w-full border-2 border-[#1B3A6B] text-[#1B3A6B] font-semibold py-3 px-6 rounded-2xl hover:bg-[#1B3A6B]/5 transition-colors"
        >
          Teacher View
        </button>

        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-[#E2E8F0]">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-[#F59E0B] mt-0.5" />
            <div>
              <p className="text-[#1E293B] font-semibold text-sm">Did you know?</p>
              <p className="text-[#64748B] text-sm mt-1 leading-relaxed">
                The UPI fraud system uses probability — exactly what Class 9 covers this week.
              </p>
            </div>
          </div>
        </div>
      </main>

      <div className="h-8 bg-white" />
    </div>
  )
}

// ============ SUBJECT PICKER ============
function SubjectPicker({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  const [selected, setSelected] = useState<string[]>(["Maths", "Science"])

  const subjects = [
    { emoji: "\uD83D\uDCD0", name: "Maths" },
    { emoji: "\uD83D\uDD2C", name: "Science" },
    { emoji: "\uD83D\uDCD6", name: "Hindi" },
    { emoji: "\uD83C\uDF0D", name: "Geography" },
    { emoji: "\uD83D\uDCBB", name: "Computer Science" },
    { emoji: "\uD83D\uDCDC", name: "History" },
  ]

  const toggleSubject = (name: string) => {
    if (selected.includes(name)) {
      setSelected(selected.filter((s) => s !== name))
    } else if (selected.length < 2) {
      setSelected([...selected, name])
    }
  }

  return (
    <div className="flex flex-col h-full">
      <header className="px-6 pt-12 pb-6">
        <button onClick={() => onNavigate("home")} className="text-[#64748B] mb-4 flex items-center gap-1 text-sm">
          <ChevronLeft className="w-4 h-4" /> Back
        </button>
        <h1 className="text-[#1B3A6B] font-bold text-2xl">Which 2 subjects today?</h1>
        <p className="text-[#64748B] mt-2">Pick what you feel like talking about</p>
      </header>

      <main className="flex-1 px-6 pb-6 flex flex-col">
        <div className="grid grid-cols-2 gap-3 flex-1">
          {subjects.map((subject) => {
            const isSelected = selected.includes(subject.name)
            return (
              <button
                key={subject.name}
                onClick={() => toggleSubject(subject.name)}
                className={`rounded-2xl p-5 flex flex-col items-center justify-center gap-3 border-2 transition-all ${
                  isSelected
                    ? "bg-[#F0FDFA] border-[#0D7A5F]"
                    : "bg-white border-[#E2E8F0] hover:border-[#CBD5E1]"
                }`}
              >
                <span className="text-3xl">{subject.emoji}</span>
                <span className={`font-medium ${isSelected ? "text-[#0D7A5F]" : "text-[#1E293B]"}`}>
                  {subject.name}
                </span>
              </button>
            )
          })}
        </div>

        <p className="text-center text-[#64748B] text-sm mt-4 mb-4">{selected.length}/2 selected</p>

        <button
          onClick={() => onNavigate("chat")}
          disabled={selected.length === 0}
          className="w-full bg-[#0D7A5F] hover:bg-[#0A6850] disabled:bg-[#CBD5E1] text-white font-semibold py-4 px-6 rounded-2xl transition-all shadow-lg shadow-[#0D7A5F]/20"
        >
          {"Let's go \u2192"}
        </button>
      </main>

      <div className="h-8 bg-white" />
    </div>
  )
}

// ============ CHAT SCREEN ============
function ChatScreen({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    initialMessages: [
      {
        id: "initial-1",
        role: "assistant",
        content: "Hey! You had Maths today. What did you cover? \uD83D\uDE0A",
      },
    ],
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="flex flex-col h-full">
      <header className="bg-[#1B3A6B] px-6 pt-12 pb-4">
        <div className="flex items-center gap-3">
          <button onClick={() => onNavigate("subjects")} className="text-white/70 mr-1">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="w-10 h-10 bg-[#0D7A5F] rounded-full flex items-center justify-center">
            <span className="text-white font-bold">K</span>
          </div>
          <div>
            <h1 className="text-white font-semibold">KYUNrious</h1>
            <p className="text-white/70 text-sm">{"\u00B7 Maths"}</p>
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 py-4 flex flex-col gap-3 overflow-y-auto bg-[#F8FAFC]">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-[#F1F5F9] text-[#1E293B] rounded-2xl rounded-br-md"
                  : "bg-[#D6E8F8] text-[#1E293B] rounded-2xl rounded-bl-md"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-[#D6E8F8] text-[#1E293B] rounded-2xl rounded-bl-md px-4 py-3">
              <Loader2 className="w-5 h-5 animate-spin" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </main>

      <div className="px-4 py-4 bg-white border-t border-[#E2E8F0]">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type in English, Hindi, anything..."
            className="flex-1 bg-[#F1F5F9] rounded-full px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-[#0D7A5F]/20"
          />
          <button
            type="submit"
            disabled={isLoading || !input?.trim()}
            className="w-11 h-11 bg-[#0D7A5F] rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
        <button
          onClick={() => onNavigate("feedback")}
          className="w-full mt-3 border-2 border-[#0D7A5F] text-[#0D7A5F] font-semibold py-3 px-6 rounded-full hover:bg-[#0D7A5F]/5 transition-colors text-sm"
        >
          Continue to Feedback
        </button>
      </div>

      <div className="h-6 bg-white" />
    </div>
  )
}

// ============ FEEDBACK SCREEN ============
function FeedbackScreen({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  return (
    <div className="flex flex-col h-full">
      <header className="px-6 pt-12 pb-6">
        <button onClick={() => onNavigate("chat")} className="text-[#64748B] mb-4 flex items-center gap-1 text-sm">
          <ChevronLeft className="w-4 h-4" /> Back
        </button>
        <h1 className="text-[#1B3A6B] font-bold text-2xl">{`One quick thing \uD83D\uDC40`}</h1>
        <p className="text-[#64748B] mt-2 leading-relaxed">
          How was class today? This is just between us — your teacher only sees patterns, never your name.
        </p>
      </header>

      <main className="flex-1 px-6 pb-6 flex flex-col">
        <textarea
          placeholder="Anything about how it was taught, the pace, the vibe..."
          className="flex-1 min-h-[200px] bg-[#F8FAFC] rounded-2xl p-5 text-[#1E293B] placeholder:text-[#94A3B8] outline-none border-2 border-transparent focus:border-[#0D7A5F]/30 resize-none"
        />

        <div className="flex items-center gap-2 mt-4 text-[#94A3B8] text-sm">
          <Shield className="w-4 h-4" />
          <span>Fully anonymous. Your name is never shared.</span>
        </div>

        <button
          onClick={() => onNavigate("streak")}
          className="w-full bg-[#0D7A5F] hover:bg-[#0A6850] text-white font-semibold py-4 px-6 rounded-2xl transition-all shadow-lg shadow-[#0D7A5F]/20 mt-6"
        >
          {`Share \u2192`}
        </button>
      </main>

      <div className="h-8 bg-white" />
    </div>
  )
}

// ============ STREAK SCREEN ============
function StreakScreen({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  const weekDays = ["M", "T", "W", "T", "F", "S", "S"]
  const completedDays = [true, true, true, true, true, false, "today"]

  return (
    <div className="flex flex-col h-full">
      <header className="px-6 pt-12 pb-6">
        <button onClick={() => onNavigate("feedback")} className="text-[#64748B] mb-4 flex items-center gap-1 text-sm">
          <ChevronLeft className="w-4 h-4" /> Back
        </button>
        <h1 className="text-[#1B3A6B] font-bold text-2xl">Your KYUNrious Journey</h1>
      </header>

      <main className="flex-1 px-6 pb-6 flex flex-col gap-6 overflow-y-auto">
        <div className="flex flex-col items-center py-6">
          <span className="text-6xl mb-3">{"\uD83D\uDD25"}</span>
          <span className="text-[#F59E0B] font-bold text-2xl">12 day streak</span>
        </div>

        <div className="bg-[#F8FAFC] rounded-2xl p-5">
          <p className="text-[#64748B] text-sm font-medium mb-4 text-center">This week</p>
          <div className="flex justify-between">
            {weekDays.map((day, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    completedDays[i] === "today"
                      ? "bg-[#FEF3C7] border-2 border-[#F59E0B]"
                      : completedDays[i]
                      ? "bg-[#0D7A5F]"
                      : "bg-[#E2E8F0]"
                  }`}
                >
                  {completedDays[i] === "today" ? (
                    <Star className="w-5 h-5 text-[#F59E0B] fill-[#F59E0B]" />
                  ) : completedDays[i] ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : null}
                </div>
                <span className="text-[#64748B] text-xs font-medium">{day}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[#64748B] text-sm font-medium mb-2">This term</p>
          <div className="bg-[#E2E8F0] rounded-full h-3 overflow-hidden">
            <div className="bg-[#0D7A5F] h-full rounded-full" style={{ width: "68%" }} />
          </div>
          <p className="text-[#1E293B] font-medium mt-2">{`68% to your certificate \uD83C\uDFC6`}</p>
        </div>

        <div className="bg-gradient-to-r from-[#0D7A5F] to-[#0A6850] rounded-2xl p-5 text-white">
          <div className="flex items-start gap-3">
            <span className="text-2xl">{"\uD83C\uDFC6"}</span>
            <div>
              <p className="font-semibold">Complete your streak this term</p>
              <p className="text-white/80 text-sm mt-1">{"Principal's Certificate + Assembly mention"}</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => onNavigate("home")}
          className="w-full border-2 border-[#0D7A5F] text-[#0D7A5F] font-semibold py-3 px-6 rounded-2xl hover:bg-[#0D7A5F]/5 transition-colors"
        >
          Back to Home
        </button>
      </main>

      <div className="h-8 bg-white" />
    </div>
  )
}

// ============ TEACHER DASHBOARD ============
function TeacherDashboard({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  return (
    <div className="flex flex-col h-full">
      <header className="px-6 pt-12 pb-6">
        <button onClick={() => onNavigate("home")} className="text-[#64748B] mb-4 flex items-center gap-1 text-sm">
          <ChevronLeft className="w-4 h-4" /> Back
        </button>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#F1F5F9] rounded-xl flex items-center justify-center">
            <Calendar className="w-5 h-5 text-[#1B3A6B]" />
          </div>
          <h1 className="text-[#1B3A6B] font-bold text-xl">Class 8B — Maths</h1>
        </div>
      </header>

      <main className="flex-1 px-6 pb-6 flex flex-col gap-4 overflow-y-auto">
        <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <span className="text-lg">{"\uD83D\uDD34"}</span>
            <div className="flex-1">
              <p className="text-[#991B1B] font-semibold text-sm mb-2">Top confusion this week</p>
              <p className="text-[#1E293B] font-medium text-base mb-1">Fractions — word problems (14 questions)</p>
              <p className="text-[#64748B] text-sm">Most common: when to multiply vs divide.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <span className="text-lg">{"\uD83D\uDFE1"}</span>
            <div className="flex-1">
              <p className="text-[#92400E] font-semibold text-sm mb-2">Curiosity signals</p>
              <p className="text-[#1E293B] text-base">6 students asked why fractions matter in real life.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <span className="text-lg">{"\uD83D\uDFE2"}</span>
            <div className="flex-1">
              <p className="text-[#166534] font-semibold text-sm mb-2">Classroom vibe</p>
              <p className="text-[#1E293B] text-base">Several students felt the pace was slightly fast.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#F0FDFA] border border-[#99F6E4] rounded-2xl p-5 mt-2">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-[#CCFBF1] rounded-xl flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-5 h-5 text-[#0D7A5F]" />
            </div>
            <div className="flex-1">
              <p className="text-[#0D7A5F] font-semibold text-sm mb-1">Suggested for Monday</p>
              <p className="text-[#1E293B] text-base leading-relaxed">
                5-min recap on fraction word problems. Use a restaurant bill as an example.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-[#0D7A5F] hover:bg-[#0A6850] text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2">
              <Check className="w-4 h-4" />
              Try this Monday
            </button>
            <button className="px-5 py-3 border-2 border-[#E2E8F0] text-[#64748B] font-semibold rounded-xl hover:bg-[#F8FAFC] transition-colors flex items-center justify-center gap-2">
              <X className="w-4 h-4" />
              Skip
            </button>
          </div>
        </div>
      </main>

      <div className="h-8 bg-white" />
    </div>
  )
}
