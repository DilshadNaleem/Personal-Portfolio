import { FaCheck, FaCode, FaMobile, FaReact, FaRobot } from "react-icons/fa";
import "./WebsiteIntro.css";
import React, { useEffect , useRef, useState} from 'react';
import AOS from 'aos';
import WebsiteNavBar from './WebsiteNavBar';
import 'aos/dist/aos.css';

function WebsiteIntro() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const scrollPositionRef = useRef(0);

  const projectImages = {
    "Amber Bakery System": [
      "/images/C++/Home.png", 
      "/images/C++/Intro.png",
      "/images/C++/Admin.png",
      "/images/C++/Notepad.png",
      "/images/C++/New_Item.png",
      "/images/C++/test.png"
    ],

    "Colombo Institute of Studies": [
      "/images/CIS/use_case.png",
      "/images/CIS/new department.png",
      "/images/CIS/user_management.png",
      "/images/CIS/login.png",
      "/images/CIS/manage.png",
      "/images/CIS/search.png",
      "/images/CIS/db.png"
    ],
   
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

    "Gallery Cafe" : [
      "/images/web/conn.png",
      "/images/web/cusine.png",
      "/images/web/home.png",
      "/images/web/log.png",
      "/images/web/php.png",
      "/images/web/res.png",
      "/images/web/sitemap.png",
      "/images/web/ta.png",
      "/images/web/test.png",
      "/images/web/wire.png"
    ],

    "TechFix" : [
      "/images/tech/func.png",
      "/images/tech/face.png",
      "/images/tech/code.png",
      "/images/tech/or.png",
      "/images/tech/id.png",
      "/images/tech/order.png",
      "/images/tech/item.png",
      "/images/tech/iname.png"
    ], 

    "Hyper-Zone" : [
      "/images/hyp/test.png",
      "/images/hyp/code.png",
      "/images/hyp/ad.png",
      "/images/hyp/add.png",
      "/images/hyp/cart.png",
      "/images/hyp/case.png",
      "/images/hyp/chat.png",
      "/images/hyp/conf.png",
      "/images/hyp/dash.png",
      "/images/hyp/dis.png",
      "/images/hyp/google.png",
      "/images/hyp/manual.png",
      "/images/hyp/new.png",
      "/images/hyp/otp.png",
      "/images/hyp/pdf.png",
      "/images/hyp/pl.png",
      "/images/hyp/qr.png",
      "/images/hyp/schema.png",
      "/images/hyp/seq.png",
      "/images/hyp/slider.png",
      "/images/hyp/sub.png",
      "/images/hyp/wire.png",
    ]
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100
    });
  }, []);


    const scrollToAbout = () => {
    document.getElementById('choosingus')?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection('choosingus');
  };
  
  const scrollToSkills = () => {
    document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection('technology');
  };

  const scrollToProjects = () => {
    document.getElementById('sprojects')?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection('sprojects');
  };

  const scrollToContact = () => {
    document.getElementById('sstories')?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection('sstories');
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
    })
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
     |<WebsiteNavBar 
          
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
        <div className="cyber-heading" data-aos="fade-up" data-aos-duration="1200">
          <h1>Custom Web Development With Robust and Modern Technologies</h1>
        </div>

        <div className="cyber-paragraph" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          Scalable, SEO-friendly web applications built with cutting-edge tools
          for business and startups
        </div>

        <div className="cyber-contact" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
          <a href="mailto:dilshadnaleem13@gmail.com?subject=Web Development Quote&body=Hi, I'm interested in your services.%0A%0AProject Details:%0A- Type: %0A- Timeline: %0A- Budget:" className="cyber-button">Request Quote</a>
        </div>
      </div>

      <div className="web-app"  id="choosingus">
        <div className="programming-languages is-visible" data-aos="fade-down" data-aos-duration="800">
          Why Choosing us?
        </div>

       
          <div className="services-and-code-section-2">
            <div className="services-boxes-grid-2">
              {/* Service Box 1: React & Next.js Development */}
              <div className="service-box-2" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="800">
                <div className="service-icon-bg-2">
                  <FaReact className="service-icon-2" />
                </div>
                <h3>React & Next.js Development</h3>
                <p>Modern web applications with optimal performance</p>
                <div className="languages-container">
                  <span className="lang">JavaScript</span>
                  <span className="lang">TypeScript</span>
                  <span className="lang">React</span>
                  <span className="lang">Next.js</span>
                  <span className="lang">HTML/CSS</span>
                </div>
                <div className="description">
                  Build high-performance web applications with modern React ecosystem. 
                  We create scalable solutions with optimal user experience and SEO optimization.
                </div>
              </div>

              {/* Service Box 2: Second copy of React & Next.js Development */}
              <div className="service-box-2" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800">
                <div className="service-icon-bg-2">
                  <FaReact className="service-icon-2" />
                </div>
                <h3>React & Next.js Development</h3>
                <p>Modern web applications with optimal performance</p>
                <div className="languages-container">
                  <span className="lang">JavaScript</span>
                  <span className="lang">TypeScript</span>
                  <span className="lang">React</span>
                  <span className="lang">Next.js</span>
                  <span className="lang">HTML/CSS</span>
                </div>
                <div className="description">
                  Build high-performance web applications with modern React ecosystem. 
                  We create scalable solutions with optimal user experience and SEO optimization.
                </div>
              </div>
            </div>
          </div>
        </div>
      

      <div className="intro-contain" id="technology">
        <div className="programming-languages is-visible" data-aos="fade-down" data-aos-duration="800" >
          Cutting Edge Technology Stack
        </div>
        <div className="services-and-code-section-2">
          <div className="service-boxes-grid">
            {/* Service Box 1: React & Next.js Development */}
            <div className="service-box-4" data-aos="flip-left" data-aos-delay="100" data-aos-duration="800">
              <div className="service-icon-bg">
                <FaReact className="service-icon" />
              </div>
              <h3>React.js Development</h3>
              <p>Modern web applications with optimal performance</p>
            </div>

              <div className="service-box-4" data-aos="flip-left" data-aos-delay="100" data-aos-duration="800">
              <div className="service-icon-bg">
                <FaReact className="service-icon" />
              </div>
              <h3>React.js Development</h3>
              <p>Modern web applications with optimal performance</p>
            </div>

              <div className="service-box-4" data-aos="flip-left" data-aos-delay="100" data-aos-duration="800">
              <div className="service-icon-bg">
                <FaReact className="service-icon" />
              </div>
              <h3>React.js Development</h3>
              <p>Modern web applications with optimal performance</p>
            </div>

              <div className="service-box-4" data-aos="flip-left" data-aos-delay="100" data-aos-duration="800">
              <div className="service-icon-bg">
                <FaReact className="service-icon" />
              </div>
              <h3>React.js Development</h3>
              <p>Modern web applications with optimal performance</p>
            </div>

              <div className="service-box-4" data-aos="flip-left" data-aos-delay="100" data-aos-duration="800">
              <div className="service-icon-bg">
                <FaReact className="service-icon" />
              </div>
              <h3>React.js Development</h3>
              <p>Modern web applications with optimal performance</p>
            </div>

           
          </div>
        </div>
      </div>

      <div className="background-webservice" id="sprojects">
        <div className="heading" data-aos="fade-up" data-aos-duration="1000">
          <h1>Web Development Success Stories</h1>
        </div>

        {/* Project 1 */}
        <div className="card" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
          <div className="card-title">
            LivetLens
          </div>
          <div className="card-heading">
            AI Powered User Disease Prediction & Clinical Data Platform
          </div>
          <div className="card-info">
            A full-stack React and Flask web application integrating an XGBoost AI model for liver disease risk prediction. Features secure multi-role authentication, personalized dashboards, bulk prediction uploads, report generation, advanced data visualization, and a learning module tailored to Doctors, Researchers, and Students.
          </div>
          <div className="card-languages">
            <span className="language-tag">React</span>
            <span className="language-tag">Flask</span>
            <span className="language-tag">Python</span>
            <span className="language-tag">XGBoost</span>
            <span className="language-tag">MongoDB</span>
            <span className="language-tag">Data Visualization</span>
            <span className="language-tag">Role-Based Access</span>
            <span className="language-tag">Medical AI</span>
          </div>
          <a href="#" className="github">
            View on GitHub <span className="github-arrow">➡</span>
          </a>
           <button
          onClick={() => handleViewMore("Amber Bakery System")}
          className="view-more"
          data-aos="fade-up"
          data-aos-delay="750"
        >
          View More<span className="github-arrow">➡️</span>
        </button>
        </div>
      </div>

      <div className="background-website" id="sstories">
        <div className="heading" data-aos="fade-up" data-aos-duration="1000">
          <h1>Web Development Success Stories</h1>
        </div>

        <p className="website-p" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
          Custom React applications provide unmatched flexibility and performance for modern business
          seeking digital transformation. Our expertise in React.js performance optimization ensures your web applications
          load instantly while maintaining excellent search engine visibility, with scalable backend architecture built on React.js, your application can handle growing
          user demands without compromising on speed or reliability.
        </p>
        <br /> <br />
        <p className="website-p-1" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
          Enterprise-grade software solutions require careful planning, robust architecture, and future-proof technology choices. Our development approach focuses on creating maintainable, secure, and scalable applications that serve as the foundation for your digital growth strategy. From startup MVPs to complex enterprise systems, we deliver solutions that drive business success.
        </p>
        <br /> <br />

        <div className="button-class">
          <div className="button-card">
            <div className="button" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="600">
              <FaCheck className="tick-icon"/>
              Custom React Applications
            </div>
            
            <div className="button" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="600">
              <FaCheck className="tick-icon"/>
              AI Integrations
            </div>

            <div className="button" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="600">
              <FaCheck className="tick-icon"/>
              Scalable Backend
            </div>
            
            <div className="button" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="600">
              <FaCheck className="tick-icon"/>
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
          <div className="cyber-heading" data-aos="fade-up" data-aos-duration="1000">
            <h1>Ready to Start Your Project?</h1>
          </div>
          <div className="cyber-paragraph" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            Let's build something amazing together. Get in touch for a free consultation.
          </div>
          <div className="cyber-contact" data-aos="fade-up" data-aos-delay="400" data-aos-duration="600">
           <a href="mailto:dilshadnaleem13@gmail.com?subject=Web Development Quote&body=Hi, I'm interested in your services.%0A%0AProject Details:%0A- Type: %0A- Timeline: %0A- Budget:" className="cyber-button">
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

export default WebsiteIntro;
