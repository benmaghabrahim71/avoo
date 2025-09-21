# 🚀 AI Setup Instructions - URGENT FIX

## The Problem
Your AI is showing "I'm sorry, I'm having trouble responding right now" because the Gemini API key is not configured.

## The Solution (2 minutes)

### Step 1: Create Environment File
Create a file named `.env.local` in your project root with this exact content:

```
GEMINI_API_KEY=AIzaSyBP2qee4jkPpgawGoVnZ-do8otfLYyVjaM
NEXT_PUBLIC_APP_URL=http://localhost:3001
```

### Step 2: Restart the Server
1. Stop the current server (Ctrl+C in the terminal)
2. Run: `npm run dev`
3. The server will start on port 3001

### Step 3: Test the AI
1. Go to: http://localhost:3001/ai
2. Ask any question like "Hello" or "What is VPS?"
3. The AI should now respond properly!

## What This Fixes
- ✅ AI chat functionality
- ✅ Image analysis
- ✅ Voice calls
- ✅ Multilingual support
- ✅ All AI features

## If You Still Get Errors
1. Make sure the `.env.local` file is in the project root (same folder as package.json)
2. Make sure there are no extra spaces in the API key
3. Restart the server after creating the file
4. Check the browser console for any error messages

## Your API Key is Ready!
The key `AIzaSyBP2qee4jkPpgawGoVnZ-do8otfLYyVjaM` is valid and should work immediately.
