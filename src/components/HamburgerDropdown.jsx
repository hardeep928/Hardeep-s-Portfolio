import React, { useState } from "react";
import Hamburger from "hamburger-react";

const HamburgerDropdown = ({ activeState, handleHeader }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="hamburger">
      <Hamburger size={15} toggled={isOpen} toggle={setOpen} color="#00ff88" />

      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>
              <a
                href="#home"
                onClick={() => {
                  handleHeader("home");
                  setOpen(false); // Close the menu after clicking
                }}
                className={activeState === "home" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => {
                  handleHeader("about");
                  setOpen(false);
                }}
                className={activeState === "about" ? "active" : ""}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => {
                  handleHeader("projects");
                  setOpen(false);
                }}
                className={activeState === "projects" ? "active" : ""}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => {
                  handleHeader("skills");
                  setOpen(false);
                }}
                className={activeState === "skills" ? "active" : ""}
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => {
                  handleHeader("contact");
                  setOpen(false);
                }}
                className={activeState === "contact" ? "active" : ""}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerDropdown;
