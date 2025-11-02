// App.js
import React, { useRef, useState, useEffect } from 'react';
import NavBar from "./components/NavBar";
import Body from "./components/Intro";
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import MyProjects from "./components/MyProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Services from "./components/Services/Services";
import WebsiteIntro from './components/WebsiteFolder/WebsiteIntro';
import Blog from "./components/Blog";
import ServiceJoin from './components/Services/ServiceJoin';
import Ai_Development from './components/WebsiteFolder/Ai_Development';
import Mobile_Development from './components/WebsiteFolder/Mobile_Development';
import FrontEnd_Development from './components/WebsiteFolder/FrontEnd_Development';
import CloudAndDatabases from './components/WebsiteFolder/CloudAndDatabases';

const PortfolioPage = ({ homeRef, aboutRef, skillsRef, projectsRef, contactRef, activeSection, scrollToSection }) => {
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
        <Body 
        scrollToProjects={() => scrollToSection(projectsRef)}
         scrollToContact={() => scrollToSection(contactRef)}
         />
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
};


function App() {
  // Refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const location = useLocation();
  // State to track active section
  const [activeSection, setActiveSection] = useState('home');

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Intersection Observer to track which section is in view
  // NOTE: This useEffect should only run when on the main path ("/")
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
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    sections.forEach(({ id, ref }) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          // You should check the current path if this App component renders on all routes.
          // For simplicity with the Routes structure below, we'll assume it's fine.
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
    <BrowserRouter>
      <Routes>
        {/* Route for the main portfolio page (which includes NavBar and Footer) */}
        <Route 
          path="/" 
          element={
            <PortfolioPage 
              homeRef={homeRef}
              aboutRef={aboutRef}
              skillsRef={skillsRef}
              projectsRef={projectsRef}
              contactRef={contactRef}
              activeSection={activeSection}
              scrollToSection={scrollToSection}
            />
          } 
        />
        
        
        <Route 
          path="/services" 
          element={<ServiceJoin />} 
        />
        
        <Route path="*" element={<Home />}
        />

        <Route 
          path="/blog" 
          element={<Blog />} 
        />
        
         <Route 
          path="/services/WebApplication" 
          element={<WebsiteIntro />} 
        />

        <Route 
          path="/services/AI_Development" 
          element={<Ai_Development />} 
        />


         <Route 
          path="/services/Mobile_Development" 
          element={<Mobile_Development/>} 
        />

         <Route 
          path="/services/FrontEnd_Development" 
          element={<FrontEnd_Development />} 
        />

         <Route 
          path="/services/Cloud&Databases_Management" 
          element={<CloudAndDatabases />} 
        />

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;