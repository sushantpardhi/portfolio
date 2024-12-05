import React, { useCallback, useEffect, useState, useRef } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useInView } from './hooks/useInView';
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [timer, setTimer] = useState(5);
  const [isAnimating, setIsAnimating] = useState(false);

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const aboutInView = useInView(aboutRef);
  const experienceInView = useInView(experienceRef);
  const projectsInView = useInView(projectsRef);
  const contactInView = useInView(contactRef);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showDisclaimer && timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else if (timer === 0) {
      handleReadyClick(); // Auto-start when timer reaches 0
    }
  }, [showDisclaimer, timer]);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const handleReadyClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowDisclaimer(false);
      document.body.classList.add("content-visible");
    }, 1000);
  };

  return (
    <div
      className={`App ${isAnimating ? "animate-out" : ""}`}
      style={{
        backgroundPosition: `0px ${scrollY * 0.5}px`,
      }}
    >
      {showDisclaimer && (
        <div className={`modal-overlay ${isAnimating ? "fade-out" : ""}`}>
          <div className="modal-content">
            <h2>Welcome, Adventurer!</h2>
            <p>
              Get ready to embark on a journey that might just redefine
              awesomeness!
            </p>
            <p>The adventure begins in {timer} seconds...</p>
            <button onClick={handleReadyClick}>Let's Go!</button>
          </div>
        </div>
      )}
      <div className="content-wrapper">
        <div className="background-overlay"></div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "grab",
                },
              },
              modes: {
                grab: {
                  distance: 140,
                  links: {
                    opacity: 0.5,
                  },
                },
              },
            },
            particles: {
              color: { value: "#61dafb" },
              links: {
                color: "#61dafb",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.8,
                direction: "none",
                random: true,
                straight: false,
                outMode: "bounce",
              },
              number: {
                value: 80,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              opacity: {
                value: 0.3,
                random: true,
              },
              size: {
                value: { min: 1, max: 3 },
                random: true,
              },
            },
          }}
        />
        <Hero />
        <div
          ref={aboutRef}
          className={`section-hidden ${aboutInView ? "section-visible" : ""}`}
        >
          <About />
        </div>
        <div
          ref={experienceRef}
          className={`section-hidden ${
            experienceInView ? "section-visible" : ""
          }`}
        >
          <Experience />
        </div>
        <div
          ref={projectsRef}
          className={`section-hidden ${
            projectsInView ? "section-visible" : ""
          }`}
        >
          <Projects />
        </div>
        <div
          ref={contactRef}
          className={`section-hidden ${contactInView ? "section-visible" : ""}`}
        >
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
