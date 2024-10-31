import "../index.css";
import React, { useState, useEffect, useRef } from "react";
import "./Session.css";
import Border from "../components/Border.jsx";
import Transcript from "../components/Transcript.jsx";
import Navbar from "../components/Navbar.jsx";
import { fetchData } from "../api/fetchData.js";

function Session() {
  const [prompt, setPrompt] = useState(null);
  const [response, setResponse] = useState(null);
  const [messageItems, setMessageItems] = useState([]);

  useEffect(() => {
    // onload call for first response from Eleanor
    const fetchDataFromHelloApi = async () => {
      try {
        const result = await fetchData("hello");
        // debugger
        setResponse(result.message);
        //post admin message
        let adminItem = { type: "admin", content: "Welcome" };
        setMessageItems((messageItems) => [...messageItems, adminItem]);
        //post response message
        // debugger
        let responseItem = { type: "response", content: response }
        // let responseItem = { type: "response", content: "Hello, I’m Eleanor." };
        setMessageItems((messageItems) => [...messageItems, responseItem]);
      } catch (error) {
        console.log("Error fetching and setting admin/response in hello")
        // Handle error, e.g., display an error message to the user
      }
    };
    debugger;
    fetchDataFromHelloApi();
    // let adminItem = { type: "admin", content: "Welcome" };
    // setMessageItems((messageItems) => [...messageItems, adminItem]);
    // let responseItem = { type: "response", content: response};
    // // let responseItem = { type: "response", content: "Hello, I’m Eleanor." };
    // setMessageItems((messageItems) => [...messageItems, responseItem]);

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
  }, [response]);

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
      <section className="cui">
        <form>
          <div style={{ margin: "3rem 0" }} className="button-align">
            <textarea
              className="user-input"
              id="submit"
              type="text"
              placeholder="What's on your mind?"
              value=""
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
      </section>
    </div>
  );
}

export default Session;
