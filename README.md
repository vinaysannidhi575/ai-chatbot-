# AI Chatbot (React + Express + Gemini)

**Live demo:** https://ai-chatbot-tan-two-20.vercel.app

A full-stack AI chatbot. The React frontend sends messages to a small Express server, which calls Google's Gemini API and returns the reply. The API key stays on the server, so it never reaches the browser.

> Note: the backend runs on Render's free tier, so the first reply after a quiet spell can take up to a minute while the server wakes up.

## Features
- Chat interface with user and bot message bubbles
- Remembers the conversation using Gemini's interaction IDs
- Typing indicator and error handling
- API key kept server-side as an environment variable
- Tuned for faster replies with a lower Gemini thinking level

## Tech stack
- Frontend: React (Vite), CSS, deployed on Vercel
- Backend: Node.js, Express, deployed on Render
- AI: Google Gemini API (@google/genai)

## Project structure
```
ai-chatbot/
  client/   React app (port 5173)
  server/   Express API (port 3001)
```

## Run it locally
1. Get a free Gemini API key from Google AI Studio.
2. Server:
   ```
   cd server
   npm install
   ```
   Create `server/.env` with:
   ```
   GEMINI_API_KEY=your_key_here
   ```
   Then run `node index.js`
3. Client (new terminal):
   ```
   cd client
   npm install
   npm run dev
   ```
4. Open the local address shown in the terminal.

## Deployment
- **Backend (Render):** Web Service with root directory `server`, build `npm install`, start `node index.js`, and `GEMINI_API_KEY` set as an environment variable.
- **Frontend (Vercel):** root directory `client`, Vite preset, and `VITE_API_URL` set to the Render URL plus `/api/chat`.

## What I learned
- Building a chat UI with React state and hooks
- Creating a REST API with Express
- Keeping API keys secure with environment variables
- Connecting a frontend to a backend with fetch
- Deploying a full-stack app with Vercel and Render, and debugging it from server logs

## Author
Sannidhi Sri Sai Vinay
