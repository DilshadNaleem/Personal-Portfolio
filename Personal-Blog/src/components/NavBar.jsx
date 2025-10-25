import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ 
  scrollToHome, 
  scrollToAbout, 
  scrollToSkills, 
  scrollToProjects, 
  scrollToContact,
  activeSection 
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo/Brand */}
        <div className="nav-brand">
          <button 
            className={`brand-button ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick(scrollToHome)}
          >
            <span className="brand-name">Mohamed Dilshad</span>
            <span className="brand-subtitle">NALEEM</span>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <button 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={() => handleNavClick(scrollToHome)}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => handleNavClick(scrollToAbout)}
            >
              About
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={() => handleNavClick(scrollToSkills)}
            >
              Skills
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={() => handleNavClick(scrollToProjects)}
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={() => handleNavClick(scrollToContact)}
            >
              Contact
            </button>
          </li>

            <li>
            <a 
              href="https://your-service-link.com" 
              className="nav-external-link"
              target="_blank" 
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="https://your-blog-link.com" 
              className="nav-external-link"
              target="_blank" 
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Blog
            </a>
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

export default Navbar;