import React from "react";
import { useState } from "react";
import "../styles/Hero.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import WavingHand from "@mui/icons-material/WavingHand";

function Hero() {
  const [onlineImg, setOnlineImg] = useState(true);
  const [offlineImg, setOfflineImg] = useState(false);
  const onClick = () => {
    setOfflineImg(!offlineImg)
    setOnlineImg(!onlineImg)
  }
  return (
    <div className="heroContainer">
      <div className="images">
        {onlineImg == true ? (
          <img className="onlineImg" src="/Online.png" />
        ) : (
          <img className="onlineImg" src="/Offline.png" />
        )}
      </div>
      <div className="heroContent">
        <div>
          <button onClick={onClick} className="onlineBtn">
          {onlineImg == true ? (
            <><FiberManualRecordIcon className="onlineStatus" fontSize="small" />Online</>
        ) : (
            <><FiberManualRecordIcon className="offlineStatus" fontSize="small" />Offline</>
        )}
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
