import React from "react";
import "../../CSS/about.css";
import ScrollVelocity from "../motions/ScrollVelocity";
import Frontend from "../assets/boy.png";
import Gamer from "../assets/gamer.png";
import Designer from "../assets/designer.png";
import Learner from "../assets/student.png";
import Working from "../assets/working.png";
import Tab from "./Tab";

const About = () => {
  return (
    <>
      <div className="heading">
        <ScrollVelocity
          texts={["About Me", "Who Am I"]}
          velocity={100}
          className="custom-scroll-text"
        />
      </div>

      <div className="grid-container">
        <div className="grid-item g1">
          <img src={Frontend} alt="" />
          <h1>Frontend Developer</h1>
          <p>
            Crafting pixel-perfect responsive web applications. Can create the
            best experience using React and other libraries.
          </p>
        </div>
        <div className="grid-item g2">
          <img src={Gamer} alt="" />
          <h1>Passionate Gamer</h1>
          <p>
            Gaming isn't just a hobby--it's my passion. From FPS to RPGs, I
            bring dedication to both gaming and coding.
          </p>
        </div>
        <div className="grid-item g3">
          <img src={Designer} alt="" />
          <h1>Creative Designer</h1>
          <p>
            Great Code deserves Great Design. Creating visually captivating UIs
            inspired by different styles.
          </p>
        </div>
        <div className="grid-item g4">
          <img src={Learner} alt="" />
          <h1>Continous Learner</h1>
          <p>
            The tech world never stops evolving, and neither do I. Constantly
            learning new technologies and frameworks.
          </p>
        </div>
      </div>

      <div className="group">
        <div className="image">
          <img className="w-[40em]" src={Working} alt="" />
        </div>

        <div className="tab">
          <Tab />
        </div>
      </div>
    </>
  );
};

export default About;
