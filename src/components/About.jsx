import React, { useRef, useEffect } from 'react';
import '../styles/About.css';

const About = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
      
      // Update shine effect position
      const shine = card.querySelector('.card-shine');
      if (shine) {
        shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.15) 0%, transparent 50%)`;
      }
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
      
      const shine = card.querySelector('.card-shine');
      if (shine) {
        shine.style.background = 'transparent';
      }
    };

    const handleMouseEnter = () => {
      card.style.transition = 'none';
    };

    const handleMouseOut = () => {
      card.style.transition = 'transform 0.5s ease-out';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseout', handleMouseOut);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I'm Ahmad Showi S Fuadi, a full-stack developer passionate about
            building modern, high-performance applications with an
            intuitive user experience. I enjoy working with the latest
            technologies like Artificial Intelligence, Machine Learning, and
            cloud-based development, blending creativity with precision to
            deliver exceptional solutions.
          </p>
          
          <div className="stats">
            <div className="stat-item">
              <h3>20+</h3>
              <p>Project Finished</p>
            </div>
            <div className="stat-item">
              <h3>3+</h3>
              <p>Years of Experience</p>
            </div>
          </div>
          
          <p className="motto">Working with heart, creating with mind.</p>
        </div>
        
        <div className="id-card-container">
          <div className="id-card" ref={cardRef}>
            <div className="card-shine"></div>
            <div className="card-header">
              <div className="card-logo">
                <span>📱</span>
              </div>
            </div>
            <div className="card-body">
              <div className="profile-image">
                <img src="/showi.jpg" alt="Ahmad Showi S Fuadi" />
              </div>
              <div className="profile-info">
                <h4>Ahmad Showi S Fuadi</h4>
                <p>Full-Stack Developer</p>
              </div>
            </div>
            <div className="card-footer">
              <div className="card-pattern"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;