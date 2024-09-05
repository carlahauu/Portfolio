import React from "react";
import "../styles/Contact.css";
import SendIcon from "@mui/icons-material/Send";

export function Contact() {
  return (
    <div className="contactSection">
      <div className="contactInfo">
        <h1 className="contactHeader">Let's get in touch!</h1>
        <a href="mailto:carlahau110@gmail.com">carlahau110@gmail.com</a>
        <div className="contactSocials">
          <a href="https://www.linkedin.com/in/carla-hau/">Linkedin</a>
          <p>(626) 278-4892</p>
          <p>Los Angeles, CA</p>
        </div>
        <div className="contactMessage">
          <p>
            Feel free to drop me a message anytime! Whether it’s about a
            software development project, project collaboration, or just to say
            hi, I’m always happy to chat and explore new ideas. Looking forward
            to hearing from you!
          </p>
        </div>
      </div>
      <div className="emailSection">
        <form>
          <label>Your Name</label>
          <textarea
            style={{ height: "20px" }}
            placeholder="First and Last Name"
            inputMode="textField"
            required
          ></textarea>
          <label>Your Email</label>
          <textarea
            style={{ height: "20px" }}
            placeholder="email@example.com"
            inputMode="textField"
            required
          ></textarea>
          <label>Your Message</label>
          <textarea
            style={{ height: "100px" }}
            placeholder="I'd love to chat about collaborating on a web development project. Let me know when you're available!"
            inputMode="textField"
            required
          ></textarea>
          <button className="sendBtn">
            Send Message{" "}
            <div className="sendIcon">
              <SendIcon />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
