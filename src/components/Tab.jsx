import React, { useEffect, useState } from "react";
import "../../CSS/tab.css";
import { FaGraduationCap, FaBriefcase, FaHeart } from "react-icons/fa";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 900;

  const education = [
    {
      title: "Hilton School, Dehradun",
      description: "Completed my schooling from Hilton School in 2020.",
    },
    {
      title: "University of Petroleum and Energy Studies (UPES), Dehradun",
      description:
        "Earned a Bachelor's Degree in Computer Applications in 2023.",
    },
    {
      title: "Graphic Era (Deemed to be University), Dehradun",
      description: "Earned a Master's Degree in Computer Applications in 2025.",
    },
  ];

  const experience = [
    {
      title: "United Club of Developers",
      description:
        "Worked as a Video Editor for 4 months, learning to handle video editors- Filmora, VSDC and DaVinci",
    },
    {
      title: "Lazarus Performing Arts",
      description:
        "Worked as a Poster Designer for 9 months, handling creative design tasks.",
    },
    {
      title: "Clubfoot India",
      description:
        "Served as a Social Media Manager and assisted patients post-treatment.",
    },
    {
      title: "Unified Mentor Pvt. Ltd.",
      description:
        "Gained hands-on experience in making Frontend Websites and also getting introduce with different elements and new languages that can be helpful in making a creative and interactive websites.",
    },
  ];

  const hobbies = [
    {
      title: "Gaming",
      description: "FPS, RPG, and Strategy games keep me sharp and creative.",
    },
    {
      title: "Hiking",
      description: "Exploring mountains refreshes my mind and spirit.",
    },
    {
      title: "Listening to Music",
      description:
        "A huge collection of various genres that bring peace and focus.",
    },
    {
      title: "Travelling",
      description:
        "Loves visiting new places, experiencing different cultures, and meeting people from diverse backgrounds.",
    },
  ];

  const tabs = [
    { label: "Education", icon: <FaGraduationCap />, content: education },
    { label: "Work Experience", icon: <FaBriefcase />, content: experience },
    { label: "Hobbies", icon: <FaHeart />, content: hobbies },
  ];

  return (
    <div className="tab-container">
      <div className="tab-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-btn ${index === activeTab ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {isMobile ? (
              <span className="tab-icon">{tab.icon}</span>
            ) : (
              tab.label
            )}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {tabs[activeTab].content.map((item, i) => (
          <div key={i} className="tab-card">
            <div className="tab-icon">{item.icon}</div>
            <div className="tab-details">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;


