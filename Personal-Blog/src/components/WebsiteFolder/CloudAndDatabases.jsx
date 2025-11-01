
import "devicon/devicon.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./WebsiteIntro.css";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import WebsiteNavBar from "./WebsiteNavBar";
import "aos/dist/aos.css";
import { FlashlightIcon } from "lucide-react";
import { FaAmazon, FaAws, FaBolt, FaBootstrap, FaCss3, FaDatabase, FaGlobe, FaHtml5, FaJava, FaMobile, FaReact, FaRobot, FaServer, FaShieldAlt, FaUikit } from "react-icons/fa";


function CloudAndDatabases() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const scrollPositionRef = useRef(0);



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
          <h1>Modern Fullstack Develoment with AWS Cloud Services</h1>
        </div>

        <div
          className="cyber-paragraph"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
         Scalable, Cloud Services fullstack webapplications built with cutting-edge Technologies for business and startups.
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
                <FaServer className="service-icon-2" />
              </div>
              <h3>AWS EC2 Instance Management </h3>
              <div className="description">
                Scalable, secure, and reliable cloud computing resources.Manage and optimize Elastic Compute Cloud (EC2) instances for any workload.
        We ensure high availability, cost efficiency, and robust security for your infrastructure.
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
                <FaBolt className="service-icon-2" />
              </div>
              <h3>AWS Lambda Serverless Functions</h3>
              <div className="description">
               Run code without provisioning or managing servers. We handle the setup and maintenance of your Lambda functions, optimizing performance, memory, and execution time.
    Achieve auto-scaling, **pay-per-use efficiency**, and true serverless architecture for event-driven applications.
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
              <h3>AWS S3 Object Storage Solutions</h3>
              <div className="description">
               Highly durable, scalable object storage for data archiving, backup, and big data analytics. We manage your S3 buckets, implementing best practices for data lifecycle, access control, and security**.
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
          Cutting Edge AWS Technology Stack
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
                <FaAws className="service-icon" />
              </div>
              <h3>AWS Amplify</h3>
              <p>
               Full-sterverless deployment for React/Next.js applications with CI/CD.
              </p>
            </div>

          
            <div
              className="service-box-4"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="service-icon-bg">
                <FaServer className="service-icon" />
              </div>
              <h3>AWS Lambda</h3>
              <p>
               Serverless functions for scalable backend API and business logic.
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
                <FaDatabase className="service-icon" />
              </div>
              <h3>Amazon DynmaoDB</h3>
              <p>
                 Fully managed NoSQL database for high-performance applications.
              </p>
            </div>

            <div
              className="service-box-4"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="service-icon-bg">
                <FaBolt className="service-icon " />
              </div>
              <h3>Amazon S3</h3>
              <p>
                Scalable object storage for media files and static website hosting.
              </p>
            </div>

            <div
              className="service-box-4"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="service-icon-bg">
                <FaGlobe className="service-icon" />
              </div>
              <h3>Amazon API Gateway</h3>
              <p>
                RESTful API management and integration with backend services.
              </p>
            </div>

            
            
          </div>
        </div>
      </div>
      
      {/* <div className="background-webservice" id="sprojects">
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
       
      </div> */}

        
      {/* </div> */}

      <div className="background-website" id="sstories">
        <div className="heading" data-aos="fade-up" data-aos-duration="1000">
          <h1>Why AWS Services for Backend?</h1>
        </div>
        <p
          className="website-p"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
         We deliver end-to-end custom fullstack solutions, powered by the robust and scalable infrastructure of Amazon Web Services (AWS). Our approach seamlessly integrates dynamic, user-centric frontends with powerful, resilient backends—all hosted and optimized within the AWS cloud.
        </p>
        <br /> <br />
        <p
          className="website-p-1"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
           From designing intuitive user interfaces with modern frameworks like React or Angular to building secure and efficient server-side applications with Node.js, Python, or Java, we own the entire development lifecycle. By leveraging AWS services—such as EC2 for compute power, S3 for storage, RDS for managed databases, and Lambda for serverless functions—we ensure your application is not only high-performing and highly available but also cost-effective and secure from the ground up.
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

export default CloudAndDatabases;
