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
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Fix: Only set up intersection observer on home page
  useEffect(() => {
    // Only run this on the home page
    if (location.pathname !== '/') {
      setActiveSection(''); // Clear active section on other pages
      return;
    }

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
          if (entry.isIntersecting && location.pathname === '/') {
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
  }, [location.pathname]); // Add location.pathname as dependency

  return (
    <Routes>
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
      
      <Route path="/services" element={<ServiceJoin />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/services/WebApplication" element={<WebsiteIntro />} />
      <Route path="/services/AI_Development" element={<Ai_Development />} />
      <Route path="/services/Mobile_Development" element={<Mobile_Development/>} />
      <Route path="/services/FrontEnd_Development" element={<FrontEnd_Development />} />
      <Route path="/services/Cloud&Databases_Management" element={<CloudAndDatabases />} />
    </Routes>
  );
}

// Wrap App with BrowserRouter
export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}