
import "devicon/devicon.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./WebsiteIntro.css";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import WebsiteNavBar from "./WebsiteNavBar";
import "aos/dist/aos.css";
import { FlashlightIcon } from "lucide-react";
import { FaBolt, FaBootstrap, FaCss3, FaDatabase, FaGlobe, FaHtml5, FaJava, FaMobile, FaReact, FaRobot, FaServer, FaShieldAlt, FaUikit } from "react-icons/fa";


function Ai_Development() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const scrollPositionRef = useRef(0);

  const projectImages = {
    "Puppalate Dog Food" : [
      "/images/dfood/usecase.png",
      "/images/dfood/se.png",
      "/images/dfood/reg.png",
      "/images/dfood/nav.png",
      "/images/dfood/edu.png",
      "/images/dfood/vid.png",
      "/images/dfood/ft.png",
      "/images/dfood/cart.png"
    ],
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      offset: 100,
    });
  }, []);

  const scrollToAbout = () => {
    document
      .getElementById("choosingus")
      ?.scrollIntoView({ behavior: "smooth" });
    setActiveSection("choosingus");
  };

  const scrollToSkills = () => {
    document
      .getElementById("technology")
      ?.scrollIntoView({ behavior: "smooth" });
    setActiveSection("technology");
  };

  const scrollToProjects = () => {
    document
      .getElementById("sprojects")
      ?.scrollIntoView({ behavior: "smooth" });
    setActiveSection("sprojects");
  };

  const scrollToContact = () => {
    document.getElementById("sstories")?.scrollIntoView({ behavior: "smooth" });
    setActiveSection("sstories");
  };

  const handleViewMore = (projectName) => {
    scrollPositionRef.current = window.scrollY;
    setSelectedProject(projectName);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);

    setTimeout(() => {
      window.scrollTo(0, scrollPositionRef.current);
    });
  };

  const nextImage = () => {
    if (selectedProject) {
      const images = projectImages[selectedProject];
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      const images = projectImages[selectedProject];
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleCloseModal();
    } else if (e.key === "ArrowLeft") {
      prevImage();
    } else if (e.key === "ArrowRight") {
      nextImage();
    }
  };

  // Add event listener for keyboard navigation
  useEffect(() => {
    if (selectedProject) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <>
      |
      <WebsiteNavBar
        scrollToAbout={scrollToAbout}
        scrollToSkills={scrollToSkills}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
        activeSection={activeSection}
      />
      {/* First Cyber Section */}
      <div className="cyber-background cyber-background-first">
        <div className="tech-background">
          <div className="cyber-glow"></div>
          <div className="cyber-glow-2"></div>
          <div className="circuit-lines"></div>
          <div className="tech-shape tech-shape-1"></div>
          <div className="tech-shape tech-shape-2"></div>
          <div className="tech-shape tech-shape-3"></div>
          <div className="tech-shape tech-shape-4"></div>
          <div className="tech-shape tech-shape-5"></div>
          <div className="data-particle"></div>
          <div className="data-particle"></div>
          <div className="data-particle"></div>
          <div className="data-particle"></div>
          <div className="data-particle"></div>
          <div className="data-particle"></div>
        </div>
      </div>
      {/* First Cyber Content */}
      <div className="cyber-container cyber-container-first">
        <div
          className="cyber-heading"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h1>Modern Frontend Development for Websites & Landing Pages</h1>
        </div>

        <div
          className="cyber-paragraph"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Build responsive, SEO-optimized and visually stunning websited for startups, businesses, and personal brands.
        </div>

        <div
          className="cyber-contact"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="800"
        >
          <a
            href="mailto:dilshadnaleem13@gmail.com?subject=Web Development Quote&body=Hi, I'm interested in your services.%0A%0AProject Details:%0A- Type: %0A- Timeline: %0A- Budget:"
            className="cyber-button"
          >
            Request Quote
          </a>
        </div>
      </div>
      <div className="web-app" id="choosingus">
        <div
          className="programming-languages is-visible"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          Why Choosing us?
        </div>

        <div className="services-and-code-section-2">
          <div className="services-boxes-grid-2">
            {/* Service Box 5: Mobile App Development */}
            <div
              className="service-box-2"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              <div className="service-icon-bg-2">
                <FaBolt className="service-icon-2" />
              </div>
              <h3>Responsive Design </h3>
              <div className="description">
                Websites that looks perfect on desktop, tablet, and mobile with adaptive layouts.
              </div>
            </div>

            {/* Service Box 6: AI-Powered Mobile Apps */}
            <div
              className="service-box-2"
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              <div className="service-icon-bg-2">
                <FaRobot className="service-icon-2" />
              </div>
              <h3>AI-Enhanced WebApplicaiton</h3>
              <div className="description">
                Integrate AI capabilities like image recognition, voice
                assistants, and predictive analytics into web applications
                for smarter user experiences.
              </div>
            </div>

            {/* Service Box 7: Cross-Platform Mobile + Web */}
            <div
              className="service-box-2"
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="800"
            >
              <div className="service-icon-bg-2">
                <FaDatabase className="service-icon-2" />
              </div>
              <h3>Scalable Database</h3>
              <div className="description">
                Seamless applications that work across mobile devices and web
                platforms with synchronized data, consistent UI, and shared
                business logic, expand to Cloud Services
              </div>
            </div>

            {/* Service Box 8: Progressive Web Apps */}
            <div
              className="service-box-2"
              data-aos="zoom-in"
              data-aos-delay="600"
              data-aos-duration="800"
            >
              <div className="service-icon-bg-2">
                <FaMobile className="service-icon-2" />
              </div>
              <h3>Progressive Mobile Apps (PMA)</h3>
              <div className="description">
                Fast, reliable mobile applications that work offline and provide
                app-like experiences on web devices without app store
                downloads.
              </div>
            </div>

            {/* Service Box 9: Mobile AI Integration */}
            <div
              className="service-box-2"
              data-aos="zoom-in"
              data-aos-delay="700"
              data-aos-duration="800"
            >
              <div className="service-icon-bg-2">
                <FaShieldAlt className="service-icon-2" />
              </div>
              <h3>Fast Loading & Accessibility Focused</h3>
              <div className="description">
                Performance-optmized websites that follow accessibility standards (WCAG).
              </div>
            </div>

            {/* Service Box 10: Mobile Backend & APIs */}
            <div
              className="service-box-2"
              data-aos="zoom-in"
              data-aos-delay="800"
              data-aos-duration="800"
            >
              <div className="service-icon-bg-2">
                <FaServer className="service-icon-2" />
              </div>
              <h3>Mobile Backend & API Integration</h3>
              <div className="description">
                Robust backend systems, RESTful APIs, and cloud services
                optimized for mobile applications with secure authentication and
                real-time data sync.
              </div>
            </div>

             <div
              className="service-box-2"
              data-aos="zoom-in"
              data-aos-delay="800"
              data-aos-duration="800"
            >
              <div className="service-icon-bg-2">
                <FaGlobe className="service-icon-2" />
              </div>
              <h3>SEO-Optmized Structure & Performance</h3>
              <div className="description">
               Search engine friendly websites with fast loading speeds and proper semantic makeup.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro-contain" id="technology">
        <div
          className="programming-languages is-visible"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          Cutting Edge Technology Stack
        </div>

        <div className="services-and-code-section-2">
          <div className="service-boxes-grid">
            {/* Mobile Development Technologies */}
            <div
              className="service-box-4"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="service-icon-bg">
                <FaHtml5 className="service-icon" />
              </div>
              <h3>HTML5</h3>
              <p>
                Semantic markup for SEO and accessibility.
              </p>
            </div>

          
            <div
              className="service-box-4"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="service-icon-bg">
                <FaCss3 className="service-icon" />
              </div>
              <h3>CSS & Tailwand</h3>
              <p>
               Modern styling with utility-fast CSS framework
              </p>
            </div>

           

            {/* Mobile AI & Cloud Technologies */}
            <div
              className="service-box-4"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="service-icon-bg">
                <FaReact className="service-icon" />
              </div>
              <h3>React.js</h3>
              <p>
               Modern UI library for interactive user interfaces.
              </p>
            </div>

            <div
              className="service-box-4"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="service-icon-bg">
                <i className="service-icon devicon-javascript-plain colored" />
              </div>
              <h3>JavaScirpt</h3>
              <p>
                Interactivity functionality and dynamic content.
              </p>
            </div>

            <div
              className="service-box-4"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="service-icon-bg">
                <FaUikit className="service-icon" />
              </div>
              <h3>Material-UI</h3>
              <p>
                Lightweight Modern styling with ulity-first CSS framework.
              </p>
            </div>

            <div
              className="service-box-4"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="service-icon-bg">
                <FaBootstrap className="service-icon" />
              </div>
              <h3>Booststrap</h3>
              <p>
                Most Widely used CSS Framework
              </p>
            </div>

            
            
          </div>
        </div>
      </div>
      <div className="background-webservice" id="sprojects">
        <div className="heading" data-aos="fade-up" data-aos-duration="1000">
          <h1>FrontEnd Development Success Stories</h1>
        </div>

        <div className="card" data-aos="fade-up" data-aos-delay="300">
        <div className="card-title" data-aos="fade-right" data-aos-delay="400">
          Dilshad Naleem Portfolio.
        </div>
        <div
          className="card-heading"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          Personal Portfolio with React.js nad Tailwand CSS
        </div>
        <div className="card-info" data-aos="fade-right" data-aos-delay="600">
          Single-page React applicaiton with Tailwand CSS, interactive sections, Javascript, and performance optimizaiton. The outcome as Fast-reloding, visually appealing portfolio that effectively presents 
          personal brand and professional work with blogs.
        </div>
        <div className="card-languages" data-aos="fade-up" data-aos-delay="700">
          <span className="language-tag">React</span>
          <span className="language-tag">Web Frontend Applicaiton</span>
          <span className="language-tag">Portfolio</span>
          <span className="language-tag">Blog Post</span>
          
        </div>
        <a
          href="https://github.com/DilshadNaleem/Personal-Portfolio"
          className="github"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          View on GitHub <span className="github-arrow">➡️</span>
        </a>
       
      </div>

        
      </div>

      <div className="background-website" id="sstories">
        <div className="heading" data-aos="fade-up" data-aos-duration="1000">
          <h1>Why Choose Frameworks for Frontend?</h1>
        </div>
        <p
          className="website-p"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          Modern frontend frameworks like React, Vue, and Angular provide a structured, component-based architecture that is essential for building complex, interactive, and scalable web applications. They empower developers to create dynamic user interfaces with reusable components, significantly speeding up development, improving code maintainability, and ensuring a consistent user experience across the entire application.
        </p>
        <br /> <br />
        <p
          className="website-p-1"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
           From managing application state efficiently to enabling seamless updates without page reloads, these frameworks transform how users interact with the web. They handle the heavy lifting of the Document Object Model (DOM), leading to superior performance. Furthermore, their robust ecosystems and tools facilitate smooth integration with backend APIs, streamline testing, and enable the creation of rich, single-page applications (SPAs) that feel as fast and responsive as a native desktop or mobile app.
        </p>
        <br /> <br />
        <div className="button-class">
          <div className="button-card">
            <div
              className="button"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              <FaDatabase className="tick-icon" />
              Custom React Applications
            </div>

            <div
              className="button"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="600"
            >
              <FaDatabase className="tick-icon" />
              AI Integrations
            </div>

            <div
              className="button"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              <FaDatabase className="tick-icon" />
              Scalable Backend
            </div>

            <div
              className="button"
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="600"
            >
              <FaDatabase className="tick-icon" />
              Cloud Services
            </div>
          </div>
        </div>
      </div>
      {/* Last Cyber Section */}
      <div className="cyber-background cyber-background-last">
        <div className="tech-background">
          <div className="cyber-glow"></div>
          <div className="cyber-glow-2"></div>
          <div className="circuit-lines"></div>
          <div className="tech-shape tech-shape-1"></div>
          <div className="tech-shape tech-shape-2"></div>
          <div className="tech-shape tech-shape-3"></div>
          <div className="tech-shape tech-shape-4"></div>
          <div className="tech-shape tech-shape-5"></div>
          <div className="data-particle"></div>
          <div className="data-particle"></div>
          <div className="data-particle"></div>
          <div className="data-particle"></div>
          <div className="data-particle"></div>
          <div className="data-particle"></div>
        </div>

        {/* Content inside the background */}
        <div className="cyber-container cyber-container-last">
          <div
            className="cyber-heading"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1>Ready to Start Your Project?</h1>
          </div>
          <div
            className="cyber-paragraph"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            Let's build something amazing together. Get in touch for a free
            consultation.
          </div>
          <div
            className="cyber-contact"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="600"
          >
            <a
              href="mailto:dilshadnaleem13@gmail.com?subject=Web Development Quote&body=Hi, I'm interested in your services.%0A%0AProject Details:%0A- Type: %0A- Timeline: %0A- Budget:"
              className="cyber-button"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>
      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>
              ×
            </button>

            <div className="carousel">
              <button
                className="carousel-button carousel-button-prev"
                onClick={prevImage}
              >
                ‹
              </button>

              <div className="carousel-image-container">
                <img
                  src={projectImages[selectedProject][currentImageIndex]}
                  alt={`${selectedProject} - Image ${currentImageIndex + 1}`}
                  className="carousel-image"
                />
                <div className="image-counter">
                  {currentImageIndex + 1} /{" "}
                  {projectImages[selectedProject].length}
                </div>
              </div>

              <button
                className="carousel-button carousel-button-next"
                onClick={nextImage}
              >
                ›
              </button>
            </div>

            <div className="modal-project-info">
              <h3>{selectedProject}</h3>
              <p>
                Use arrow keys or click the arrows to navigate through images
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Ai_Development;
