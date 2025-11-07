import React from "react";
import RotatingText from "../motions/RotatingText";
import "../../CSS/contact.css";
import Instagram from "../assets/instagram.png";
import Github from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
import Gmail from "../assets/gmail.png";
import Twitter from "../assets/twitter.png";

const Contact = () => {
  const socials = [
    {
      icon: Gmail,
      link: "mailto:hardeepsingh.bb03@gmail.com",
    },
    {
      icon: LinkedIn,
      link: "https://www.linkedin.com/in/hardeepsinghsahib/",
    },
    {
      icon: Github,
      link: "https://github.com/hardeep928",
    },
    {
      icon: Instagram,
      link: "https://www.instagram.com/hardeepplays/",
    },
    {
      icon: Twitter,
      link: "https://x.com/HardeepSingh162",
    },
  ];

  return (
    <>
      <div className="showtexts">
        <p>
          Let's
          <RotatingText
            texts={["Connect", "Inquire", "Collaborate", "Engage!"]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </p>
      </div>

      <div className="icons">
        {socials.map((social, index) => (
          <a href={social.link} target="_blank">
            <img src={social.icon} alt="Socials" />
          </a>
        ))}
      </div>

      <span className="texxt">
        Click on the icons to navigate to the respective pages.
      </span>
    </>
  );
};

export default Contact;
