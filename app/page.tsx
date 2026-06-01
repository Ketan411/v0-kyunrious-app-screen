import { Calendar, Lightbulb, Check, X } from "lucide-react"

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Mobile Container */}
      <div className="w-[390px] h-[844px] bg-white rounded-3xl overflow-hidden shadow-2xl border border-border/50 flex flex-col">
        
        {/* Header */}
        <header className="px-6 pt-12 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#F1F5F9] rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-[#1B3A6B]" />
            </div>
            <h1 className="text-[#1B3A6B] font-bold text-xl">
              Class 8B — Maths
            </h1>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 px-6 pb-6 flex flex-col gap-4 overflow-y-auto">
          
          {/* Red Card - Top Confusion */}
          <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <span className="text-lg">🔴</span>
              <div className="flex-1">
                <p className="text-[#991B1B] font-semibold text-sm mb-2">
                  Top confusion this week
                </p>
                <p className="text-[#1E293B] font-medium text-base mb-1">
                  Fractions — word problems (14 questions)
                </p>
                <p className="text-[#64748B] text-sm">
                  Most common: when to multiply vs divide.
                </p>
              </div>
            </div>
          </div>

          {/* Yellow Card - Curiosity Signals */}
          <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <span className="text-lg">🟡</span>
              <div className="flex-1">
                <p className="text-[#92400E] font-semibold text-sm mb-2">
                  Curiosity signals
                </p>
                <p className="text-[#1E293B] text-base">
                  6 students asked why fractions matter in real life.
                </p>
              </div>
            </div>
          </div>

          {/* Green Card - Classroom Vibe */}
          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <span className="text-lg">🟢</span>
              <div className="flex-1">
                <p className="text-[#166534] font-semibold text-sm mb-2">
                  Classroom vibe
                </p>
                <p className="text-[#1E293B] text-base">
                  Several students felt the pace was slightly fast.
                </p>
              </div>
            </div>
          </div>

          {/* Suggestion Card */}
          <div className="bg-[#F0FDFA] border border-[#99F6E4] rounded-2xl p-5 mt-2">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-[#CCFBF1] rounded-xl flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-[#0D7A5F]" />
              </div>
              <div className="flex-1">
                <p className="text-[#0D7A5F] font-semibold text-sm mb-1">
                  Suggested for Monday
                </p>
                <p className="text-[#1E293B] text-base leading-relaxed">
                  5-min recap on fraction word problems. Use a restaurant bill as an example.
                </p>
              </div>
            </div>
            
            {/* Action Buttons */}
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

        {/* Bottom Safe Area */}
        <div className="h-8 bg-white" />
      </div>
    </div>
  )
}
