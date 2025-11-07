import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Gaming from "./components/Gaming";
import Contact from "./components/Contact";
import "./App.css";
import { motion } from "motion/react";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      if (window.location.hash) {
        window.history.replaceState(null, null, window.location.pathname);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }, []);

  const navigateTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />
      <main>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section id="home">
            <Home navigateTo={navigateTo} />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="gaming">
            <Gaming />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default App;
