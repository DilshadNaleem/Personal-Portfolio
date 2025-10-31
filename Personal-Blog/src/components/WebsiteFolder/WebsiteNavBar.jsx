import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Navbar.css';

function WebsiteNavbar({ 
  scrollToHome, 
  scrollToAbout, 
  scrollToSkills, 
  scrollToProjects, 
  scrollToContact,
  activeSection 
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Add this hook

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (scrollFunction) => {
    scrollFunction();
    closeMenu();
  };

  // Add this function for Home navigation
  const handleHomeClick = () => {
    navigate('/'); // Navigate to home route
    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo/Brand */}
        <div className="nav-brand">
          <button 
            className={`brand-button ${activeSection === 'home' ? 'active' : ''}`}
            onClick={handleHomeClick} // Use the new function here
          >
            <span className="brand-name">Mohamed Dilshad</span>
            <span className="brand-subtitle">NALEEM</span>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {/* Home Link - Navigates to "/" */}
          <li>
            <Link 
              to="/"
              className={activeSection === 'home' ? 'active nav-link' : 'nav-link'}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          
          {/* Other navigation buttons remain the same */}
          <li>
            <button 
              className={activeSection === 'choosingus' ? 'active' : ''}
              onClick={() => handleNavClick(scrollToAbout)}
            >
              Why Choosing Us
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'technology' ? 'active' : ''}
              onClick={() => handleNavClick(scrollToSkills)}
            >
              Technologies
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'sprojects' ? 'active' : ''}
              onClick={() => handleNavClick(scrollToProjects)}
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'sstories' ? 'active' : ''}
              onClick={() => handleNavClick(scrollToContact)}
            >
              Success Stories
            </button>
          </li>

          <li>
            <Link 
              to="/services"
              className="nav-external-link"
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/blog"  
              className="nav-external-link"
              onClick={closeMenu}
            >
              Blog
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default WebsiteNavbar;