import "../index.css";
import React, { useState, useEffect } from "react";
import "./Session.css";
import Border from "../components/Border.jsx";
import Transcript from "../components/Transcript.jsx";
import Navbar from "../components/Navbar.jsx";
import { filterBannedWords } from "../functions/utils.js";

const testMode = process.env.VITE_TEST_MODE;
const createMessageItem = (type, content, bannedWords) => {
  return { type: type, content: content, bannedWords: bannedWords };
};

function getBaseURL(){
   return process.env.VITE_PROD_ENV === "true"
          ? process.env.VITE_PROD_BASE_API
          : process.env.VITE_DEV_BASE_API;
}

function Session() {
  const [loading, setLoading] = useState(false);

  const [prompt, setPrompt] = useState("");
  const [messageItems, setMessageItems] = useState([]);


  useEffect(() => {
    setLoading(true);
    setMessageItems([]);
    setPrompt("");

    const fetchDataHello = async () => {
      setLoading(true);
      const baseUrl = getBaseURL();
      const url = `${baseUrl}/hello`;
      let json = {};
      if (testMode === "true") {
        json = { message: "Eleanor test mode" };
      } else {
        const data = await fetch(url);
        json = await data.json();
      }
      setLoading(false);
      // create messages
      let adminItem = createMessageItem("admin", "Welcome", "");
      // adminItem is a data object
      setMessageItems((messageItems) => [...messageItems, adminItem]);

      let responseItem = { type: "response", content: json.message };
      setMessageItems((messageItems) => [...messageItems, responseItem]);

    }

    fetchDataHello("hello").catch(console.error);
  }, []);

  async function convertHTMLtoText(html) {
    const baseUrl = getBaseURL();
    const url = `${baseUrl}/convert`;

    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: html,
      }),
    });
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

  const fetchResponseData = async (clientPrompt) => {
    setLoading(true);
    const baseUrl = getBaseURL();
    const url = `${baseUrl}/processClient`
    if (testMode === "true") {
      let responseItem = createMessageItem(
        "response",
        "Response test mode",
        ""
      );
      setMessageItems((messageItems) => [...messageItems, responseItem]);
    } else {
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: clientPrompt,
        }),
      });
      const data = await resp.json();

      let result = data.message;
      let responseItem = createMessageItem("response", result, "");
      setMessageItems((messageItems) => [...messageItems, responseItem]);
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // check for banned words

    const bannedWords = filterBannedWords(prompt);
    if (bannedWords.length > 0) {
      let questionItem = createMessageItem(
        "admin",
        "We can not process and discuss input \
        containing: BANNEDWORDS. See list of banned words on home page.",
        bannedWords.join(", ")
      );
      setMessageItems((messageItems) => [...messageItems, questionItem]);
    } else {
      // ok to process prompt
      // output to transcript
      let questionItem = createMessageItem("client", prompt, "");
      setMessageItems((messageItems) => [...messageItems, questionItem]);
      fetchResponseData(prompt);
      setPrompt("");
    }
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
            <div style={{ margin: "30px 0", fontSize:"4rem",color:"#F7D6D0",backgroundColr:"#281b0d" }}>Loading ...</div>
          ) : (
            <Transcript items={messageItems} />
          )}
          {/* )} */}
        </div>
      </section>
    </div>
  );
}

export default Session;
