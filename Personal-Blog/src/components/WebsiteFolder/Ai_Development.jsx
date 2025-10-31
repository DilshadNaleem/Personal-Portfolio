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
  FaReact,
  FaRobot,
  FaRocket,
  FaSearch,
  FaServer,
  FaShieldAlt,
  FaSignal,
  FaTable,
  FaTree,
  FaUserCircle,
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

function Ai_Development() {
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
          <h1>Advanced AI & Machine Learning Solutions</h1>
        </div>

        <div
          className="cyber-paragraph"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Intelligent applications powered by cutting-edge AI, machine learning, and natural language processing.
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
                <FaSignal className="service-icon-2" />
              </div>
              <h3>Predictive Analytics & Models</h3>

              <div className="description">
                Machine learning models that forecasr trends, identify patterns, and make data-driven predicitons for business decisions.
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
                <FaImage className="service-icon-2" />
              </div>
              <h3>Convolutional Neural Network</h3>

              <div className="description">
               Deep learning architecture designed for image processing, featuring convolutional layers 
               that automatically detect features and patterns in visual data.
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
                <FaRobot className="service-icon-2" />
              </div>
              <h3>Robust Solutions</h3>

              <div className="description">
               Integrate AI to an Existing projects.
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
                <FaLanguage className="service-icon-2" />
              </div>
              <h3>Natural Language Processing</h3>

              <div className="description">
                Advanced text analysis, sentiment detection, and languages understanding for processing unstructured data.
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
                <FaAssistiveListeningSystems className="service-icon-2" />
              </div>
              <h3>Virtual Assistants & AI Chatbots</h3>

              <div className="description">
               Intelligent conversational agents that understand contect and provide human-like interactions, for customer service and support.
              </div>
            </div>

            <div
              className="service-box-2"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="service-icon-bg-2">
                <FaKey className="service-icon-2" />
              </div>

              <h3>AI Integration with API Keys</h3>

              <div className="description">
              Securely connect with AI platforms like OpenAI, Gemini, and more using API keys to power advanced features in websites.
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
            
            <div className="service-box-4" data-aos="flip-left" data-aos-delay="100" data-aos-duration="800">
  <div className="service-icon-bg">
    <FaCheck className="service-icon" />
  </div>
  <h3>Scikit-learn</h3>
  <p>Comprehensive machine learning library for Python with intuitive tools for data analysis and modeling</p>
</div>

<div className="service-box-4" data-aos="flip-left" data-aos-delay="100" data-aos-duration="800">
  <div className="service-icon-bg">
    <FaRobot className="service-icon" />
  </div>
  <h3>Hugging Face</h3>
  <p>State-of-the-art NLP platform with pre-trained transformer models for text generation and understanding</p>
</div>

<div className="service-box-4" data-aos="flip-left" data-aos-delay="100" data-aos-duration="800">
  <div className="service-icon-bg">
    <FaNetworkWired className="service-icon" />
  </div>
  <h3>Neural Networks</h3>
  <p>Brain-inspired computational models for complex pattern recognition and deep learning applications</p>
</div>

<div className="service-box-4" data-aos="flip-left" data-aos-delay="100" data-aos-duration="800">
  <div className="service-icon-bg">
    <FaImage className="service-icon" />
  </div>
  <h3>Convolutional Neural Network</h3>
  <p>Specialized deep learning architecture for image recognition and computer vision tasks</p>
</div>

<div className="service-box-4" data-aos="flip-left" data-aos-delay="100" data-aos-duration="800">
  <div className="service-icon-bg">
    <FaChartLine className="service-icon" />
  </div>
  <h3>SVM (Support Vector Machine)</h3>
  <p>Powerful supervised learning algorithm for classification and regression analysis</p>
</div>

<div className="service-box-4" data-aos="flip-left" data-aos-delay="100" data-aos-duration="800">
  <div className="service-icon-bg">
    <FaServer className="service-icon" />
  </div>
  <h3>Flask</h3>
  <p>Lightweight Python web framework for building scalable APIs and microservices</p>
</div>

<div className="service-box-4" data-aos="flip-left" data-aos-delay="100" data-aos-duration="800">
  <div className="service-icon-bg">
    <FaRocket className="service-icon" />
  </div>
  <h3>XGBoost</h3>
  <p>High-performance gradient boosting library for optimized machine learning performance</p>
</div>

<div className="service-box-4" data-aos="flip-left" data-aos-delay="100" data-aos-duration="800">
  <div className="service-icon-bg">
    <FaTree className="service-icon" />
  </div>
  <h3>Random Forest</h3>
  <p>Ensemble learning method using multiple decision trees for robust predictions</p>
</div>

<div className="service-box-4" data-aos="flip-left" data-aos-delay="100" data-aos-duration="800">
  <div className="service-icon-bg">
    <FaBrain className="service-icon" />
  </div>
  <h3>TensorFlow</h3>
  <p>End-to-end open source platform for building and deploying machine learning models</p>
</div>

<div className="service-box-4" data-aos="flip-left" data-aos-delay="100" data-aos-duration="800">
  <div className="service-icon-bg">
    <FaChartBar className="service-icon" />
  </div>
  <h3>Matplotlib</h3>
  <p>Comprehensive Python library for creating static, animated, and interactive visualizations</p>
</div>

<div className="service-box-4" data-aos="flip-left" data-aos-delay="100" data-aos-duration="800">
  <div className="service-icon-bg">
    <FaUserCircle className="service-icon" />
  </div>
  <h3>Face Recognition</h3>
  <p>Advanced computer vision technology for facial detection and identity verification</p>
</div>

<div className="service-box-4" data-aos="flip-left" data-aos-delay="100" data-aos-duration="800">
  <div className="service-icon-bg">
    <FaCogs className="service-icon" />
  </div>
  <h3>Hyper Parameter Tuning</h3>
  <p>Optimizing model performance through systematic parameter adjustment and validation</p>
</div>

<div className="service-box-4" data-aos="flip-left" data-aos-delay="100" data-aos-duration="800">
  <div className="service-icon-bg">
    <FaTable className="service-icon" />
  </div>
  <h3>Pandas</h3>
  <p>Powerful data manipulation and analysis library for structured data operations</p>
</div>

<div className="service-box-4" data-aos="flip-left" data-aos-delay="100" data-aos-duration="800">
  <div className="service-icon-bg">
    <FaPalette className="service-icon" />
  </div>
  <h3>Image Augmentation</h3>
  <p>Techniques for expanding datasets through image transformations and modifications</p>
</div>
</div>


        </div>
      </div>
      <div className="background-webservice" id="sprojects">
        <div className="heading" data-aos="fade-up" data-aos-duration="1000">
          <h1>Web Development & AI Success Stories</h1>
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
      </div>


      <div className="background-website" id="sstories">
        <div className="heading" data-aos="fade-up" data-aos-duration="1000">
          <h1>Web Development & AI Success Stories</h1>
        </div>
        <p
          className="website-p"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          We build intelligent web applications that leverage cutting-edge AI technologies to solve complex business challenges. Our full-stack expertise combines React.js with machine learning models to create dynamic, data-driven solutions that adapt and learn from user interactions, delivering personalized experiences at scale.
        </p>
        <br /> <br />
        <p
          className="website-p-1"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
         From computer vision applications that analyze visual content to natural language processing systems that understand user intent, our AI-integrated web solutions transform how businesses operate. We specialize in deploying trained models into production environments, ensuring seamless integration between intelligent algorithms and responsive user interfaces
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
