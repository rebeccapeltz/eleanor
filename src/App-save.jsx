import "./App.css";

import React, { useState, useEffect, useRef } from "react";
// import Message from "./components/Message";
// import MesssageList from "./components/MessageList";
import Transcript from "./components/Transcript";
import Navbar from './components/Navbar';



function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  // const [transcript, setTranscript] = useState("");
  const [messageItems, setMessageItems] = useState([]);

 

  useEffect(() => {
    // messageItems.push(new Message('admin','Welcome'));
    let adminItem = { type: "admin", content: "Welcome" };
    // debugger
    setMessageItems((messageItems) => [...messageItems, adminItem]);

    // messageItems.push(new Message('response'), 'Hello, I’m Eleanor.');
    let responseItem = { type: "response", content: "Hello, I’m Eleanor." };
    // debugger
    setMessageItems((messageItems) => [...messageItems, responseItem]);


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
    // setTranscript(
    //   `
    //  <div style="color:green">Admin</div>
    //   <p>The rules are ...</p>
    //   <span>Eleanor</span>
    //   <p>Hello, I’m Eleanor. I’m here to create a safe space for you to reflect on what \
    //   you’re experiencing. My goal is to help you explore your thoughts and feelings so \
    //   you can find your own solutions. How are you feeling today? What’s been on your mind?\
    //   </p>

    //    <div style="color:green">Admin</div>
    //   <p>The rules are ...</p>
    //   <span>Eleanor</span>
    //   <p>Hello, I’m Eleanor. I’m here to create a safe space for you to reflect on what \
    //   you’re experiencing. My goal is to help you explore your thoughts and feelings so \
    //   you can find your own solutions. How are you feeling today? What’s been on your mind?\
    //   </p>

    //   `
    // );
  }, []);

  const alerter = (e) => {
    alert("hello");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // debugger
    let questionItem = { type: "question", content: prompt };
    setMessageItems((messageItems) => [...messageItems, questionItem]);
    // setMessageItems(messageItems => messageItems.unshift(questionItem));

    // Perform your logic to generate the response based on the prompt
    const generatedResponse = "response"; //generateResponse(prompt); // Replace with your actual response generation logic
    setResponse(generatedResponse);
    // messageItems.push(new Message('response',generatedResponse))
    let responseItem = { type: "response", content: generatedResponse };
    setMessageItems((messageItems) => [...messageItems, responseItem]);

    // setTranscript(transcript + "\n" + generatedResponse);
    scrollToBottom();
  };

  return (
    <div className="App">
    <Navbar />
      {/* <h1>Eleanor</h1> */}
      {/* <h2>Digital Rogerian Psychotherapy</h2> */}

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

      <div className="transcript-column">
        <p className="transcript-header">Transcript</p>
        <Transcript items={messageItems}/>
        {/* <div className="transcript">
          {transcript}
          <MesssageList items={messageItems} />
        </div> */}

      </div>
     

      <form>
        <div className="button-align">
          <textarea
            className="user-input"
            id="submit"
            type="text"
            placeholder="What's on your mind?"
            value={prompt}
            onChange={(e) => {
              setPrompt(e.target.value);
            }}
          ></textarea>
          <input
            className="share-btn"
            type="button"
            onClick={handleSubmit}
            value="Share"
          />
        </div>
      </form>

    </div>
  );
}

export default App;
