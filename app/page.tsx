import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Flame, Lightbulb } from "lucide-react"

const subjects = ["Maths", "Science", "Hindi", "English", "History", "Geography"]

export default function KYUNriousHome() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Mobile Container */}
      <div className="w-[390px] min-h-[844px] bg-background rounded-3xl overflow-hidden shadow-2xl border border-border/50">
        
        {/* Header */}
        <header className="bg-[#1B3A6B] px-6 py-5">
          <h1 className="text-white text-xl font-bold tracking-tight">KYUNrious</h1>
        </header>

        {/* Main Content */}
        <main className="px-6 py-6 flex flex-col gap-6">
          
          {/* Streak Counter */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2">
              <Flame className="w-5 h-5 text-amber-500" />
              <span className="text-amber-700 font-semibold text-sm">12 day streak</span>
            </div>
          </div>

          {/* Greeting */}
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Hey Priya! <span className="inline-block">👋</span>
            </h2>
            <p className="text-muted-foreground mt-1">Ready to learn something new today?</p>
          </div>

          {/* Today's Subjects */}
          <section>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              {"Today's subjects"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {subjects.map((subject) => (
                <span
                  key={subject}
                  className="bg-[#F1F5F9] text-[#475569] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#E2E8F0] transition-colors cursor-pointer"
                >
                  {subject}
                </span>
              ))}
            </div>
          </section>

          {/* CTA Button */}
          <Button 
            className="w-full bg-[#0D7A5F] hover:bg-[#0A6850] text-white font-semibold py-6 text-base rounded-xl shadow-lg shadow-teal-500/20 transition-all hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
          >
            {"Start today's chat →"}
          </Button>

          {/* Did You Know Card */}
          <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200 shadow-sm mt-auto">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="bg-amber-100 rounded-full p-2 shrink-0">
                  <Lightbulb className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Did you know?</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The UPI fraud system uses probability — exactly what Class 9 covers this week.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        </main>

        {/* Bottom Safe Area */}
        <div className="h-8 bg-background" />
      </div>
    </div>
  )
}
