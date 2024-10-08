import { WavingHand } from "@mui/icons-material";
import React from "react";
import "../styles/AboutBtn.css";
import { SiAboutdotme } from "react-icons/si";

function AboutBtn() {
  return (
    <a href="/about" className="aboutBtnContainer">
      <button className="aboutBtn">
        <SiAboutdotme className="meIcon" />
        <p className="learnMoreText">Click here to learn more</p>
        <p className="aboutMeText">about me!</p>
      </button>
    </a>
  );
}

export default AboutBtn;
