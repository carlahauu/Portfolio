import React from "react";
import { useRef, useState } from "react";
import "../styles/Contact.css";
import SendIcon from "@mui/icons-material/Send";
import { collection, doc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import { FaCheckCircle } from "react-icons/fa";

export function Contact() {
  const [submitState, setSubmitState] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const form = useRef();

  function getDate() {
    const timeStamp = new Date();
    const month = timeStamp.getMonth() + 1;
    const year = timeStamp.getFullYear();
    const date = timeStamp.getDate();
    return `${month}-${date}-${year}`;
  }

  const resubmitMSg = () => {
    setSubmitState(false);
    setHasSubmitted(false);
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitState(true);
    setHasSubmitted(true);
    const docRef = doc(
      collection(firestore, "contact"),
      email + " | " + getDate()
    );
    setDoc(docRef, {
      FullName: fullName,
      Email: email,
      Message: message,
    });

    var templateParams = {
      message: message,
      email: email,
      fullName: fullName,
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          setSubmitState(false);
          setHasSubmitted(true);
          console.log("FAILED...", error);
        }
      );
  };
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
        <form ref={form} onSubmit={sendEmail}>
          {hasSubmitted && submitState && (
            <div className="submitMsg">
              <FaCheckCircle className="submitIcon" />
              <p>
                Thank you for reaching out! I’ll get back to you as soon as
                possible. I appreciate your interest and look forward to
                connecting with you!
              </p>
              <button onClick={resubmitMSg} className="newMsgBtn">Submit New Message!</button>
            </div>
          )}
          {!hasSubmitted && !submitState && (
            <>
              <label>Your Name</label>
              <textarea
                style={{ height: "20px" }}
                placeholder="First and Last Name"
                inputMode="textField"
                onChange={(e) => setFullName(e.target.value)}
                name="fullName"
                required
              ></textarea>
              <label>Your Email</label>
              <textarea
                style={{ height: "20px" }}
                placeholder="email@example.com"
                inputMode="textField"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              ></textarea>
              <label>Your Message</label>
              <textarea
                style={{ height: "100px" }}
                placeholder="I'd love to chat about collaborating on a web development project. Let me know when you're available!"
                inputMode="textField"
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                required
              ></textarea>
              <button type="submit" onClick={sendEmail} className="sendBtn">
                Send Message{" "}
                <div className="sendIcon">
                  <SendIcon />
                </div>
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
