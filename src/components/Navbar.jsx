import React from "react";
import "../styles/Navbar.css";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { GitHub, LinkedIn } from "@mui/icons-material";

function Navbar() {
  return (
    <nav className="navbarContainer">
      <div className="logoContainer">
      <WavingHandIcon className="logo" />
      </div>
      <ul className="navbarItems">
        <li className="home">
          <a href="">home</a>
        </li>
        <li>
          <a href="">projects</a>
        </li>
        <li>
          <a href="">resume</a>
        </li>
        <li>
          <a href="">about</a>
        </li>
        <li>
          <a href="">contact</a>
        </li>
      </ul>
      <div className="socialIcons">
        <div className="githubIcon">
          <GitHub />
        </div>
        <div className="linkedinIcon">
          <LinkedIn />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
