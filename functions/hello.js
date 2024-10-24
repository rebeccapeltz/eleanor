// netlify/functions/hello-world.js
exports.handler = async (event, context) => {
  key = process.env.GEN_AI_KEY;
  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const genAI = new GoogleGenerativeAI(process.env.GEN_AI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = "Calculate and output the circumference of a circle when the diamter is 2 inches";
  const result = await model.generateContent(prompt);
  console.log(result.response.text());

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World",
    }),
  };
};
