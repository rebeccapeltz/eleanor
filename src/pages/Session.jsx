import "../index.css";
import React, { useState, useEffect, useRef } from "react";
import "./Session.css";
import Border from "../components/Border.jsx";

import Transcript from "../components/Transcript.jsx";
import Navbar from "../components/Navbar.jsx";

function Session() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [messageItems, setMessageItems] = useState([]);

  useEffect(() => {
    let adminItem = { type: "admin", content: "Welcome" };
    setMessageItems((messageItems) => [...messageItems, adminItem]);
    let responseItem = { type: "response", content: "Hello, I’m Eleanor." };
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

  async function convertHTMLtoText(html) {
    const response = await fetch(
      "http://localhost:8888/.netlify/functions/convert",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: html,
        }),
      }
    );
    const data = await response.json();
    let result = data.result;
    return result;
  }
  async function download() {
    var aLink = document.body.appendChild(document.createElement("a"));
    aLink.download = "export.txt";
    let html = document.getElementById("transcript").innerHTML;
   

    const text = await convertHTMLtoText(html);
    let textFileAsBlob = new Blob([text], { type: "text/plain" });
    if (window.webkitURL != null) {
      aLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      aLink.href = window.URL.createObjectURL(textFileAsBlob);
      aLink.style.display = "none";
      document.body.appendChild(downloadLink);
    }
    aLink.click();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let questionItem = { type: "client", content: prompt };
    setMessageItems((messageItems) => [...messageItems, questionItem]);

    // Perform your logic to generate the response based on the prompt
    const generatedResponse = "response"; //generateResponse(prompt); // Replace with your actual response generation logic
    setResponse(generatedResponse);
    let responseItem = { type: "response", content: generatedResponse };
    setMessageItems((messageItems) => [...messageItems, responseItem]);

    // setTranscript(transcript + "\n" + generatedResponse);
    scrollToBottom();
  };

  return (
    <div>
      <Border></Border>
      <Navbar />

      <form>
        <div style={{ margin: "3rem 0" }} className="button-align">
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

      <div className="transcript-column">
        <div className="transcript-header">
          <div>Transcript</div>
          <div>
            {" "}
            <input
              className="download-btn"
              type="button"
              onClick={download}
              value="Download"
            />
          </div>
        </div>
        <Transcript items={messageItems} />
      </div>

    </div>
  );
}

export default Session;
