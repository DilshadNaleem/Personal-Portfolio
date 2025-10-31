import {
  FaBold,
  FaBolt,
  FaCheck,
  FaCode,
  FaCogs,
  FaCss3,
  FaFlask,
  FaHtml5,
  FaJava,
  FaLock,
  FaMobile,
  FaPhp,
  FaReact,
  FaRobot,
  FaSearch,
  FaShieldAlt,
  FaWordpress,
} from "react-icons/fa";
import 'devicon/devicon.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./WebsiteIntro.css";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import WebsiteNavBar from "./WebsiteNavBar";
import "aos/dist/aos.css";
import { FlashlightIcon } from "lucide-react";

function WebsiteIntro() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const scrollPositionRef = useRef(0);

  const projectImages = {
    "Amber Bakery System": [
      "/images/C++/Home.png",
      "/images/C++/Intro.png",
      "/images/C++/Admin.png",
      "/images/C++/Notepad.png",
      "/images/C++/New_Item.png",
      "/images/C++/test.png",
    ],

    "Colombo Institute of Studies": [
      "/images/CIS/use_case.png",
      "/images/CIS/new department.png",
      "/images/CIS/user_management.png",
      "/images/CIS/login.png",
      "/images/CIS/manage.png",
      "/images/CIS/search.png",
      "/images/CIS/db.png",
    ],

 

    "Gallery Cafe": [
      "/images/web/conn.png",
      "/images/web/cusine.png",
      "/images/web/home.png",
      "/images/web/log.png",
      "/images/web/php.png",
      "/images/web/res.png",
      "/images/web/sitemap.png",
      "/images/web/ta.png",
      "/images/web/test.png",
      "/images/web/wire.png",
    ],

    "TechFix" : [
      "/images/tech/func.png",
      "/images/tech/face.png",
      "/images/tech/code.png",
      "/images/tech/or.png",
      "/images/tech/id.png",
      "/images/tech/order.png",
      "/images/tech/item.png",
      "/images/tech/iname.png",
    ],

    "Hyper-Zone": [
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
    ],

    "Hepatopath" : [
      "/images/hepo/use.png",
      "/images/hepo/reset.png",
      "/images/hepo/cir.png",
      "/images/hepo/cirr.png",
      "/images/hepo/cnn.png",
      "/images/hepo/dp.png",
      "/images/hepo/dp.png",
      "/images/hepo/graph.png",
      "/images/hepo/hepo.png",
      "/images/hepo/info.png",
      "/images/hepo/login.png",
      "/images/hepo/model.png",
      "/images/hepo/pat.png",
      "/images/hepo/pre.png",
    ], 

    "Alcura" : [
      "/images/alcura/sosdash.png",
      "/images/alcura/ssos.png",
      "/images/alcura/numberep.png",
      "/images/alcura/flogin.png",
      "/images/alcura/enface.png",
      "/images/alcura/mlprogress.png",
      "/images/alcura/navi.png",
      "/images/alcura/newdi.png",
      "/images/alcura/viewd.png",
      "/images/alcura/vima.png",
      "/images/alcura/newdima.png",
      "/images/alcura/newh.png",
      "/images/alcura/pestal.png",
      "/images/alcura/app.png",
      "/images/alcura/appma.png",
      "/images/alcura/auto.png",
      "/images/alcura/book.png",
      "/images/alcura/com.png",
      "/images/alcura/cont.png",
      "/images/alcura/cus.png",
      "/images/alcura/dash.png",
      "/images/alcura/davaila.png",
      "/images/alcura/desdi.png",
      "/images/alcura/dich.png",
      "/images/alcura/dinfo.png",
      "/images/alcura/diui.png",
      "/images/alcura/dpre.png",
      "/images/alcura/dravai.png",
      "/images/alcura/dres.png",
      "/images/alcura/dsimage.png",
      "/images/alcura/dvali.png",
      "/images/alcura/edisease.png",
      "/images/alcura/j.png",
      "/images/alcura/junit.png",
      "/images/alcura/plan.png",
      "/images/alcura/po.png",
      "/images/alcura/post.png",
      "/images/alcura/profit.png",
      "/images/alcura/swot.png",
      "/images/alcura/tat.png",
      "/images/alcura/tct.png",
      "/images/alcura/tdt.png",
      "/images/alcura/view.png",
    ], 

    "Mega City Cab" : [
      "/images/mega/cj.png",
      "/images/mega/val.png",
      "/images/mega/junit.png",
      "/images/mega/conf.png",
      "/images/mega/confir.png",
      "/images/mega/uni.png",
      "/images/mega/dp.png",
      "/images/mega/his.png",
      "/images/mega/otp.png",
      "/images/mega/re.png",
    ],

    "Cineplex" : [
      "/images/cin/home.png",
      "/images/cin/login.png",
      "/images/cin/next.png",
      "/images/cin/code.png",
      "/images/cin/conn.png",
      "/images/cin/park.png",
      "/images/cin/re.png",
      "/images/cin/seat.png",
      "/images/cin/about.png",
      "/images/cin/buy.png",
    ]
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
          <h1>Custom Web Development With Robust and Modern Technologies</h1>
        </div>

        <div
          className="cyber-paragraph"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Scalable, SEO-friendly web applications built with cutting-edge tools
          for business and startups
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
            {/* Service Box 1: React & Next.js Development */}
            <div
              className="service-box-2"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="service-icon-bg-2">
                <FaCode className="service-icon-2" />
              </div>
              <h3>Full-Stack Application Development</h3>

              <div className="description">
                End-to-end web application development with modern frameworks.
                We build responsive, scalable full-stack solutions with
                optimized performance and seamless user experiences.
              </div>
            </div>

            {/* Service Box 2: Second copy of React & Next.js Development */}
            <div
              className="service-box-2"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="service-icon-bg-2">
                <FaBolt className="service-icon-2" />
              </div>
              <h3>Lightning-fast Precised Development</h3>

              <div className="description">
                Rapid development cycles with precision engineering. We deliver
                high-quality applicaitons quickly without compromising on code
                quality or performance standards.
              </div>
            </div>

            {/* Service Box 2: Second copy of React & Next.js Development */}
            <div
              className="service-box-2"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="service-icon-bg-2">
                <FaShieldAlt className="service-icon-2" />
              </div>
              <h3>Robust Solutions</h3>

              <div className="description">
                Enterprise-grade applications built with reliability in mind.
                Our solutions feature robust architecture, error handling, and
                maintainable codebases for long-term success.
              </div>
            </div>

            {/* Service Box 2: Second copy of React & Next.js Development */}
            <div
              className="service-box-2"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="service-icon-bg-2">
                <FaSearch className="service-icon-2" />
              </div>
              <h3>SEO Optimizaiton & Performance Tuning</h3>

              <div className="description">
                Search engine optimized applications with superior performance.
                We implement best practices for SEO, page speed optimization,
                and core web vitals to maximize visibility.
              </div>
            </div>
            {/* Service Box 2: Second copy of React & Next.js Development */}
            <div
              className="service-box-2"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="service-icon-bg-2">
                <FaCogs className="service-icon-2" />
              </div>
              <h3>Custom Enterprise Software Solutions</h3>

              <div className="description">
                Tailored software solutions for enterprise needs. We develop
                custom applications that streamline operations, improve
                efficiency, and solve complex business challenges.
              </div>
            </div>

            <div
              className="service-box-2"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="service-icon-bg-2">
                <FaLock className="service-icon-2" />
              </div>

              <h3>High Security & Scalable Development</h3>

              <div className="description">
                Secure and scalable applications built to grow with your
                business. We implement advanced security measures and scalable
                architecture to handle increasing demands.
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
            {/* Service Box 1: React & Next.js Development */}
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
              <p>Modern UI library for building interactive user interfaces</p>
            </div>

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
              <p>Standard markup langauge for structuring web content</p>
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
              <h3>CSS3</h3>
              <p>Styling langauge for designing responsiveness and visually apperaring interfaces</p>
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
              <h3>JavaScript</h3>
              <p>Programming language for interactive and dynamic web applications</p>
            </div>

            <div
              className="service-box-4"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="service-icon-bg">
                <FaPhp className="service-icon" />
              </div>
              <h3>PHP</h3>
              <p>Server-side scripting language for building dynamic web applications</p>
            </div>

            <div
              className="service-box-4"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="service-icon-bg">
                <FaFlask className="service-icon" />
              </div>
              <h3>Flask</h3>
              <p>Lightweight Python framework for building APIs and backend services</p>
            </div>

            <div
              className="service-box-4"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="service-icon-bg">
                <i className="service-icon devicon-csharp-plain" />
              </div>
              <h3>C#</h3>
              <p>Enterprise-grade applications with .NET framework and robust backend solutions</p>
            </div>

             <div
              className="service-box-4"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="service-icon-bg">
                <FaJava className="service-icon devicon-csharp-plain" />
              </div>
              <h3>Springboot</h3>
              <p>Robust Java Framework for building enterprise-grade backend or fullstack applications</p>
            </div>

          </div>
        </div>
      </div>
      <div className="background-webservice" id="sprojects">
        <div className="heading" data-aos="fade-up" data-aos-duration="1000">
          <h1>Web Development Success Stories</h1>
        </div>

        {/* Project 1 */}
        <div className="card" data-aos="fade-up" data-aos-delay="300">
        <div className="card-title" data-aos="fade-right" data-aos-delay="400">
         Alcura - Empowering health with AI
        </div>
        <div
          className="card-heading"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          Fullstack Website Applicaiton with Deep Machine learning Model
        </div>
        <div className="card-info" data-aos="fade-right" data-aos-delay="600">
          <div className="project-description">
            Fullstack web application built with <strong>Java, REST APIs, React, Python </strong>
            featuring advanced machine learning modles.
          </div> <br />

        <div className="highlights-container">
            <h4 className="highlights-title">🌟 Key Features</h4> 
            <ul className="highlights-list">
              <li>Multi-tier role-based authentication system</li>
              <li>Two-factor authentication & password recovery</li>
              <li>Real-time notifications.</li>
              <li>Advanced Machine learning Model</li>
              <li>Real time SOS using live geolocaiton</li>
              <li>Bio metric Lock (Face Lock)</li>
              <li>Auto Recommendations</li>
              <li>Predict Diseases based on images and description</li>
              <li>Voice recogniiton UI</li>
              <li>Dual Mode (Light and Dark)</li> <br />
            </ul>
          </div>

          <div className="roles-container">
            <div className="role-section">
              <h4 className="role-title">👥 Customer</h4> 
              <ul className="role-features">
                <li>Personal Account Dashboard</li>
                <li>Secure two-factor authentication including Reset Password</li>
                <li>Predict Disesases Based on Image and description</li>
                <li>Predict Medicine based on Image</li>
                <li>Manage Appointments</li>
                <li>Send Real time SOS using Reatime</li>
                <li>Realtime notifications</li>
                <li>Advanced Search and Filters</li> <br />
              </ul>
            </div>

            
            
            <div className="role-section">
              <h4 className="role-title">⚙️ Admin</h4>
              <ul className="role-features">
                <li>Personal Account Dashboard</li>
                <li>Secure two-factor authentication including Reset Password</li>
                <li>Manage Disease Model</li>
                <li>Manage Medicine Model</li>
                <li>Manage Complete users</li>
                <li>Manage Hospitals</li>
                <li>Calculate Profit with analytics and graphical view</li>
                <li>Manage Doctor Prices</li>
                <li>Advanced Search and Filters</li>
                 <li>Realtime notifications</li> <br />
              </ul>
            </div>


             <div className="role-section">
              <h4 className="role-title">⚙️ Doctor</h4>
              <ul className="role-features">
                <li>Personal Account Dashboard</li>
                <li>Secure two-factor authentication including Reset Password</li>
                <li>Manage Appointment</li>
                <li>Manage Availability</li>
                <li>Calculate Profit with analytics and graphical view</li>
                <li>Manage Doctor Prices</li>
                <li>Advanced Search and Filters</li>
                 <li>Realtime notifications</li>
              </ul>
            </div>


          </div>
        </div>
        <div className="card-languages" data-aos="fade-up" data-aos-delay="700">
          <span className="language-tag">Web Applicaiton</span>
          <span className="language-tag">Java Springboot</span>
          <span className="language-tag">Python</span>
          <span className="language-tag">Flask</span>
          <span className="language-tag">Random Forest</span>
          <span className="language-tag">XGBoost</span>
          <span className="language-tag">Hyper parameter tuning</span>
          <span className="language-tag">Neural Network</span>
          <span className="language-tag">Convlutional Neural Network</span>
          <span className="language-tag">Image Pigmentation</span>
          <span className="language-tag">Postman</span>
          <span className="language-tag">Thymealf</span>
          <span className="language-tag">RESTful APIs</span>
          <span className="language-tag">HTML</span>
          <span className="language-tag">CSS</span>
          <span className="language-tag">Javascript</span>
          <span className="language-tag">MySQL</span>
          <span className="language-tag">Junit</span>
          <span className="language-tag">Mocktio</span>
          <span className="language-tag">Role Based Access</span>
          <span className="language-tag">Kaggle</span>
          <span className="language-tag">e-commerce</span>
        </div>
        <a
          href="https://github.com/DilshadNaleem/Alcura-AI"
          className="github"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          View on GitHub <span className="github-arrow">➡️</span>
        </a>

            <a
          href="https://github.com/DilshadNaleem/Alcura-Flask"
          className="github"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          View on GitHub (Model)<span className="github-arrow">➡️</span>
        </a>

        <button
          onClick={() => handleViewMore("Alcura")}
          className="view-more"
          data-aos="fade-up"
          data-aos-delay="850"
        >
          View More<span className="github-arrow">➡️</span>
        </button>
         <br />

        <a
        href="/pdf/Data Set Approval BIS 6035.pdf"
        download={"Data Set Approval BIs 6035.pdf"}
          className="view-more"
          data-aos="fade-up"
          data-aos-delay="850"
        >
          Download Report<span className="github-arrow">➡️</span>
        </a>
      </div>


      
      <div className="card" data-aos="fade-up" data-aos-delay="300">
        <div className="card-title" data-aos="fade-right" data-aos-delay="400">
         HepatoPath - Cirrhosis Prediction
        </div>
        <div
          className="card-heading"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          Fullstack Website Applicaiton with Machine learning Model
        </div>
        <div className="card-info" data-aos="fade-right" data-aos-delay="600">
          <div className="project-description">
            Fullstack web application built with <strong>Java, RESTful APIs, React, Python </strong>
            featuring advanced machine learning model to predict Cirrhosis.
          </div> <br />

        <div className="highlights-container">
            <h4 className="highlights-title">🌟 Key Features</h4>
            <ul className="highlights-list">
              <li>Multi-tier role-based authentication system</li>
              <li>Two-factor authentication & password recovery</li>
              <li>Real-time notifications.</li>
              <li>Advanced Machine learning Model</li>
              <li>Advanced Validaitons</li> <br />
            
            </ul>
          </div>

          <div className="roles-container">
            <div className="role-section">
              <h4 className="role-title">👥 Customer</h4>
              <ul className="role-features">
                <li>Personal Account Dashboard</li>
                <li>Secure two-factor authentication including Reset Password</li>
                <li>Predict Cirrhosis</li>
                <li>Fine Management with dues</li>
                <li>Realtime notifications</li>
                 <li>Advanced Search and Filters</li>
              </ul>
            </div> <br />

            
            
            <div className="role-section">
              <h4 className="role-title">⚙️ Admin</h4>
              <ul className="role-features">
                <li>Personal Account Dashboard</li>
                <li>Secure two-factor authentication including Reset Password</li>
                <li>Manage Cirrhosis Model</li>
                <li>Manage Vehicles</li>
                <li>Complete User Management</li>
                <li>Advanced Search and Filters</li>
                 <li>Realtime notifications</li>
              </ul>
            </div>



          </div>
        </div>
        <div className="card-languages" data-aos="fade-up" data-aos-delay="700">
          <span className="language-tag">Web Applicaiton</span>
          <span className="language-tag">Java Springboot</span>
          <span className="language-tag">Python</span>
          <span className="language-tag">Flask</span>
          <span className="language-tag">Random Forest</span>
          <span className="language-tag">Hyper parameter tuning</span>
          <span className="language-tag">Neural Network</span>
          <span className="language-tag">Postman</span>
          <span className="language-tag">Thymealf</span>
          <span className="language-tag">RESTful APIs</span>
          <span className="language-tag">HTML</span>
          <span className="language-tag">CSS</span>
          <span className="language-tag">Javascript</span>
          <span className="language-tag">PostgreSQL</span>
          <span className="language-tag">Junit</span>
          <span className="language-tag">Role Based Access</span>
          <span className="language-tag">Kaggle</span>
          <span className="language-tag">e-commerce</span>
        </div>
        <a
          href="https://github.com/DilshadNaleem/HepatoPath/tree/main/src"
          className="github"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          View on GitHub <span className="github-arrow">➡️</span>
        </a>
        <button
          onClick={() => handleViewMore("Hepatopath")}
          className="view-more"
          data-aos="fade-up"
          data-aos-delay="850"
        >
          View More<span className="github-arrow">➡️</span>
        </button>
      </div>



         <div className="card" data-aos="fade-up" data-aos-delay="300">
        <div className="card-title" data-aos="fade-right" data-aos-delay="400">
          Mega City Cab Rental
        </div>
        <div
          className="card-heading"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          Fullstack Website Applicaiton using Java and REST APIs
        </div>
        <div className="card-info" data-aos="fade-right" data-aos-delay="600">
          <div className="project-description">
            Fullstack web application built with <strong>Java, REST APIs, HTML, CSS, Javascript </strong>
            featuring multi-role authentication and comprehensive management
            systems.
          </div> <br />

        <div className="highlights-container">
            <h4 className="highlights-title">🌟 Key Features</h4>
            <ul className="highlights-list">
              <li>Multi-tier role-based authentication system</li>
              <li>Two-factor authentication & password recovery</li>
              <li>Real-time notifications.</li>
              <li>Advanced rental management including fine based on dates</li>
              <li>Advanced Validaitons</li>
            
            </ul>
          </div> <br />

          <div className="roles-container">
            <div className="role-section">
              <h4 className="role-title">👥 Customer</h4>
              <ul className="role-features">
                <li>Personal Account Dashboard</li>
                <li>Secure two-factor authentication including Reset Password</li>
                <li>Booking vehicle</li>
                <li>Fine Management with dues</li>
                <li>Realtime notifications</li>
              </ul>
            </div> <br />

             <div className="role-section">
              <h4 className="role-title">🚗 Driver</h4>
              <ul className="role-features">
                <li>Personal Account Dashboard</li>
                <li>Secure two-factor authentication including Reset Password</li>
                <li>Add new Vehicles</li>
                <li>Profit & Loss Calculations</li>
              </ul>
            </div> <br />
            
            <div className="role-section">
              <h4 className="role-title">⚙️ Admin</h4>
              <ul className="role-features">
                <li>Personal Account Dashboard</li>
                <li>Secure two-factor authentication including Reset Password</li>
                <li>Manage Vehicle Types</li>
                <li>Manage Vehicles</li>
                <li>Complete User Management</li>
              </ul>
            </div>



          </div>
        </div>
        <div className="card-languages" data-aos="fade-up" data-aos-delay="700">
          <span className="language-tag">Web Applicaiton</span>
          <span className="language-tag">Java</span>
          <span className="language-tag">JSP</span>
          <span className="language-tag">REST</span>
          <span className="language-tag">HTML</span>
          <span className="language-tag">CSS</span>
          <span className="language-tag">MySQL</span>
          <span className="language-tag">Junit</span>
          <span className="language-tag">Role Based Access</span>
          <span className="language-tag">e-commerce</span>
        </div>
        <a
          href="https://github.com/DilshadNaleem/Mega-City-Cab"
          className="github"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          View on GitHub <span className="github-arrow">➡️</span>
        </a>
        <button
          onClick={() => handleViewMore("Mega City Cab")}
          className="view-more"
          data-aos="fade-up"
          data-aos-delay="850"
        >
          View More<span className="github-arrow">➡️</span>
        </button>
      </div>


        <div className="card" data-aos="fade-up" data-aos-delay="300">
        <div className="card-title" data-aos="fade-right" data-aos-delay="400">
          Hyper Zone
        </div>
        <div
          className="card-heading"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          Full-Stack E-Commerce Platform with Multi-Role Access
        </div>
        <div className="card-info" data-aos="fade-right" data-aos-delay="600">
          <div className="project-description">
            Comprehensive e-commerce solution built with{" "}
            <strong>PHP, HTML, CSS, JavaScript, and MySQL </strong>, featuring
            advanced user management, real-time communication, and automated
            business intelligence.
          </div> <br />

          <div className="highlights-container">
            <h4 className="highlights-title">🌟 Key Features</h4>
            <ul className="highlights-list">
              <li>Multi-tier role-based authentication system</li>
              <li>Two-factor authentication & password recovery</li>
              <li>Real-time notifications & live chat</li>
              <li>Video conferencing capabilities</li>
              <li>Advanced inventory monitoring with low-stock alerts</li>
              <li>Order management with refund processing</li>
              <li>Wishlist and cart functionality</li>
              <li>Location-based services</li>
            </ul>
          </div> <br />

          <div className="roles-container">
            <div className="role-section">
              <h4 className="role-title">👥 Guest Visitor</h4>
              <ul className="role-features">
                <li>Browse products and view details</li>
                <li>Access public content and catalogs</li>
              </ul>
            </div> <br />

            <div className="role-section">
              <h4 className="role-title">🔐 Registered Customer</h4>
              <ul className="role-features">
                <li>Personal account dashboard</li>
                <li>Secure two-factor authentication</li>
                <li>Multi-item shopping cart & checkout</li>
                <li>Real-time order tracking</li>
                <li>Wishlist management</li>
                <li>Order history with cancellation options</li>
                <li>Refund requests and processing</li>
                <li>Product reviews and feedback</li>
              </ul>
            </div> <br />

            <div className="role-section">
              <h4 className="role-title">💼 Support Staff</h4>
              <ul className="role-features">
                <li>Internal communication dashboard</li>
                <li>Secure system access</li>
                <li>Real-time alerts and updates</li>
                <li>Direct messaging with administrators</li>
                <li>Video conference capabilities</li>
              </ul>
            </div> <br />

            <div className="role-section">
              <h4 className="role-title">🤝 Business Agent</h4>
              <ul className="role-features">
                <li>Bulk order management</li>
                <li>Pricing and inventory control</li>
                <li>Sales analytics and reporting</li>
                <li>Customer relationship management</li>
                <li>Real-time stock monitoring</li>
              </ul>
            </div> <br />

            <div className="role-section">
              <h4 className="role-title">⚙️ System Administrator</h4>
              <ul className="role-features">
                <li>Complete user management</li>
                <li>Product catalog administration</li>
                <li>Order and refund oversight</li>
                <li>Discount and promotion management</li>
                <li>Advanced analytics dashboard</li>
                <li>Real-time system monitoring</li>
                <li>Staff coordination and communication</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-languages" data-aos="fade-up" data-aos-delay="700">
          <span className="language-tag">Web Application</span>
          <span className="language-tag">PHP</span>
          <span className="language-tag">HTML</span>
          <span className="language-tag">CSS</span>
          <span className="language-tag">JavaScript</span>
          <span className="language-tag">Agile</span>
          <span className="language-tag">MySQL</span>
          <span className="language-tag">Role-Based Access</span>
          <span className="language-tag">2F verificaiton</span>
          <span className="language-tag">Recover Password</span>
          <span className="language-tag">Chat & Video Access</span>
          <span className="language-tag">Realtime notification</span>
          <span className="language-tag">E-Commerce</span>
        </div>
        <a
          href="https://github.com/DilshadNaleem/Hyper-Zone"
          className="github"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          View on GitHub <span className="github-arrow">➡️</span>
        </a>
        <button
          onClick={() => handleViewMore("Hyper-Zone")}
          className="view-more"
          data-aos="fade-up"
          data-aos-delay="850"
        >
          View Details<span className="github-arrow">➡️</span>
        </button>
      </div>

      <div className="card" data-aos="fade-up" data-aos-delay="300">
        <div className="card-title" data-aos="fade-right" data-aos-delay="400">
          Gallery Cafe
        </div>
        <div
          className="card-heading"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          Fullstack Website Applicaiton using PHP
        </div>
        <div className="card-info" data-aos="fade-right" data-aos-delay="600">
          <div className="project-description">
            Fullstack web application built with{" "}
            <strong>PHP, HTML, CSS, JavaScript</strong>
            featuring multi-role authentication and comprehensive management
            systems.
          </div> <br />

          <div className="roles-container">
            <div className="role-section">
              <h4 className="role-title">👥 Unregistered Customer</h4>
              <ul className="role-features">
                <li>Browse site content and view details</li>
                <li>Access public information</li>
              </ul>
            </div> <br />

            <div className="role-section">
              <h4 className="role-title">🔐 Registered Customer</h4>
              <ul className="role-features">
                <li>User authentication & dashboard</li>
                <li>Multi-cuisine ordering system</li>
                <li>Table reservations & pre-orders</li>
                <li>Review & promotion management</li>
                <li>Advanced search & filters</li>
              </ul>
            </div> <br />

            <div className="role-section">
              <h4 className="role-title">👨‍💼 Staff</h4>
              <ul className="role-features">
                <li>Menu management system</li>
                <li>Reservation handling & updates</li>
                <li>Pre-order management</li>
                <li>Customer parking oversight</li>
                <li>Search & filter capabilities</li>
              </ul>
            </div> <br />

            <div className="role-section">
              <h4 className="role-title">⚙️ Admin</h4>
              <ul className="role-features">
                <li>Complete system administration</li>
                <li>Item & inventory management</li>
                <li>Staff & customer management</li>
                <li>Reservation & parking control</li>
                <li>Advanced analytics & reporting</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-languages" data-aos="fade-up" data-aos-delay="700">
          <span className="language-tag">Web Applicaiton</span>
          <span className="language-tag">PHP</span>
          <span className="language-tag">HTML</span>
          <span className="language-tag">CSS</span>
          <span className="language-tag">Javascript</span>
          <span className="language-tag">MySQL</span>
          <span className="language-tag">Role Based Access</span>
        </div>
        <a
          href="https://github.com/DilshadNaleem/Gallery-Cafe-Restaurant"
          className="github"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          View on GitHub <span className="github-arrow">➡️</span>
        </a>
        <button
          onClick={() => handleViewMore("Gallery Cafe")}
          className="view-more"
          data-aos="fade-up"
          data-aos-delay="850"
        >
          View More<span className="github-arrow">➡️</span>
        </button>
      </div>



      <div className="card" data-aos="fade-up" data-aos-delay="300">
        <div className="card-title" data-aos="fade-right" data-aos-delay="400">
          TechFix
        </div>
        <div
          className="card-heading"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          Fullstack Website Applicaiton using C# .NET
        </div>
        <div className="card-info" data-aos="fade-right" data-aos-delay="600">
          <div className="project-description">
            Fullstack web application built with <strong>SOAP, ASPX, C#</strong>
            featuring multi-role authentication and comprehensive management
            systems. 
          </div> <br />

          <div className="roles-container">
            <div className="role-section">
              <h4 className="role-title">👥 Customer</h4>
              <ul className="role-features">
                <li>Order Multiple Item</li>
                <li>View Order History</li>
                <li>Search and Filters</li>
              </ul>
            </div> <br />

            <div className="role-section">
              <h4 className="role-title">⚙️ Admin</h4>
              <ul className="role-features">
                <li>Manage Item</li>
                <li>Manage Category</li>
                <li>Order Items to Supplier</li>
                <li>Manage Customer Orders</li>
                <li>Search and Filters</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-languages" data-aos="fade-up" data-aos-delay="700">
          <span className="language-tag">Web Applicaiton</span>
          <span className="language-tag">C#</span>
          <span className="language-tag">. NET</span>
          <span className="language-tag">SOAP</span>
          <span className="language-tag">HTML</span>
          <span className="language-tag">CSS</span>
          <span className="language-tag">DBMS</span>
          <span className="language-tag">Role Based Access</span>
        </div>
        <a
          href="https://github.com/DilshadNaleem/TechFix"
          className="github"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          View on GitHub <span className="github-arrow">➡️</span>
        </a>
        <button
          onClick={() => handleViewMore("TechFix")}
          className="view-more"
          data-aos="fade-up"
          data-aos-delay="850"
        >
          View More<span className="github-arrow">➡️</span>
        </button>
      </div>


      <div className="card" data-aos="fade-up" data-aos-delay="250">
        <div className="card-title" data-aos="fade-right" data-aos-delay="350">
          Colombo Institute of Studies
        </div>
        <div
          className="card-heading"
          data-aos="fade-right"
          data-aos-delay="450"
        >
          Fullstack Development using Java, OOP, JavaFrame
        </div>
        <div className="card-info" data-aos="fade-right" data-aos-delay="550">
          Fullstack Project develop using OOP Concepts, Java and JFrame.
          featuring modular functionalities for records management for a use
          friendly interface based on Roles.
        </div>
        <div className="card-languages" data-aos="fade-up" data-aos-delay="650">
          <span className="language-tag">Java</span>
          <span className="language-tag">JFrame</span>
          <span className="language-tag">OOP</span>
          <span className="language-tag">Fullstack</span>
        </div>
        <a
          href="https://github.com/DilshadNaleem/Colombo-Institute-of-Studies"
          className="github"
          data-aos="fade-up"
          data-aos-delay="750"
        >
          View on GitHub <span className="github-arrow">➡️</span>
        </a>
        <button
          onClick={() => handleViewMore("Colombo Institute of Studies")}
          className="view-more"
          data-aos="fade-up"
          data-aos-delay="750"
        >
          View More<span className="github-arrow">➡️</span>
        </button>
      </div>


        <div className="card" data-aos="fade-up" data-aos-delay="300">
        <div className="card-title" data-aos="fade-right" data-aos-delay="400">
          Cineplex - Movie Theatre
        </div>
        <div
          className="card-heading"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          Fullstack Website Applicaiton using PHP
        </div>
        <div className="card-info" data-aos="fade-right" data-aos-delay="600">
          <div className="project-description">
            Fullstack web application built with{" "}
            <strong>PHP, HTML, CSS, JavaScript</strong>
            featuring multi-role authentication and comprehensive management
            systems.
          </div> <br />

          <div className="roles-container">
            <div className="role-section">
              <h4 className="role-title">👥 Unregistered Customer</h4>
              <ul className="role-features">
                <li>Browse site content and view details</li>
                <li>Access public information</li>
              </ul>
            </div> <br />

            <div className="role-section">
              <h4 className="role-title">🔐 Registered Customer</h4>
              <ul className="role-features">
                <li>User authentication & dashboard</li>
                <li>Ticket ordering system</li>
                <li>Parking reservations & pre-orders</li>
                <li>Review & promotion management</li>
                <li>Advanced search & filters</li>
              </ul>
            </div> <br />

            <div className="role-section">
              <h4 className="role-title">👨‍💼 Staff</h4>
              <ul className="role-features">
                <li>Menu management system</li>
                <li>View overall pages</li>
                <li>Pre-order management</li>
                <li>Customer parking oversight</li>
                <li>Search & filter capabilities</li>
              </ul>
            </div> <br />

            <div className="role-section">
              <h4 className="role-title">⚙️ Admin</h4>
              <ul className="role-features">
                <li>Complete system administration</li>
                <li>Item & inventory management</li>
                <li>Staff & customer management</li>
                <li>Reservation & parking control</li>
                <li>Manage films</li>
                <li>Advanced analytics & reporting</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-languages" data-aos="fade-up" data-aos-delay="700">
          <span className="language-tag">Web Applicaiton</span>
          <span className="language-tag">PHP</span>
          <span className="language-tag">HTML</span>
          <span className="language-tag">CSS</span>
          <span className="language-tag">Javascript</span>
          <span className="language-tag">MySQL</span>
          <span className="language-tag">Role Based Access</span>
        </div>
        <a
          href="https://github.com/DilshadNaleem/Cinplex"
          className="github"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          View on GitHub <span className="github-arrow">➡️</span>
        </a>
        <button
          onClick={() => handleViewMore("Cineplex")}
          className="view-more"
          data-aos="fade-up"
          data-aos-delay="850"
        >
          View More<span className="github-arrow">➡️</span>
        </button>
      </div>


      </div>
      <div className="background-website" id="sstories">
        <div className="heading" data-aos="fade-up" data-aos-duration="1000">
          <h1>Web Development Success Stories</h1>
        </div>
        <p
          className="website-p"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          Custom React applications provide unmatched flexibility and
          performance for modern business seeking digital transformation. Our
          expertise in React.js performance optimization ensures your web
          applications load instantly while maintaining excellent search engine
          visibility, with scalable backend architecture built on React.js, your
          application can handle growing user demands without compromising on
          speed or reliability.
        </p>
        <br /> <br />
        <p
          className="website-p-1"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          Enterprise-grade software solutions require careful planning, robust
          architecture, and future-proof technology choices. Our development
          approach focuses on creating maintainable, secure, and scalable
          applications that serve as the foundation for your digital growth
          strategy. From startup MVPs to complex enterprise systems, we deliver
          solutions that drive business success.
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

export default WebsiteIntro;
