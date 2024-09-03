import React from "react";
import "../styles/Hero.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import WavingHand from "@mui/icons-material/WavingHand";

function Hero() {
  return (
    <div className="heroContainer">
      <div className="images">
        <img className="onlineImg" src="src/assets/Online.png" />
      </div>
      <div className="heroContent">
        <div>
          <button className="onlineBtn">
            <FiberManualRecordIcon className="onlineStatus" fontSize="small" />
            Online
          </button>
        </div>
        <div className="nameContainer">
          <h1 className="name">Carla Hau</h1>
          <WavingHand className="nameWave" fontSize="large" />
        </div>
        <h2 className="occupation">Software Developer</h2>
        <h3 className="description">
          An ambitious software developer who is passionate about continuous
          learning and building user-friendly applications that solve real-world
          problems.
        </h3>
      </div>
    </div>
  );
}

export default Hero;
