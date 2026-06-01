import { Trophy, Star } from "lucide-react"

export default function JourneyScreen() {
  const weekDays = [
    { day: "M", completed: true },
    { day: "T", completed: true },
    { day: "W", completed: true },
    { day: "T", completed: true },
    { day: "F", completed: true },
    { day: "S", completed: false },
    { day: "S", isToday: true },
  ]

  const progressPercent = 68

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Mobile Container */}
      <div className="w-[390px] h-[844px] bg-white rounded-3xl overflow-hidden shadow-2xl border border-border/50 flex flex-col">
        
        {/* Content Area */}
        <main className="flex-1 px-6 pt-12 pb-6 flex flex-col">
          
          {/* Header */}
          <h1 className="text-[#1B3A6B] font-bold text-2xl text-center mb-8">
            Your KYUNrious Journey
          </h1>

          {/* Streak Section */}
          <div className="flex flex-col items-center mb-8">
            <span className="text-6xl mb-3" role="img" aria-label="flame">🔥</span>
            <p className="text-[#F59E0B] font-bold text-2xl">12 day streak</p>
          </div>

          {/* Weekly Grid */}
          <div className="bg-[#F8FAFC] rounded-2xl p-5 mb-6">
            <p className="text-muted-foreground text-sm font-medium mb-4 text-center">This week</p>
            <div className="flex justify-between items-center gap-2">
              {weekDays.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      item.isToday
                        ? "bg-[#FFD700] shadow-lg shadow-[#FFD700]/30"
                        : item.completed
                        ? "bg-[#0D7A5F]"
                        : "bg-[#E2E8F0]"
                    }`}
                  >
                    {item.isToday ? (
                      <Star className="w-5 h-5 text-white fill-white" />
                    ) : item.completed ? (
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : null}
                  </div>
                  <span className={`text-xs font-medium ${item.isToday ? "text-[#FFD700]" : "text-muted-foreground"}`}>
                    {item.day}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Section */}
          <div className="bg-[#F8FAFC] rounded-2xl p-5 mb-6">
            <div className="flex justify-between items-center mb-3">
              <p className="text-muted-foreground text-sm font-medium">This term</p>
              <p className="text-[#0D7A5F] font-bold text-sm">{progressPercent}% to your certificate 🏆</p>
            </div>
            <div className="w-full h-3 bg-[#E2E8F0] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#0D7A5F] rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Reward Card */}
          <div className="bg-gradient-to-br from-[#0D7A5F] to-[#0A6850] rounded-2xl p-5 text-white mt-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-base mb-1">Complete your streak this term</p>
                <p className="text-white/80 text-sm leading-relaxed">
                  {"Principal's Certificate + Assembly mention"}
                </p>
              </div>
            </div>
          </div>

        </main>

        {/* Bottom Safe Area */}
        <div className="h-8 bg-white" />
      </div>
    </div>
  )
}
