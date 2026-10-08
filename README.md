# AI Chatbot (React + Express + Gemini)

A full-stack AI chatbot. The React frontend sends messages to a small Express server, which calls Google's Gemini API and returns the reply. The API key stays on the server, so it never reaches the browser.

## Features
- Chat interface with user and bot message bubbles
- Remembers the conversation using Gemini's interaction IDs
- Typing indicator and error handling
- API key kept server-side in a .env file

## Tech stack
- Frontend: React (Vite), CSS
- Backend: Node.js, Express
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

## What I learned
- Building a chat UI with React state and hooks
- Creating a REST API with Express
- Keeping API keys secure with environment variables
- Connecting a frontend to a backend with fetch

## Author
Sannidhi Sri Sai Vinay
