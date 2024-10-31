// netlify/functions/processClient.js
exports.handler = async (request, context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*", // Allow requests from any origin
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE", // Allow specific HTTP methods
    "Access-Control-Allow-Headers": "Content-Type, Authorization", // Allow specific headers
  };
  key = process.env.GEN_AI_KEY;
  // get client data
  const data = JSON.parse(request.body);
  const input = data.input;

  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const genAI = new GoogleGenerativeAI(process.env.GEN_AI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = input;

  const result = await model.generateContent(prompt);

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      message: result.response.text(),
    }),
  };
};
