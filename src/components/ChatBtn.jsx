import React from "react";
import "../styles/ChatBtn.css";
import { PiCoffeeFill } from "react-icons/pi";

function ChatBtn() {
  return (
    <a href="/contact" className="chatBtnContainer">
      <button className="chatBtn">
        <PiCoffeeFill className="coffeeIcon" />
        <p className="chatText">Let's Chat!</p>
        <p>Click here to contact me!</p>
      </button>
    </a>
  );
}

export default ChatBtn;
