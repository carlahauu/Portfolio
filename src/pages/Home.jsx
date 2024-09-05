import React from "react";
import AboutAndChat from "../components/AboutAndChat";
import Hero from "../components/Hero";
import ProjectSection from "../components/ProjectSection";
import "../styles/Home.css";

function Home() {
  return (
    <div className="homeContainer">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/png" href="/waving_hand.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="An ambitious software developer who is passionate about continuous learning and building user-friendly applications that solve real-world problems."
        />
        <title>Home</title>
      </head>
      <Hero />
      <ProjectSection />
      <AboutAndChat />
    </div>
  );
}

export default Home;
