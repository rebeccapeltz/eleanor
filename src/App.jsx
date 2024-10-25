import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("Eleanor");
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    // fetch("http://localhost:8888/.netlify/functions/hello")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     debugger
    //     let output = json.message;
    //     let outputLessQuotes = output.substring(1, output.length-3);
    //     setTranscript(outputLessQuotes);
    //     setResponse(outputLessQuotes);
    //   })
    //   .catch((error) => console.error(error));

    // return () => {
    //   console.log("App is unmounting");
    // };
    setTranscript(
      "Hello, I’m Eleanor. I’m here to create a safe space for you to reflect on what you’re experiencing. My goal is to help you explore your thoughts and feelings so you can find your own solutions. How are you feeling today? What’s been on your mind? \
      Hello, I’m Eleanor. I’m here to create a safe space for you to reflect on what you’re experiencing. My goal is to help you explore your thoughts and feelings so you can find your own solutions. How are you feeling today? What’s been on your mind?"

    );
  }, []);

  const alerter = (e) =>{
    alert('hello');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your logic to generate the response based on the prompt
    const generatedResponse = "response"; //generateResponse(prompt); // Replace with your actual response generation logic
    setResponse(generatedResponse);
    setTranscript(transcript + "\n" + generatedResponse);
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
     

      <form>
        <div className="button-align">
          <textarea
            className="user-input"
            id="submit"
            type="text"
            placeholder="What's on your mind?"
          ></textarea>
          <input className="share-btn" type="button" onClick={alerter} value="Share"/>
        </div>
      </form>

      <div className="transcript-column">
        <p className="transcript-header">Transcript</p>
        <div className="transcript">{transcript}</div>
      </div>
    </div>
  );
}

export default App;
