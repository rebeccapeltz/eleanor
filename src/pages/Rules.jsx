import React from "react";
import "../index.css";
import "./Rules.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Border from "../components/Border";
import ScrollableList from "../components/ScrollableList";
import { BannedWords } from "../functions/utils";

function Rules() {
  return (
    <>
      <Border></Border>
      <Navbar />

      <div className="intro">
        <h1>Digital Rogerian Therapy with Eleanor</h1>
        <p>
          Welcome to Eleanor’s waiting room. You can enter a Session with
          Eleanor anytime by clicking the{" "}
          <span className="bold">
            <a href="./session">Session</a>
          </span>{" "}
          link in the navigation bar. When you converse with Eleanor, you will
          be referred to as the Client.
        </p>
        <p className="highlight">
          Please read the notes regarding participation in a Session with
          Eleanor below.
        </p>

        <div class="cards-container">
          <div class="card-img">
            <img
              className="fit-picture"
              src="./eleanor60.webp"
              alt="Eleanor, Digital Rogerian Therapist"
            />
          </div>

          <div
            class="card"
            style={{
              dislay: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div class="card-container">
              <h2>
                <b>Eleanor</b>
              </h2>
              <p>
                Eleanor is a Rogerian Digital Therapist. She succeeds Eliza, who
                pioneered Rogerian Digital Therapy in the 1960s.
                <a
                  href="https://en.wikipedia.org/wiki/Joseph_Weizenbaum"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Joseph Weizenbaum
                </a>{" "}
                developed
                <a
                  href="https://en.wikipedia.org/wiki/ELIZA"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Eliza
                </a>{" "}
                at the Massachusetts Institute of Technology to investigate
                communication between humans and machines.
              </p>

              <p>
                Eleanor responds to client prompts using Google's 
                <a href="https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/gemini-1.5-flash" target="_blank" rel="noreferer"> gemini-1.5-flash</a> model.
                 Learn more about Google Gemini by reading the{" "}
                <a
                  href="https://gemini.google.com/faq"
                  target="_blank"
                  rel="noreferrer"
                >
                  FAQ
                </a>
              </p>
            </div>
          </div>

          <div class="card">
            <div class="card-container">
              <h2>
                <b>Rogerian Therapy Focuses on the Individual</b>
              </h2>
              <p>
                {" "}
                Rogerian therapy focuses on helping the client solve personal
                problems through self-reflection. The therapist does not try to
                influence the client. Instead, the therapist engages in a
                conversation that enables the client to explore life challenges,
                feelings, and goals.
              </p>
            </div>
          </div>

          <div class="card">
            <div class="card-container">
              <h2>
                <b>Information Exchanged by Eleanor and the Client</b>
              </h2>
              <p>
                {" "}
                This application does not save data locally or in the cloud. It
                records the conversation in a transcript that can be downloaded
                to the client’s local hard drive. When the client leaves the
                Session page, no information gathered there is retained.
              </p>
            </div>
          </div>
        </div>

        <h2 className="highlight">Banned Words</h2>
        <p>
          The conversation with Eleanor is not intended to solve mental health
          problems. If you need mental health therapy, look into
          <a href="https://www.nami.org/" target="_blank" rel="noreferrer">
            {" "}
            NAMI
          </a>
          . If you are suicidal, look into
          <a
            href="https://www.nimh.nih.gov/health/topics/suicide-prevention"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Suicide Prevention
          </a>
          . To keep the conversation focused away from topics not relevant to
          Eleanor’s Therapy, a set of words is banned for use in conversation.
          If the client uses any of these words, an Admin will let them know
          that they have used banned words and must rephrase them. Prompts will
          banned words will not be forwarded to Eleanor. The list of banned
          words is shown below.
        </p>

        <div>
          <ScrollableList bannedWords={BannedWords} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Rules;
