import React from "react";
import ProjectBlock from "./ProjectBlock";
import "../styles/ProjectSection.css";
import flashifyImage from "/src/assets/Flashify.png";
import { AutoAwesome } from "@mui/icons-material";

function ProjectSection() {
  const flashifyDemo = true;
  const flashifySkills = ["React.js", "HTML & CSS", "Clerk", "Gemini API"];
  return (
    <div className="projectsSection">
      <h2 className="projectHeader">
        Personal Projects <AutoAwesome className="projectsSparkle" />
      </h2>
      <ProjectBlock
        name="Flashify"
        img={flashifyImage}
        desc="Flashify is a website that generates custom flashcards based on the
          user's notes using Google's Gemini AI API, providing users with an
          interactive and efficient study tool through a React.js interface and
          secure OAuth authentication via Clerk."
        demo={flashifyDemo}
        skills={flashifySkills}
        demoLink="https://www.flashify.online"
        repoLink="https://github.com/carlahauu/Flashify"
      />
    </div>
  );
}

export default ProjectSection;
