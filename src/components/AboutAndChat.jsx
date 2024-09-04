import React from "react";
import AboutBtn from "./AboutBtn";
import "../styles/AboutAndChat.css";
import ChatBtn from "./ChatBtn";

function AboutAndChat() {
  return (
    <div className="abtAndChatContainer">
      <AboutBtn />
      <ChatBtn />
    </div>
  );
}

export default AboutAndChat;
