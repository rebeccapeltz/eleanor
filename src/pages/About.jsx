import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Border from "../components/Border.jsx";

function About() {
  return (
    <div>
      <Border></Border>
      <Navbar />
      <h1>About</h1>
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
    </div>
  );
}

export default About;
