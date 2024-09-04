import React from "react";
import "../styles/ProjectBlock.css";

function ProjectBlock(props) {
  return (
    <div className="projectContainer">
      <div className="projectImg">
        <img src={props.img} />
      </div>
      <div className="projectInfo">
        <h1 className="projectName">{props.name}</h1>
        <div className="projectSkills">
          {props.skills?.map((data) => (
            <p key={data}>{data}</p>
          ))}
        </div>
        <p className="projectDescription">{props.desc}</p>
        <div className="projectButtons">
          {props.demo == true && <button className="demoBtn"><a href={props.demoLink}>Live Demo</a></button>}
          <button className="githubBtn"><a href={props.repoLink}>GitHub Repo</a></button>
          <button className="moreInfoBtn"><a>More Info</a></button>
        </div>
      </div>
    </div>
  );
}

export default ProjectBlock;
