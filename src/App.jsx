import "./index.css";
import React, { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("test");
  const [transcript, setTranscript] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your logic to generate the response based on the prompt
    const generatedResponse = "response"; //generateResponse(prompt); // Replace with your actual response generation logic
    setResponse(generatedResponse);
    setTranscript(transcript + '\n' + generatedResponse)
  };

  return (
    <div className="App">
      <h1>Eleanor</h1>
      <h2>Digital Rogerian Psychotherapy</h2>

      <p className="description">
        Rogerian Psychotherapy is a path towards self awareness. It is based on
        the idea that people find their own solutions through self reflections.
        Conversation focused on the reflection and problem resolution is helpful
        for relieving stress.
        <br />
        <br />
        My mother,{" "}
        <a
          href="https://en.wikipedia.org/wiki/ELIZA"
          target="_blank"
          rel="noreferrer"
        >
          Eliza
        </a>
        , was an early pioneer in offering Rogerian therapy in a digital format.
      </p>
      {/* <form onSubmit={handleSubmit}> */}

      <div className="container">
          <div className="column">
            <textarea
              placeholder="Column 1 Text Area"
              id="prompt"
              name="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              required
            ></textarea>
          </div>

          <button onClick={handleSubmit} className="submit-button">
            Engage <span className="arrow">→</span>
          </button>

          <div className="column">
            <textarea
              readOnly
              placeholder="Column 2 Text Area"
              value={response}
            ></textarea>
          </div>
      
      </div>
      {/* </form> */}

      <div className="column">
        <p className="transcript">Transcript</p>
        <textarea readOnly defaultValue={transcript}></textarea>
      </div>
    </div>
  );
}

export default App;
