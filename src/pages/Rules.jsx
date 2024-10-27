import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Border from "../components/Border";

function Rules() {
  return (
    <div>
      <Border></Border>
      <Navbar />

      <h1>Rules</h1>
    </div>
  );
}

export default Rules;
