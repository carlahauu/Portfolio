import React from "react";
import ProjectBlock from "./ProjectBlock";
import "../styles/ProjectSection.css";
import flashifyImage from "/src/assets/Flashify.png";
import playlistyImage from "/src/assets/Playlisty.png";
import { AutoAwesome } from "@mui/icons-material";

function ProjectSection() {
  const flashifyDemo = true;
  const flashifySkills = ["React.js", "HTML & CSS", "Clerk", "Gemini API"];
  const playlistySkills = ["React.js", "HTML & CSS", "Spotify API", "Gemini API"];
  return (
    <div className="projectsSection">
      <h2 className="projectHeader">
        Personal Projects <AutoAwesome className="projectsSparkle" />
      </h2>
      <ProjectBlock
        name="Playlisty"
        img={playlistyImage}
        desc="Playlisty curates playlists that match your vibe in seconds!
        Simply input your preferences, and let Playlisty do the rest—bringing you the best tracks 
        tailored to your unique taste, all through seamless Spotify integration. 
        It's your music, your way. "
        demo={flashifyDemo}
        skills={playlistySkills}
        demoLink="https://playlisty.carlahau.com"
        repoLink="https://github.com/carlahauu/Playlisty"
      />
    </div>
  );
}

export default ProjectSection;
