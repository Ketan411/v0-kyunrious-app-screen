import { google } from "@ai-sdk/google"
import { streamText } from "ai"

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: google("gemini-1.5-flash", {
      apiKey: process.env.GEMINI_API_KEY,
    }),
    system: `You are KYUNrious, a friendly AI learning companion for students. You help students understand their school subjects through engaging conversations. Keep your responses concise, use simple language appropriate for school students, and include emojis occasionally to keep things fun. Focus on making learning feel natural and curiosity-driven.`,
    messages,
  })

  return result.toDataStreamResponse()
}
