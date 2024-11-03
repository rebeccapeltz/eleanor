import "./About.css";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Border from "../components/Border.jsx";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function About() {
  return (
    <div>
      <Border></Border>
      <Navbar />

      <div className="intro">
        <h2>A Little History</h2>
        <p className="description">
          My name is{" "}
          <a
            href="https://github.com/rebeccapeltz"
            target="_blank"
            rel="noreferrer"
          >
            Rebecca Peltz
          </a>
          . I've been working with data and developing software since 1981. When
          I was 11 years old, in the late 1960s, my Dad, who was working as a
          programmer for the Rand Corporation in California, took me to work.
        </p>
        <p className="description">
          He loaded a tape drive with a large magnetic tape and explained he was
          loading a game.
        </p>
        <div style={{ textAlign: "center", padding: "1rem" }}>
          <figure>
            <Zoom>
              <img width="20%" src="./magnetic-tape-drive.jpg" alt="teletype" />
              <figcaption>
                Magnetic tape drive Control Data Corporation
              </figcaption>
            </Zoom>
          </figure>
        </div>

        <p className="description">
          The game was named Eliza, and he told me it was a psychiatrist I could
          talk to. He said it would listen to what I said and then often repeat
          it back to me in a question. I didn't actually "talk" to Eliza.
          Instead, I typed what I had to say on a teletype. The psychiatrist
          responded on the teletype, which provided a transcript of our
          conversation.
          </p>
          <div style={{ textAlign: "center", padding: "1rem" }}>
            <figure>
              <Zoom>
                <img width="50%" src="./syssrc-teletype.jpeg" alt="teletype" />
                <figcaption>
                  <a
                    href="https://museum.syssrc.com/artifact/610/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click Image to learn more about the teletype
                  </a>
                </figcaption>
              </Zoom>
            </figure>
          </div>
        

        <p className="description">
          The image below shows the transcript of my conversation with Dr. Otto
          Matic, as the psychiatrist called himself. I wasn't too impressed with
          our conversation, but I was impressed by the fact that what I said
          prompted a response indicating some understanding on the other end.
          </p>
          <div style={{ textAlign: "center", padding: "1rem" }}>
            <figure>
              <Zoom>
                <img
                  width="60%"
                  src="./eliza-transcript.jpg"
                  alt="Eliza transcript"
                />
                <figcaption>Eliza Transcript from 1969</figcaption>
              </Zoom>
            </figure>
          </div>
        
      </div>

      <div className="intro">
        <h2>From Eliza to Eleanor</h2>
        <p>
          Joseph Weizenbaum created the first chatbot in 1966. He named it Eliza
          after the character Eliza in{" "}
          <a
            href="https://en.wikipedia.org/wiki/Pygmalion_(play)"
            target="_blank"
            rel="noreferrer"
          >
            Pygmalion
          </a>
          . Eliza uses language to improve her social standing in George Bernard
          Shaw's play.
        </p>
        <p>
          The Eliza bot was modeled after Rogerian therapy, in which the
          therapist often restates the patient's own words. This worked well for
          Eliza because the technology used pattern matching to create a
          response for the patient, providing an illusion of understanding.
        </p>
        <p>
          Once I understood the nature of what we now know as AI, I was
          interested in creating a more sophisticated version of Eliza, and I'm
          calling her Eleanor in this application. There is no "Dr. Otto Mattic"
          necessary to front for this female digital therapist.
        </p>
        <p>
          Due to the problems that can arise in an online chat, whether with a
          bot or in Social Media, I decided to create an Admin character who is
          responsible for checking for banned words that could lead to a
          problematic discussion. I used some of the words I found in a list of
          banned words from a blog about{" "}
          <a
            href="https://weam.ai/blog/imageprompt/list-of-banned-words-in-midjourney/"
            rel="noreferrer"
            target="_blank"
          >
            Midjourney's banned words
          </a>{" "}
          and, of course,
          <a
            href="https://en.wikipedia.org/wiki/Seven_dirty_words"
            target="_blank"
            rel="noreferrer"
          >
            George Carlin's 7 words you can neve say on TV
          </a>
          .
        </p>
      </div>
      <div className="intro">
        <h2>Digital Conversation</h2>
        <p>
          The Session page provides a user interface for creating and saving a
          conversation. The art of programming a Conversation User Interface
          (CUI) has been developing for over a decade. It is available in the
          form of voice and visual bots. In this application, the conversation
          is made available via a transcript. The Client input is expandable.
          The image below shows the entire Gettysburg Address in the input. Drag
          the little triangle in the bottom right corner to expand the viewable
          input. The image below shows the basic client functionality.
        </p>
        <div style={{ textAlign: "center", padding: "1rem" }}>
          <figure>
            <Zoom>
              <img
                width="80%"
                src="./client-functionality.png"
                alt="client functionality"
              />
              <figcaption>Client conversation functionality</figcaption>
            </Zoom>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default About;
