exports.handler = async (request, context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
  
  const { GoogleGenerativeAI } = require("@google/generative-ai");
  // console.log(request.body)
  const genAI = new GoogleGenerativeAI(process.env.GEN_AI_KEY);
  const data = JSON.parse(request.body);
  const prompt = data.input;

  

  const generationConfig = {
    responseMimeType: 'text/plain',
    maxOutputTokens: 2000, 
  };
  const model = genAI.getGenerativeModel({"model": "gemini-1.5-pro"});
  model.startChat({ generationConfig });
  const result = await model.generateContent(prompt);
  // console.log(result)
  // console.log(result.response.text())


  // const output = result.response.text().replace(/\*/g, '');

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      message: result.response.text(),
    }),
  };

};
