/***
 * Convert html to text string. This makes it available to download as text.
 */
const { convert } = require("html-to-text");

exports.handler = async (request, context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*", // Allow requests from any origin
    "Access-Control-Allow-Methods": "POST", // Allow specific HTTP methods
    "Access-Control-Allow-Headers": "Content-Type, Authorization", // Allow specific headers
  };

  const data = JSON.parse(request.body);
  const input = data.input;
  const options = {
    wordwrap: 80,
  };

  const text = convert(input, options);

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      result: text,
    }),
  };
};
