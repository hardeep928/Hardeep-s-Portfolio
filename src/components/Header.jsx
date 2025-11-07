import React, { useEffect, useState } from "react";
import "../../CSS/header.css";
import HamburgerDropdown from "./HamburgerDropdown";

const Header = () => {
  const [activeState, setActiveState] = useState("home");
  const [width, setWidth] = useState(window.innerWidth);

  const handleHeader = (state) => {
    setActiveState(state);
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const onScroll = () => {
      let currentSection = "home"; // Default to home section

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Check if section is in view
        if (rect.top <= 0 && rect.bottom >= 0) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveState(currentSection);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isMobile = width <= 720;

  return (
    <div className="container">
      <header>
        <h1>DEV.GAMER</h1>
        {isMobile ? (
          <HamburgerDropdown
            activeState={activeState}
            handleHeader={handleHeader}
          />
        ) : (
          <ul>
            <li>
              <a
                href="#home"
                onClick={() => handleHeader("home")}
                className={activeState === "home" ? "active" : ""}
                title="Go to Home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => handleHeader("about")}
                className={activeState === "about" ? "active" : ""}
                title="Go to About"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => handleHeader("projects")}
                className={activeState === "projects" ? "active" : ""}
                title="Go to Projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => handleHeader("skills")}
                className={activeState === "skills" ? "active" : ""}
                title="Go to Skills"
              >
                Skills
              </a>
            </li>
            {/* <li>
              <a
                href="#gaming"
                onClick={() => handleHeader("gaming")}
                className={activeState === "gaming" ? "active" : ""}
                title="Go to Gaming"
              >
                Gaming
              </a>
            </li> */}
            <li>
              <a
                href="#contact"
                onClick={() => handleHeader("contact")}
                className={activeState === "contact" ? "active" : ""}
                title="Go to Contact"
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </header>
    </div>
  );
};

export default Header;
