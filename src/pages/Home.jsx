import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectSection from "../components/ProjectSection";
import "../styles/Home.css"

function Home() {
  return (
    <div className="homeContainer">
        <Hero />
        <ProjectSection />
    </div>
  );
}

export default Home;