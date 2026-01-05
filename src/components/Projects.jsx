import React from "react";
import ScrollFloat from "../motions/ScrollFloat";
import "../../CSS/projects.css";
import SocialCard from "../assets/SocialCard.png";
import Workout from "../assets/Workout.png";
import Portfolio from "../assets/Portfolio.png";
import MySmartList from "../assets/MySmartList.png";
import DynamicPortfolio from "../assets/DynamicPortfolio.png";
import ShopO from "../assets/ShopO.png";

const Projects = () => {
  const allProjects = [
    {
      title: "Social Card",
      description:
        "This is the social card containing all of my connection links, allowing users to directly connect with me on all provided handles.",
      tech: "HTML5, CSS",
      link: "https://social-card-taupe.vercel.app/",
      image: `${SocialCard}`,
    },
    {
      title: "Workout Recommendation System",
      description:
        "A recommendation system that displays all the exercises for users, categorized by their selected areas and difficulty levels. Additionally, it provides YouTube links that redirect users to tutorials demonstrating how each selected exercise is performed.",
      tech: "Python",
      link: "https://github.com/hardeep928/Workout-Recommendation-System",
      image: `${Workout}`,
    },
    {
      title: "Static Portfolio",
      description:
        "This is my first portfolio, created to showcase my journey and development as a beginner in the field. It highlights all of the projects and skills I've learned along the way.",
      tech: "HTML5, CSS, JavaScript",
      link: "https://hardeep-portfolio-two.vercel.app/",
      image: `${Portfolio}`,
    },
    {
      title: "My Smart List",
      description:
        "As the name suggests, this is Smart List, a tool where users can save all their goals along with their priority levels. The list is stored in each user's local storage, allowing them to easily track their pending and completed tasks or goals. This feature benefits users by providing a simple and organized way to stay on top of their progress.",
      tech: "HTML5, Tailwind CSS, React.js, API Integration",
      link: "https://my-smart-list.vercel.app/",
      image: `${MySmartList}`,
    },
    {
      title: "Dynamic Portfolio",
      description:
        "This is the same portfolio you’re viewing. I’ve used React Bits, an open-source collection of animated and customizable React components, to add interactive motions and enhance the UI. Building this portfolio in a limited time helped me gain hands-on experience and improve my React skills.",
      tech: "HTML5, Tailwind CSS, SCSS, React.js, React Bits, NPM, React Icons",
      link: "",
      image: `${DynamicPortfolio}`,
    },
    {
      title: "ShopO",
      description:
        "ShopO is the full MERN stack website to order clothes. I've taken help of AI to build the backend. After building, I've connected it with the Frontend by taking care of each and every rule of making a website and implemented things so that it can achieve SEO easily, if targeted for bigger audience in future. I've used Vercel for Frontend Deployment and Render for Backend Deployment.",
      tech: "HTML5, CSS, React.js, NPM, Node.JS, MongoDB, Express.js",
      link: "https://shop-o-znfl.vercel.app/",
      image: `${ShopO}`,
    },
  ];

  return (
    <>
      <section id="projects" className="projects-section">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          Projects
        </ScrollFloat>
      </section>
      <div className="grid-projects">
        {allProjects.map((projDet, index) => (
          <div className="project-card" key={index}>
            <img src={projDet.image} alt={projDet.title} />
            <div className="info">
              <h1>{projDet.title}</h1>
              <p className="desc">{projDet.description}</p>
              <p>
                <span style={{ color: "#FF4DD4", fontWeight: "bold" }}>
                  Tech Used:{" "}
                </span>
                {projDet.tech}
              </p>
              <p>
                <a href={projDet.link} target="_blank">
                  <span style={{ color: "#21FFFF" }}>Link to Discover</span>
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
