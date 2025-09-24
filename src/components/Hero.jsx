import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const titles = [
    "Junior Web Developer",
    "UI/UX Designer",
    "Learner / Explorer", 
    "Tech Enthusiast"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100 
      });
    };

    const titleInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(titleInterval);
    };
  }, [titles.length]);

 const downloadCV = () => {
  const element = document.createElement('a');
  element.href = process.env.PUBLIC_URL + "/CV_ahmadShowiSF.pdf";
  element.download = "CV_Ahmad_Showi_S_Fuadi.pdf"; // nama file saat di-download
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};


  const scrollToContact = () => {
    // Smooth scroll to contact section
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      {/* Background Elements */}
      <div 
        className="hero-bg-gradient"
        style={{
          '--mouse-x': `${mousePosition.x}%`,
          '--mouse-y': `${mousePosition.y}%`
        }}
      ></div>
      
      <div className="hero-grid"></div>
      
      {/* Floating Particles */}
      <div className="floating-particles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              '--delay': `${i * 0.5}s`,
              '--duration': `${3 + Math.random() * 4}s`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          ></div>
        ))}
      </div>

      {/* Animated Shapes */}
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Main Content */}
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        
        <div className="profile-image">
  <img 
    src={process.env.PUBLIC_URL + "/showi.jpg"} 
    alt="Ahmad Showi S Fuadi" 
    className="profile-photo"
    onError={(e) => {
      e.target.style.display = "none"; 
      const fallback = e.target.nextSibling;
      if (fallback) fallback.style.display = "flex";
    }}
  />
  <div className="profile-fallback">AS</div>
</div>

            {/* Floating Tech Icons */}
            <div className="floating-icon icon-1">⚛️</div>
            <div className="floating-icon icon-2">🎨</div>
            <div className="floating-icon icon-3">⚡</div>
            <div className="floating-icon icon-4">💻</div>
          </div>

          {/* Greeting Animation */}
          <div className="greeting">
            <span className="greeting-text">Hi, I'm</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="hero-name">
          <span className="name-text">Ahmad Showi S Fuadi</span>
        </h1>

        {/* Dynamic Title */}
        <div className="hero-title">
          <span className="title-prefix"></span>
          <span className="title-dynamic" key={textIndex}>
            {titles[textIndex]}
          </span>
        </div>

        {/* Description */}
<p className="hero-description">
Bersemangat untuk <span className="highlight">belajar dan berkembang</span> 
dalam pengembangan web modern. Memiliki dasar di React dan fokus membangun 
<span className="highlight">antarmuka yang sederhana dan bernilai</span>.
</p>


        {/* CTA Buttons */}
        <div className="hero-cta">
          <button 
            className="btn btn-primary"
            onClick={downloadCV}
          >
            <span className="btn-icon">📄</span>
            <span className="btn-text">Download CV</span>
            <div className="btn-glow"></div>
          </button>

          <button 
            className="btn btn-secondary"
            onClick={scrollToContact}
          >
            <span className="btn-icon">💬</span>
            <span className="btn-text">Let's Talk</span>
            <div className="btn-glow"></div>
          </button>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://github.com" className="social-link github" target="_blank" rel="noopener noreferrer">
            <span className="social-icon">📱</span>
          </a>
          <a href="https://linkedin.com" className="social-link linkedin" target="_blank" rel="noopener noreferrer">
            <span className="social-icon">💼</span>
          </a>
          <a href="https://instagram.com" className="social-link instagram" target="_blank" rel="noopener noreferrer">
            <span className="social-icon">📷</span>
          </a>
          <a href="mailto:contact@ahmadshowi.com" className="social-link email">
            <span className="social-icon">✉️</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span className="scroll-text">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;