// Test Gemini API directly
const testGemini = async () => {
  const apiKey = 'AIzaSyBP2qee4jkPpgawGoVnZ-do8otfLYyVjaM';
  const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': apiKey
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: "Explain how AI works in a few words"
          }]
        }]
      })
    });
    
    const data = await response.json();
    console.log('✅ API Response:', JSON.stringify(data, null, 2));
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      console.log('✅ AI Response:', data.candidates[0].content.parts[0].text);
    } else {
      console.log('❌ Unexpected response format:', data);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
};

testGemini();

