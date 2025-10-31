import { useState, useEffect } from "react"; 
import "./DevelopmentServices.css";
import { Link } from "react-router-dom";
import { FaCloud, FaCodepen, FaLaptop, FaLaptopCode, FaMobileAlt, FaReact, FaRobot } from "react-icons/fa";

function DevelopmentServices() {
  const [showPopup, setShowPopup] = useState(false);

  const handleContactClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Note: window.scrollY is a standard check for scroll position
      const shouldBeScrolled = window.scrollY > 50;
      // Only update state if it actually changes to prevent unnecessary re-renders
      if (shouldBeScrolled !== isScrolled) {
        setIsScrolled(shouldBeScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <>
      <div className="grey-background">
        <div
          className={`development-services ${
            isScrolled ? "underline-active" : ""
          }`}
        >
          Professional Development Services
        </div>
      </div>

      <div className="background">
        

        <div className="intro-container-1">
          <div className="services-and-code-section-">
            <div className="service-boxes-grid-1">
              {/* Service Box 1: React & Next.js Development */}
              <div className="service-box-1">
                <div className="service-icon-bg-1">
                  <FaLaptopCode className="service-icon-1" />
                </div>
                <h3>Web Development</h3>
                <p>Custom React applications with modern architecture, optimized performance, and scalable backends</p>
                <div className="languages-container">
                  <span className="lang">JavaScript</span>
                  <span className="lang">React Js</span>
                  <span className="lang">HTML/CSS</span>
                  <span className="lang">REST APIs / Fast API</span>
                  <span className="lang">Spring</span>
                  <span className="lang">Spring Boot</span>
                  <span className="lang">Flask</span>
                  <span className="lang">PHP</span>
                  <span className="lang">C#</span>
                </div>
                <div className="description">
                   
                    
                    
                </div>
                <Link to="/services/WebApplication" className="view-more-link">View More</Link>
              </div>

              <div className="service-box-1">
                <div className="service-icon-bg-1">
                  <FaRobot className="service-icon-1" />
                </div>
                <h3>AI Development</h3>
                <p>Custom React applications with modern architecture, optimized performance, and scalable backends</p>
                <div className="languages-container">
                  <span className="lang">CI / CD</span>
                  <span className="lang">Random Forest</span>
                  <span className="lang">Hyper parameter tuning</span>
                  <span className="lang">Random Forest</span>
                  <span className="lang">Tensorflow</span>
                  <span className="lang">CNN</span>
                  <span className="lang">ANN</span>
                  <span className="lang">Sckit learn</span>
                  <span className="lang">Flask</span>
                </div>
                <div className="description">
                    
                    
                    
                </div>
                <Link to="/services/AI_Development" className="view-more-link">View More</Link>
              </div>

               <div className="service-box-1">
                <div className="service-icon-bg-1">
                  <FaMobileAlt className="service-icon-1" />
                </div>
                <h3>Mobile Development</h3>
                <p>Custom React applications with modern architecture, optimized performance, and scalable backends</p>
                <div className="languages-container">
                  <span className="lang">Java</span>
                </div>
                <div className="description">
                   
                    
                    
                </div>
                <Link to="/services/Mobile_Development" className="view-more-link">View More</Link>
              </div>
             
               <div className="service-box-1">
                <div className="service-icon-bg-1">
                  <FaCodepen className="service-icon-1" />
                </div>
                <h3>Frontend Websites / Landing Pages Development</h3>
                <p>Custom React applications with modern architecture, optimized performance, and scalable backends</p>
                <div className="languages-container">
                  <span className="lang">JavaScript</span>
                  <span className="lang">React Js</span>
                  <span className="lang">HTML/CSS</span>
                  <span className="lang">Spring web</span>
                </div>
                <div className="description">
                 
                    
                </div>
                <Link to="/services/FrontEnd_Development" className="view-more-link">View More</Link>
              </div>
              

                <div className="service-box-1">
                <div className="service-icon-bg-1">
                  <FaCloud className="service-icon-1" />
                </div>
                <h3>Cloud Services / Database Management</h3>
                <p>Custom React applications with modern architecture, optimized performance, and scalable backends</p>
                <div className="languages-container">
                  <span className="lang">AWS EC2</span>
                  <span className="lang">AWS Lambda</span>
                </div>
                <div className="description">
                   
                    
                </div>
                <Link to="/services/Cloud&Databases_Management" className="view-more-link">View More</Link>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="transform">
        <div className="floating-shape-1"></div>
        <div className="floating-shape-2"></div>
        <div className="floating-shape-3"></div>
        <div className="floating-shape-4"></div>
        <div className="floating-shape-5"></div>

        <div className="transform-heading">
          Ready to Transform Your Business with Robust Solutions?
        </div>

        <div className="paragraph">
          Let's discuss your project and create innovation robust solutions that
          drive growth, enhance user experience, and position your business at
          the real time technology
        </div>

        <div className="contact">
          <button className="contact-button" onClick={handleContactClick}>
            Start New Project
          </button>
        </div>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <button className="close-button" onClick={handleClosePopup}>
                ✕
              </button>
              <h2>Contact Me</h2>

              <div className="contact-options">
                <div className="contact-option">
                  <p>Send me an email to Discuss your Project: </p>
                  <a
                    href="mailto:dilshadnaleem13@gmail.com"
                    className="email-link"
                  >
                    📧 Email
                  </a>
                </div>

                <div className="contact-option">
                  <a href="tel:+94725958832">📞 Call</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DevelopmentServices;
