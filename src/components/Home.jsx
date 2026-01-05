import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import "../../CSS/home.css";
import userimg from "../assets/Profile.jpg";
import Particles from "../motions/Particles";
import TextType from "../motions/TextType";
import Resume from "../assets/Resume.pdf";

const Home = ({ navigateTo }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 900;

  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        minheight: "90vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div
        className="home-container"
        style={{ position: "relative", zIndex: 2, flex: 1 }}
      >
        <div className="info">
          <h1>Hardeep Singh Sahib</h1>
          {isMobile ? (
            <span>
              Frontend Developer <br></br> & Passionate Gamer
            </span>
          ) : (
            <span>Frontend Developer & Passionate Gamer</span>
          )}

          <p>
            Creating immersive digital experiences through code and creativity.
            Building extraordinary UIs.
          </p>

          <div className="buttons">
            <motion.button
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="button-proj"
              onClick={() => navigateTo("projects")}
            >
              View Projects
            </motion.button>
            <a href={Resume} target="_blank">
              <button className="button-touch">View Resume</button>
            </a>
          </div>
        </div>

        <div className="ring1">
          <div className="ring2">
            <div className="Image">
              <img src={userimg} alt="User Pic" />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "2em 0em",
          paddingTop: "1em",
        }}
        className="text-type-container"
      >
        <TextType
          text={["< Explore the map below />", "< Happy Coding! />"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
      </div>
    </section>
  );
};

export default Home;
