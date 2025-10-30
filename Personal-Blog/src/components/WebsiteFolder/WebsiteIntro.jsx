import { FaCheck, FaCode, FaMobile, FaReact, FaRobot } from "react-icons/fa";
import "./WebsiteIntro.css";
import React, { useEffect } from 'react';
import AOS from 'aos';
import WebsiteNavBar from './WebsiteNavBar';
import 'aos/dist/aos.css';

function WebsiteIntro() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100
    });
  }, []);

  return (
    <>
     |<WebsiteNavBar/>
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

      <div className="web-app">
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
      

      <div className="intro-contain">
        <div className="programming-languages is-visible" data-aos="fade-down" data-aos-duration="800">
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

      <div className="background-webservice">
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
        </div>
      </div>

      <div className="background-website">
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
    </>
  );
}

export default WebsiteIntro;
