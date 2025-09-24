import React, { useState, useRef, useEffect } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projectsData = [
    {
      id: 1,
      title: "TransBulevard",
      description: "Modern transportation and boulevard management system with real-time tracking and user-friendly interface.",
      image: process.env.PUBLIC_URL + "/transbulevard.png",
      link: "https://transbulevard.com",
      tags: ["PHP", "MySQL", "Bootstrap", "CRM"],
      category: "Web Application",
      status: "Live",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "HS Motor",
      description: "Comprehensive automotive management system for vehicle sales, inventory, and customer relationship management.",
      image: process.env.PUBLIC_URL + "/hsmotor.png",
      link: "https://hsmotor.my.id",
      tags: ["PHP", "MySQL", "Bootstrap", "CRM"],
      category: "Business System",
      status: "Live",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      title: "SPK Bansos Sukamaju",
      description: "Decision Support System for social assistance distribution using smart algorithms to ensure fair and efficient aid allocation.",
      image: process.env.PUBLIC_URL + "/spk.png",
      link: "https://spkbansos-sukamaju.my.id",
      tags: ["PHP", "MySQL", "Bootstrap", "CRM"],
      category: "Government System",
      status: "Live",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    }
  ];

  const handleProjectClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const handleMouseMove = (e, projectId) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    
    // Update spotlight effect
    const spotlight = card.querySelector('.project-spotlight');
    if (spotlight) {
      spotlight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`;
    }
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    
    const spotlight = card.querySelector('.project-spotlight');
    if (spotlight) {
      spotlight.style.background = 'transparent';
    }
  };

  return (
    <section className="projects" id="projects" ref={containerRef}>
      <div className="projects-container">
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <p>Showcasing my latest work and creative solutions</p>
          <div className="header-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
        </div>

        <div className={`projects-grid ${isVisible ? 'animate' : ''}`}>
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                background: project.gradient
              }}
              onMouseMove={(e) => handleMouseMove(e, project.id)}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => setHoveredProject(project.id)}
              onClick={() => handleProjectClick(project.link)}
            >
              <div className="project-spotlight"></div>
              
              <div className="project-status">
                <span className={`status-badge ${project.status.toLowerCase()}`}>
                  <div className="status-dot"></div>
                  {project.status}
                </span>
              </div>

              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <div className="project-category">{project.category}</div>
                    <div className="project-link-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15,3 21,3 21,9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-footer">
                  <div className="project-stats">
                    <div className="stat-item">
                      <div className="stat-icon">👀</div>
                      <span>View Live</span>
                    </div>
                  </div>
                  <div className="project-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7,7 17,7 17,17"></polyline>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="project-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>

              <div className="project-glow"></div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <div className="footer-content">
            <h4>Want to see more?</h4>
            <p>Check out my GitHub for more projects and contributions</p>
            <button className="github-btn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </button>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="bg-effects">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;