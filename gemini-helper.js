// This is a simple helper to call Gemini API
// In the real app, this would be a serverless function

async function callGemini(userMessage) {
    // This is a simulation for now
    // In the next step, we'll connect it to the real API
    console.log("Simulating Gemini call with message:", userMessage);
    return "AI Response: Based on your documents, I recommend applying to the EU Civil Society Fund. Your organization's focus on education aligns perfectly with their priorities.";
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { callGemini };
}
