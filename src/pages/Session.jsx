import "../index.css";
import React, { useState, useEffect, useRef } from "react";
import "./Session.css";
import Border from "../components/Border.jsx";
import Transcript from "../components/Transcript.jsx";
import Navbar from "../components/Navbar.jsx";

function Session() {
  const [loading, setLoading] = useState(false);

  const [prompt, setPrompt] = useState("");
  const [messageItems, setMessageItems] = useState([]);

  useEffect(() => {
    setLoading(true)
    setMessageItems([])
    setPrompt("")
  
    const fetchData = async (path) => {
     
      const baseUrl =
        process.env.VITE_PROD_ENV === "true"
          ? process.env.VITE_PROD_BASE_API
          : process.env.VITE_DEV_BASE_API;
      const url = `${baseUrl}/${path}`;
      const data = await fetch(url);
      const json = await data.json();

      // create messages
      let adminItem = { type: "admin", content: "Welcome" };
      setMessageItems((messageItems) => [...messageItems, adminItem]);

      let responseItem = { type: "response", content: json.message };
      setMessageItems((messageItems) => [...messageItems, responseItem]);
      // if (aiResponse.length > 0) setLoading(false);
      setLoading(false)
    };

    fetchData('hello')
    .catch(console.error)
    
  }, []);

  async function convertHTMLtoText(html) {
    const resp = await fetch(
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
    const data = await resp.json();
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

  
  const fetchResponseData = async (path,clientPrompt) => {
     debugger
    const baseUrl =
      process.env.VITE_PROD_ENV === "true"
        ? process.env.VITE_PROD_BASE_API
        : process.env.VITE_DEV_BASE_API;
    const url = `${baseUrl}/${path}`;

    const resp = await fetch(
      url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: clientPrompt,
        }),
      }
    );
    debugger
    const data = await resp.json();
    let result = data.message;

    // let result = "test"
    debugger
    // create messages
    let responseItem = { type: "response", content: result };
    setMessageItems((messageItems) => [...messageItems, responseItem]);

    // scrollToBottom();
  };

  const clearPrompt  = ()=>{
    setPrompt("")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setPrompt("")
    let questionItem = { type: "client", content: prompt };
    setMessageItems((messageItems) => [...messageItems, questionItem]);
    debugger
    fetchResponseData("processClient", prompt);
    debugger
   

    


    // Perform your logic to generate the response based on the prompt
    // const generatedResponse = "response"; //generateResponse(prompt); // Replace with your actual response generation logic
    // let responseItem = { type: "response", content: generatedResponse };
    // setMessageItems((messageItems) => [...messageItems, responseItem]);
    // scrollToBottom();
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
              value={prompt}
              placeholder="What's on your mind?"
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
          {loading == true ? (
            <p style={{ margin: "30px 0" }}>Loading ...</p>
          ) : (
            <Transcript items={messageItems} />
          )}
        </div>
      </section>
    </div>
  );
}

export default Session;
