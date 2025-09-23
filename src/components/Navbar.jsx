import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    const handleSectionHighlight = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'Journey', 'sertifikasi', 'testimonial', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionHighlight);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionHighlight);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { to: 'hero', label: 'Home', icon: '🏠' },
    { to: 'about', label: 'About', icon: '👤' },
    { to: 'skills', label: 'Skills', icon: '⚡' },
    { to: 'projects', label: 'Projects', icon: '💼' },
    { to: 'experience', label: 'Experience', icon: '🚀' },
    { to: 'sertifikasi', label: 'Sertifikasi', icon: '🏆' },
    { to: 'testimonial', label: 'Testimonial', icon: '💬' },
    { to: 'contact', label: 'Contact', icon: '📧' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        
        {/* Logo */}
        <div className="navbar-logo">
          <Link 
            to="hero" 
            smooth 
            duration={500}
            className="logo-link"
            onClick={closeMobileMenu}
          >
            <span className="logo-text">Showi</span>
            <span className="logo-subtitle">Web Developer</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.to} className="nav-item">
              <Link
                to={item.to}
                smooth
                duration={500}
                spy={true}
                offset={-70}
                className={`nav-link ${activeSection === item.to ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.label}</span>
                <div className="nav-indicator"></div>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="navbar-cta">
          <Link
            to="contact"
            smooth
            duration={500}
            className="cta-button"
            onClick={closeMobileMenu}
          >
            <span className="cta-icon">💬</span>
            <span className="cta-text">Let's Talk</span>
            <div className="cta-glow"></div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            
            {/* Mobile Logo */}
            <div className="mobile-logo">
              <span className="mobile-logo-text">Ahmad Showi</span>
              <span className="mobile-logo-subtitle">Creative Web Developer</span>
            </div>

            {/* Mobile Navigation */}
            <ul className="mobile-nav-links">
              {navItems.map((item, index) => (
                <li 
                  key={item.to} 
                  className="mobile-nav-item"
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  <Link
                    to={item.to}
                    smooth
                    duration={500}
                    spy={true}
                    offset={-70}
                    className={`mobile-nav-link ${activeSection === item.to ? 'active' : ''}`}
                    onClick={closeMobileMenu}
                  >
                    <span className="mobile-nav-icon">{item.icon}</span>
                    <span className="mobile-nav-text">{item.label}</span>
                    <div className="mobile-nav-indicator"></div>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <div className="mobile-cta">
              <Link
                to="contact"
                smooth
                duration={500}
                className="mobile-cta-button"
                onClick={closeMobileMenu}
              >
                <span className="mobile-cta-icon">🚀</span>
                <span className="mobile-cta-text">Start a Project</span>
              </Link>
              
              {/* Social Links */}
              <div className="mobile-social">
                <a href="https://github.com" className="mobile-social-link" target="_blank" rel="noopener noreferrer">
                  <span>📱</span>
                </a>
                <a href="https://linkedin.com" className="mobile-social-link" target="_blank" rel="noopener noreferrer">
                  <span>💼</span>
                </a>
                <a href="https://instagram.com" className="mobile-social-link" target="_blank" rel="noopener noreferrer">
                  <span>📷</span>
                </a>
                <a href="mailto:contact@ahmadshowi.com" className="mobile-social-link">
                  <span>✉️</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Background Blur Overlay */}
        <div 
          className={`navbar-backdrop ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={closeMobileMenu}
        ></div>
      </div>

      {/* Progress Bar */}
      <div className="scroll-progress">
        <div className="scroll-progress-bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;