import "./MyProject.css";
import { useEffect, useState } from "react";

function MyProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample project images data - replace with your actual images
  const projectImages = {
    "Amber Bakery System": ["/images/C++/Home.png", "/images/C++/Intro.png"],
    "Colombo Institute of Studies": [
      "/images/cis-1.jpg",
      "/images/cis-2.jpg",
      "/images/cis-3.jpg",
      "/images/cis-4.jpg",
    ],
    MovieExplorer: [
      "/images/movie-1.jpg",
      "/images/movie-2.jpg",
      "/images/movie-3.jpg",
    ],
  };

  useEffect(() => {
    // Import AOS on client-side only
    const initAOS = async () => {
      if (typeof window !== "undefined") {
        const AOS = await import("aos");
        AOS.init({
          duration: 800,
          easing: "ease-in-out",
          once: true,
          offset: 100,
        });
      }
    };

    initAOS();
  }, []);

  const handleViewMore = (projectName) => {
    setSelectedProject(projectName);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
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
    <div className="container">
      <div className="heading" data-aos="fade-up">
        <h1>Projects</h1>
      </div>

      <p data-aos="fade-up" data-aos-delay="100">
        Collections of my latest work in software development
      </p>

      {/* Project 1 */}
      <div className="card" data-aos="fade-up" data-aos-delay="200">
        <div className="card-title" data-aos="fade-right" data-aos-delay="300">
          Amber Bakery System
        </div>
        <div
          className="card-heading"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          Console Billing System using C++
        </div>
        <div className="card-info" data-aos="fade-right" data-aos-delay="500">
          Console Application using C++ application to add new Items, Calculate
          total based on Items
        </div>
        <div className="card-languages" data-aos="fade-up" data-aos-delay="600">
          <span className="language-tag">C++</span>
          <span className="language-tag">Console Application</span>
          <span className="language-tag">Billing</span>
          <span className="language-tag">Inventory Management</span>
        </div>
        <a
          href="https://github.com/DilshadNaleem/Amber-Bakery"
          className="github"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          View on GitHub <span className="github-arrow">➡️</span>
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

      {/* Project 2 */}
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

      {/* Project 3 */}
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
          onClick={() => handleViewMore("MovieExplorer")}
          className="view-more"
          data-aos="fade-up"
          data-aos-delay="850"
        >
          View More<span className="github-arrow">➡️</span>
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
          </div>

          <div className="roles-container">
            <div className="role-section">
              <h4 className="role-title">👥 Unregistered Customer</h4>
              <ul className="role-features">
                <li>Browse site content and view details</li>
                <li>Access public information</li>
              </ul>
            </div>

            <div className="role-section">
              <h4 className="role-title">🔐 Registered Customer</h4>
              <ul className="role-features">
                <li>User authentication & dashboard</li>
                <li>Multi-cuisine ordering system</li>
                <li>Table reservations & pre-orders</li>
                <li>Review & promotion management</li>
                <li>Advanced search & filters</li>
              </ul>
            </div>

            <div className="role-section">
              <h4 className="role-title">👨‍💼 Staff</h4>
              <ul className="role-features">
                <li>Menu management system</li>
                <li>Reservation handling & updates</li>
                <li>Pre-order management</li>
                <li>Customer parking oversight</li>
                <li>Search & filter capabilities</li>
              </ul>
            </div>

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
          onClick={() => handleViewMore("MovieExplorer")}
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
          </div>

          <div className="roles-container">
            <div className="role-section">
              <h4 className="role-title">👥 Customer</h4>
              <ul className="role-features">
                <li>Order Multiple Item</li>
                <li>View Order History</li>
                <li>Search and Filters</li>
              </ul>
            </div>

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
          onClick={() => handleViewMore("MovieExplorer")}
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
          </div>

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
          </div>

          <div className="roles-container">
            <div className="role-section">
              <h4 className="role-title">👥 Guest Visitor</h4>
              <ul className="role-features">
                <li>Browse products and view details</li>
                <li>Access public content and catalogs</li>
              </ul>
            </div>

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
            </div>

            <div className="role-section">
              <h4 className="role-title">💼 Support Staff</h4>
              <ul className="role-features">
                <li>Internal communication dashboard</li>
                <li>Secure system access</li>
                <li>Real-time alerts and updates</li>
                <li>Direct messaging with administrators</li>
                <li>Video conference capabilities</li>
              </ul>
            </div>

            <div className="role-section">
              <h4 className="role-title">🤝 Business Agent</h4>
              <ul className="role-features">
                <li>Bulk order management</li>
                <li>Pricing and inventory control</li>
                <li>Sales analytics and reporting</li>
                <li>Customer relationship management</li>
                <li>Real-time stock monitoring</li>
              </ul>
            </div>

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
          onClick={() => handleViewMore("HyperZone")}
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
            <strong>PHP, HTML, CSS, JavaScript </strong>
            featuring multi-role authentication and comprehensive management
            systems.
          </div>

          <div className="roles-container">
            <div className="role-section">
              <h4 className="role-title">👥 Unregistered Customer</h4>
              <ul className="role-features">
                <li>Browse site content and view details</li>
                <li>Access public information</li>
              </ul>
            </div>

            <div className="role-section">
              <h4 className="role-title">🔐 Registered Customer</h4>
              <ul className="role-features">
                <li>User authentication & dashboard</li>
                <li>Multi-cuisine ordering system</li>
                <li>Table reservations & pre-orders</li>
                <li>Review & promotion management</li>
                <li>Advanced search & filters</li>
              </ul>
            </div>

            <div className="role-section">
              <h4 className="role-title">👨‍💼 Staff</h4>
              <ul className="role-features">
                <li>Menu management system</li>
                <li>Reservation handling & updates</li>
                <li>Pre-order management</li>
                <li>Customer parking oversight</li>
                <li>Search & filter capabilities</li>
              </ul>
            </div>

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
          <span className="language-tag">E-commerce</span>
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
          onClick={() => handleViewMore("MovieExplorer")}
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
          </div>

        <div className="highlights-container">
            <h4 className="highlights-title">🌟 Key Features</h4>
            <ul className="highlights-list">
              <li>Multi-tier role-based authentication system</li>
              <li>Two-factor authentication & password recovery</li>
              <li>Real-time notifications.</li>
              <li>Advanced rental management including fine based on dates</li>
              <li>Advanced Validaitons</li>
            
            </ul>
          </div>

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
            </div>

             <div className="role-section">
              <h4 className="role-title">🚗 Driver</h4>
              <ul className="role-features">
                <li>Personal Account Dashboard</li>
                <li>Secure two-factor authentication including Reset Password</li>
                <li>Add new Vehicles</li>
                <li>Profit & Loss Calculations</li>
              </ul>
            </div>
            
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
          onClick={() => handleViewMore("MovieExplorer")}
          className="view-more"
          data-aos="fade-up"
          data-aos-delay="850"
        >
          View More<span className="github-arrow">➡️</span>
        </button>
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
          </div>

        <div className="highlights-container">
            <h4 className="highlights-title">🌟 Key Features</h4>
            <ul className="highlights-list">
              <li>Multi-tier role-based authentication system</li>
              <li>Two-factor authentication & password recovery</li>
              <li>Real-time notifications.</li>
              <li>Advanced Machine learning Model</li>
              <li>Advanced Validaitons</li>
            
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
            </div>

            
            
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
          onClick={() => handleViewMore("MovieExplorer")}
          className="view-more"
          data-aos="fade-up"
          data-aos-delay="850"
        >
          View More<span className="github-arrow">➡️</span>
        </button>
      </div>



      

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
          </div>

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
              <li>Dual Mode (Light and Dark)</li>
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
                <li>Advanced Search and Filters</li>
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
                 <li>Realtime notifications</li>
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
          onClick={() => handleViewMore("MovieExplorer")}
          className="view-more"
          data-aos="fade-up"
          data-aos-delay="850"
        >
          View More<span className="github-arrow">➡️</span>
        </button>
      </div>





    {/* Project 3 */}
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
        <button
          onClick={() => handleViewMore("MovieExplorer")}
          className="view-more"
          data-aos="fade-up"
          data-aos-delay="850"
        >
          View More<span className="github-arrow">➡️</span>
        </button>
      </div>

      
      <div className="card" data-aos="fade-up" data-aos-delay="300">
        <div className="card-title" data-aos="fade-right" data-aos-delay="400">
          Cinplex - Movie Theatre
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
          </div>

          <div className="roles-container">
            <div className="role-section">
              <h4 className="role-title">👥 Unregistered Customer</h4>
              <ul className="role-features">
                <li>Browse site content and view details</li>
                <li>Access public information</li>
              </ul>
            </div>

            <div className="role-section">
              <h4 className="role-title">🔐 Registered Customer</h4>
              <ul className="role-features">
                <li>User authentication & dashboard</li>
                <li>Ticket ordering system</li>
                <li>Parking reservations & pre-orders</li>
                <li>Review & promotion management</li>
                <li>Advanced search & filters</li>
              </ul>
            </div>

            <div className="role-section">
              <h4 className="role-title">👨‍💼 Staff</h4>
              <ul className="role-features">
                <li>Menu management system</li>
                <li>View overall pages</li>
                <li>Pre-order management</li>
                <li>Customer parking oversight</li>
                <li>Search & filter capabilities</li>
              </ul>
            </div>

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
          onClick={() => handleViewMore("MovieExplorer")}
          className="view-more"
          data-aos="fade-up"
          data-aos-delay="850"
        >
          View More<span className="github-arrow">➡️</span>
        </button>
      </div>


      {/* Modal Popup */}
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
    </div>
  );
}

export default MyProjects;
