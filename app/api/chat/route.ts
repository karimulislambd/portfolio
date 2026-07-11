import { PROFILE_CONTEXT } from "@/lib/profileContext";

// Route Handlers are not cached for POST — each question hits the model fresh.
export const runtime = "nodejs";

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL = "llama-3.3-70b-versatile";

type Turn = { role: "user" | "assistant"; content: string };

export async function POST(request: Request) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "The AI assistant is not configured yet." },
      { status: 503 },
    );
  }

  let body: { messages?: Turn[] };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const history = (body.messages ?? []).slice(-8); // cap context
  if (history.length === 0) {
    return Response.json({ error: "No message provided." }, { status: 400 });
  }

  const messages = [
    { role: "system", content: PROFILE_CONTEXT },
    ...history,
  ];

  try {
    const res = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ model: MODEL, messages, temperature: 0.3, max_tokens: 400 }),
    });

    if (!res.ok) {
      return Response.json(
        { error: "The assistant is busy right now — please try again." },
        { status: 502 },
      );
    }

    const data = await res.json();
    const reply = data?.choices?.[0]?.message?.content?.trim() || "Sorry, I couldn't answer that.";
    return Response.json({ reply });
  } catch {
    return Response.json({ error: "Network error reaching the assistant." }, { status: 502 });
  }
}
