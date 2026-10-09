import express from "express";
import cors from "cors";
import "dotenv/config"; // loads GEMINI_API_KEY from .env
import { GoogleGenAI } from "@google/genai";

const app = express();
app.use(cors()); // lets the React app (port 5173) call this server (port 3001)
app.use(express.json()); // lets us read JSON sent from the frontend

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Quick check that the server is alive
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Main chat route: receives a message, asks Gemini, sends back the answer
app.post("/api/chat", async (req, res) => {
  const { message, previousId } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const interaction = await ai.interactions.create({
      model: "gemini-3.8-flash",
      input: message,
      // previousId lets Gemini remember the earlier chat
      ...(previousId && { previous_interaction_id: previousId }),
    });

    res.json({ reply: interaction.output_text, id: interaction.id });
  } catch (err) {
    console.error("Gemini error:", err.message);
    res.status(500).json({ error: "Something went wrong talking to Gemini" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});