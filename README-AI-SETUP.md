# AI Setup Instructions

## Quick Fix for AI Functionality

The AI functionality requires a Gemini API key to work. Here's how to set it up:

### 1. Get a Gemini API Key
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

### 2. Configure Environment Variables
1. Create a `.env.local` file in the project root
2. Add your API key:
```
GEMINI_API_KEY=your_actual_api_key_here
```

### 3. Restart the Development Server
```bash
npm run dev
```

### 4. Test the AI
1. Go to `/ai` page
2. Try asking a question
3. The AI should now respond properly

## Features Available
- ✅ Text chat with Gemini AI
- ✅ Image analysis with Gemini Vision
- ✅ Multilingual support (50+ languages)
- ✅ Voice call functionality
- ✅ Bad word filtering
- ✅ Security filtering
- ✅ Fallback responses for common questions

## Troubleshooting
- If you see "AI service is not configured", check your `.env.local` file
- Make sure the API key is valid and has proper permissions
- Check the browser console for any error messages

## Alternative Setup
If you don't want to use Gemini AI, you can modify the code to use other AI services like OpenAI, Anthropic, or local models.
