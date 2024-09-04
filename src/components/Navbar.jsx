import React from "react";
import "../styles/Navbar.css";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { GitHub, LinkedIn } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';

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
          <a href="https://github.com/carlahauu"><GitHub /></a>
        </div>
        <div className="linkedinIcon">
          <a href="https://www.linkedin.com/in/carla-hau/"><LinkedIn /></a>
        </div>
        <div className="menuBtn">
            <MenuIcon fontSize="large" className="menuBtn" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
