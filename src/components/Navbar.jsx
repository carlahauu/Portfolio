import React from "react";
import "../styles/Navbar.css";
import { useState } from "react";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { GitHub, LinkedIn } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [style, setStyle] = useState("");
  const [mobileNav, setMobileNav] = useState(false);
  const onClick = () => {
    setMobileNav(!mobileNav);
    if (mobileNav == true) {
      setStyle("hidden");
    } else {
      setStyle("visible");
    }
  };
  return (
    <>
      <nav className="navbarContainer">
        <div className="logoContainer">
          <WavingHandIcon className="logo" />
        </div>
        <ul className="navbarItems">
          <li className="home">
            <a href="/">home</a>
          </li>
          <li>
            <a href="/projects">projects</a>
          </li>
          <li>
            <a href="">resume</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
        </ul>
        <div className="socialIcons">
          <div className="githubIcon">
            <a href="https://github.com/carlahauu">
              <GitHub />
            </a>
          </div>
          <div className="linkedinIcon">
            <a href="https://www.linkedin.com/in/carla-hau/">
              <LinkedIn />
            </a>
          </div>
          <div className="menuBtn">
            <a onClick={onClick}>
              <MenuIcon fontSize="large" className="menuBtn" />
            </a>
          </div>
        </div>
      </nav>
      <div style={{ visibility: style }} className="mobileNavContainer">
        <ul className="mobileNavItems">
          <li className="home">
            <a href="/">home</a>
          </li>
          <li>
            <a href="/projects">projects</a>
          </li>
          <li>
            <a href="">resume</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
