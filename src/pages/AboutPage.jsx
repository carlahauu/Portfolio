import React from "react";
import "../styles/AboutPage.css";

export function AboutPage() {
  return (
    <div className="aboutSection">
      <h1 className="aboutHeader">HEY, LEI HOU, NI HAO!</h1>
      <div className="aboutInfo">
        <div className="aboutImg">
          <img src="src/assets/AboutPhoto.png" />
        </div>
        <div className="aboutMe">
          <p className="greeting"></p>
          <p>
            👩‍💻 I’m Carla Hau (she/her), an ambitious software developer based in
            Los Angeles, California.
          </p>
          <p>
            🏫 I am currently majoring in Computer Science with Business
            Applications at University of California, Riverside! I am involved
            with organizations including ACM@UCR, Design@UCR, and Highlander
            Racing!
          </p>
          <p>
            💼 Determined to expand my knowledge, I have interned in various
            roles including software development, website design, graphic
            design, and sales/marketing.
          </p>
          <p>🏅 In efforts to learn more and put my skills to use, I participate in hackathons when I have time. I am currently a 3x hackathon winner.</p>
          <p>
            🏖️ When I am not at my computer, you can find me playing tennis,
            taking photos, watching Asian dramas, and trying new restaurants
            with my friends! Feel free to reach out!
          </p>
        </div>
      </div>
    </div>
  );
}
