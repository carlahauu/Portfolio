import React from "react";
import "../styles/AboutPage.css";

export function AboutPage() {
  return (
    <div className="aboutSection">
      <h1 className="aboutHeader">Get to know me!</h1>
      <div className="aboutInfo">
        <div className="aboutImg">
          <img src="src/assets/AboutPhoto.png" />
        </div>
        <div className="aboutMe">
          <p className="greeting">HEY, LEI HOU, NI HAO!</p>
          <p>
            👩‍💻 I’m Carla Hau (sher/her), an ambitious software developer based
            in Los Angeles, California.
          </p>
          <p>
            🏫 I am currently majoring in Computer Science with Business
            Applications at University of California, Riverside! Determined to
            expand my knowledge, I have interned in various roles including
            software developer, website design, graphic design, and
            sales/marketing.
          </p>
          <p>
            🏖️ When I am not working, you can find me playing tennis, taking photos, watching Asian dramas, and trying new restaurants with my
            friends! Feel free to reach out for software development inquiries
            or to whack some tennis balls together!
          </p>
        </div>
      </div>
    </div>
  );
}
