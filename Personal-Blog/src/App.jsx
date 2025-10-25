import React, { useRef, useState, useEffect } from 'react';
import NavBar from "./components/NavBar";
import Body from "./components/Intro";
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import MyProjects from "./components/MyProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  

  // State to track active section
  const [activeSection, setActiveSection] = useState('home');

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Intersection Observer to track which section is in view
  useEffect(() => {
    const sections = [
      { id: 'home', ref: homeRef },
      { id: 'about', ref: aboutRef },
      { id: 'skills', ref: skillsRef },
      { id: 'projects', ref: projectsRef },
      { id: 'contact', ref: contactRef },
      
    ];

    const observers = [];

    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Adjust this to change when active state triggers
      threshold: 0
    };

    sections.forEach(({ id, ref }) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        });
      }, options);

      if (ref.current) {
        observer.observe(ref.current);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <>
      <NavBar 
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
        
        activeSection={activeSection}
      />
      
      <div ref={homeRef} id="home">
        <Body />
      </div>
      
      <div ref={aboutRef} id="about">
        <AboutMe />
      </div>
      
      <div ref={skillsRef} id="skills">
        <Skills />
      </div>
      
      <div ref={projectsRef} id="projects">
        <MyProjects />
      </div>
      
      <div ref={contactRef} id="contact">
        <Contact />
      </div>

     

      <Footer />
    </>
  );
}

export default App;