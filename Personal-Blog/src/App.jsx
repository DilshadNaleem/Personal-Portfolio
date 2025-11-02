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

// Layout component for pages that need NavBar and Footer
const PageLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

function App() {
  // Refs for each section (only used on main portfolio page)
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  
  // State to track active section (only for main portfolio page)
  const [activeSection, setActiveSection] = useState('home');

  // Function to scroll to a specific section (only for main portfolio page)
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Intersection Observer - only for main portfolio page
  useEffect(() => {
    // Only set up intersection observer if we're on the home page
    const isHomePage = window.location.pathname === '/';
    
    if (isHomePage) {
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
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the main portfolio page */}
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
        
        {/* Other routes with NavBar and Footer */}
        <Route 
          path="/services" 
          element={
            <PageLayout>
              <ServiceJoin />
            </PageLayout>
          } 
        />
        
        <Route 
          path="/blog" 
          element={
            <PageLayout>
              <Blog />
            </PageLayout>
          } 
        />
        
        <Route 
          path="/services/WebApplication" 
          element={
            <PageLayout>
              <WebsiteIntro />
            </PageLayout>
          } 
        />

        <Route 
          path="/services/AI_Development" 
          element={
            <PageLayout>
              <Ai_Development />
            </PageLayout>
          } 
        />

        <Route 
          path="/services/Mobile_Development" 
          element={
            <PageLayout>
              <Mobile_Development />
            </PageLayout>
          } 
        />

        <Route 
          path="/services/FrontEnd_Development" 
          element={
            <PageLayout>
              <FrontEnd_Development />
            </PageLayout>
          } 
        />

        <Route 
          path="/services/Cloud&Databases_Management" 
          element={
            <PageLayout>
              <CloudAndDatabases />
            </PageLayout>
          } 
        />

        {/* Add a catch-all route for 404 pages */}
        <Route 
          path="*" 
          element={
            <PageLayout>
              <div style={{ padding: '100px 20px', textAlign: 'center' }}>
                <h1>Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
              </div>
            </PageLayout>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;