import React from "react";
import TrueFocus from "../motions/TrueFocus";
import "../../CSS/skills.css";
import Marquee from "react-fast-marquee";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import JS from "../assets/js.png";
import react from "../assets/atom.png";
import tailwind from "../assets/Tailwind CSS.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import npm from "../assets/npm.png";
import sass from "../assets/sass.png";

const Skills = () => {
  // Array of skills with their images and corresponding links
  const skills = [
    { image: Html, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { image: Css, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    {
      image: JS,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { image: react, link: "https://reactjs.org/" },
    { image: tailwind, link: "https://tailwindcss.com/" },
    { image: git, link: "https://git-scm.com/" },
    { image: github, link: "https://github.com/" },
    { image: npm, link: "https://www.npmjs.com/" },
    { image: sass, link: "https://sass-lang.com/" },
  ];

  return (
    <>
      <div className="motions">
        <div>
          <TrueFocus
            sentence="Core Skills"
            manualMode={false}
            blurAmount={6}
            borderColor="green"
            animationDuration={0.5}
            pauseBetweenAnimations={1}
          />
        </div>
      </div>

      <div className="marq">
        <Marquee speed={100}>
          {skills.map((skill, index) => (
            <a key={index} href={skill.link} target="_blank">
              <img src={skill.image} alt="Skill" />
            </a>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default Skills;
