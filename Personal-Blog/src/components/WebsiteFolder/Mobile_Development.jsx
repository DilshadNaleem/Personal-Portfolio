import {
  FaAssistiveListeningSystems,
  FaBold,
  FaBolt,
  FaBrain,
  FaChartBar,
  FaChartLine,
  FaCheck,
  FaCode,
  FaCogs,
  FaCss3,
  FaFlask,
  FaHtml5,
  FaImage,
  FaJava,
  FaKey,
  FaLanguage,
  FaLock,
  FaMobile,
  FaNetworkWired,
  FaPalette,
  FaPhp,
  FaPython,
  FaRobot,
  FaRocket,
  FaSearch,
  FaServer,
  FaShieldAlt,
  FaSignal,
  FaTable,
  FaTabletAlt,
  FaMobileAlt,
  FaGlobe,
  FaLightbulb,
  FaTree,
  FaApple,
  FaAndroid,
  FaFire,
  FaCloud,
  FaDatabase,
  FaAws,
  FaGoogle,
  FaReact,
  FaUserCircle,
  FaWordpress,
} from "react-icons/fa";
import "devicon/devicon.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./WebsiteIntro.css";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import WebsiteNavBar from "./WebsiteNavBar";
import "aos/dist/aos.css";
import { FlashlightIcon } from "lucide-react";

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
          <h1>Build High-Performance Cross Platform Mobile Apps</h1>
        </div>

        <div
          className="cyber-paragraph"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Enterprise mobile solutions featuring secure data synchronization, AI
          analytics, and scalable architecture for growing user bases.
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
                <FaMobile className="service-icon-2" />
              </div>
              <h3>Mobile App Development</h3>
              <div className="description">
                Native and cross-platform mobile applications for iOS and
                Android with responsive design, smooth performance, and
                intuitive user experiences.
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
                <FaMobileAlt className="service-icon-2" />
              </div>
              <h3>AI-Enhanced Mobile Apps</h3>
              <div className="description">
                Integrate AI capabilities like image recognition, voice
                assistants, and predictive analytics into mobile applications
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
                <FaTabletAlt className="service-icon-2" />
              </div>
              <h3>Unified Mobile & Web Solutions</h3>
              <div className="description">
                Seamless applications that work across mobile devices and web
                platforms with synchronized data, consistent UI, and shared
                business logic.
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
                <FaGlobe className="service-icon-2" />
              </div>
              <h3>Progressive Web Apps (PWA)</h3>
              <div className="description">
                Fast, reliable web applications that work offline and provide
                app-like experiences on mobile devices without app store
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
                <FaLightbulb className="service-icon-2" />
              </div>
              <h3>Mobile AI & Machine Learning</h3>
              <div className="description">
                On-device ML models for real-time processing, computer vision,
                natural language processing, and personalized recommendations in
                mobile applications.
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
                <FaMobile className="service-icon" />
              </div>
              <h3>React Native</h3>
              <p>
                Cross-platform mobile framework for building native iOS and
                Android apps with React
              </p>
            </div>

            

            <div
              className="service-box-4"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="service-icon-bg">
                <FaJava className="service-icon" />
              </div>
              <h3>Java</h3>
              <p>
                Modern Android development using Java for robust, efficient
                mobile applications
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
                <FaCloud className="service-icon" />
              </div>
              <h3>Firebase ML Kit</h3>
              <p>
                Mobile-focused machine learning SDK for on-device and
                cloud-based AI features
              </p>
            </div>

            <div
              className="service-box-4"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="service-icon-bg">
                <FaMobileAlt className="service-icon" />
              </div>
              <h3>Core ML</h3>
              <p>
                Apple's framework for integrating machine learning models into
                iOS applications
              </p>
            </div>

            <div
              className="service-box-4"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="service-icon-bg">
                <FaRobot className="service-icon" />
              </div>
              <h3>TensorFlow Lite</h3>
              <p>
                Lightweight ML model deployment for mobile and embedded devices
                with TensorFlow
              </p>
            </div>

            <div
              className="service-box-4"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="service-icon-bg">
                <FaBrain className="service-icon" />
              </div>
              <h3>PyTorch Mobile</h3>
              <p>
                End-to-end workflow for deploying PyTorch models to mobile
                platforms
              </p>
            </div>

            {/* Backend & API Technologies */}
            <div
              className="service-box-4"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="service-icon-bg">
                <FaServer className="service-icon" />
              </div>
              <h3>Node.js</h3>
              <p>
                JavaScript runtime for building scalable server-side and
                networking applications
              </p>
            </div>

            <div
              className="service-box-4"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="service-icon-bg">
                <FaDatabase className="service-icon" />
              </div>
              <h3>MongoDB</h3>
              <p>
                NoSQL database for modern applications with flexible document
                storage
              </p>
            </div>

            <div
              className="service-box-4"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="service-icon-bg">
                <FaAws className="service-icon" />
              </div>
              <h3>AWS Amplify</h3>
              <p>
                Cloud platform for building scalable mobile and web applications
                with AI services
              </p>
            </div>

          

            {/* Web & PWA Technologies */}
            <div
              className="service-box-4"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="service-icon-bg">
                <FaGlobe className="service-icon" />
              </div>
              <h3>Progressive Web Apps</h3>
              <p>
                Web applications with native app-like features and offline
                capabilities
              </p>
            </div>

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
                Library for building user interfaces with component-based
                architecture
              </p>
            </div>

            
          </div>
        </div>
      </div>
      <div className="background-webservice" id="sprojects">
        <div className="heading" data-aos="fade-up" data-aos-duration="1000">
          <h1>Mobile Development Success Stories</h1>
        </div>

        <div className="card" data-aos="fade-up" data-aos-delay="300">
        <div className="card-title" data-aos="fade-right" data-aos-delay="400">
          Puppalate Dog Food
        </div>
        <div
          className="card-heading"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          Fullstack Mobile Application using Java
        </div>
        <div className="card-info" data-aos="fade-right" data-aos-delay="600">
          Fullstack Mobile Applicaiton using Java to provide all list items of
          dog foods, including login edit profile, order multiple food items for
          a specific domain
        </div>
        <div className="card-languages" data-aos="fade-up" data-aos-delay="700">
          <span className="language-tag">Java</span>
          <span className="language-tag">Mobile Application</span>
          <span className="language-tag">Billing</span>
          <span className="language-tag">SQLlite</span>
          <span className="language-tag">Mobile Application</span>
        </div>
        <a
          href="https://github.com/DilshadNaleem/Puppalate-Dog-Food"
          className="github"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          View on GitHub <span className="github-arrow">➡️</span>
        </a>
        <button
          onClick={() => handleViewMore("Puppalate Dog Food")}
          className="view-more"
          data-aos="fade-up"
          data-aos-delay="850"
        >
          View More<span className="github-arrow">➡️</span>
        </button>
      </div>

        <div className="card" data-aos="fade-up" data-aos-delay="300">
        <div className="card-title" data-aos="fade-right" data-aos-delay="400">
          Barbell Gym - Freelancing
        </div>
        <div
          className="card-heading"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          Fullstack Mobile Application using Java
        </div>
        <div className="card-info" data-aos="fade-right" data-aos-delay="600">
          Fullstack Mobile Applicaiton using Java to provide to manage fee, add new users, share the created PDF food items for
          a specific domain
        </div>
        <div className="card-languages" data-aos="fade-up" data-aos-delay="700">
          <span className="language-tag">Java</span>
          <span className="language-tag">Mobile Application</span>
          <span className="language-tag">SQLlite</span>
          <span className="language-tag">Mobile Application</span>
        </div>
        <a
          href="https://github.com/DilshadNaleem/Gym-Mobile-App"
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
          <h1>Mobile Development Success Stories</h1>
        </div>
        <p
          className="website-p"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          We build intelligent mobile applications that leverage cutting-edge AI 
  technologies and Java REST APIs to solve complex business challenges. Our 
  full-stack expertise combines native/cross-platform development with machine 
  learning models to create dynamic, data-driven mobile solutions that adapt 
  and learn from user interactions, delivering personalized experiences at scale.
        </p>
        <br /> <br />
        <p
          className="website-p-1"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
           From computer vision applications that analyze visual content through mobile 
  cameras to natural language processing systems that understand voice commands, 
  our AI-integrated mobile solutions transform how businesses engage with users. 
  We specialize in deploying trained models into mobile production environments 
  using Java Spring Boot REST APIs, ensuring seamless integration between 
  intelligent algorithms and responsive mobile interfaces across iOS and Android platforms.
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
              <FaCheck className="tick-icon" />
              Custom React Applications
            </div>

            <div
              className="button"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="600"
            >
              <FaCheck className="tick-icon" />
              AI Integrations
            </div>

            <div
              className="button"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              <FaCheck className="tick-icon" />
              Scalable Backend
            </div>

            <div
              className="button"
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="600"
            >
              <FaCheck className="tick-icon" />
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
