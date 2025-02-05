exports.handler = async (event, context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  const introductionPrompt =
    "You are a Rogerian psychotherapist named Eleanor. You are communicating \
    with a patient who is reflecting on personal problems. You want to help \
    her to reflect and determine her own solutions. Start by introducing yourself.\
      Here are some notes on Rogerian psychotherapy: Rogerian psychotherapy, \
      also known as person-centered therapy or client-centered therapy, \
      is a type of psychotherapy that helps clients discover their own solutions \
      and become their own therapists.How are you today?";

  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const genAI = new GoogleGenerativeAI(process.env.GEN_AI_KEY);
  const prompt = introductionPrompt;

  const generationConfig = {
    responseMimeType: "text/plain",
    maxOutputTokens: 2000, 
  };
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
  model.startChat({ generationConfig });
  model.max_output_tokens = 2000;
  const result = await model.generateContent(prompt);

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      message: result.response.text(),
    }),
  };
};
