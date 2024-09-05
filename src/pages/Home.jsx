import React from "react";
import AboutAndChat from "../components/AboutAndChat";
import Hero from "../components/Hero";
import ProjectSection from "../components/ProjectSection";
import "../styles/Home.css"

function Home() {
  return (
    <div className="homeContainer">
        <Hero />
        <ProjectSection />
        <AboutAndChat />
    </div>
  );
}

export default Home;
