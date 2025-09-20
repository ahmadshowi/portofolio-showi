import React, { useState, useRef, useEffect } from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const [activeExp, setActiveExp] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: 1,
      title: "Full-Stack Developer",
      company: "Tech Solutions Indonesia",
      location: "Jakarta, Indonesia",
      period: "2022 - Present",
      type: "Full Time",
      description: "Leading development of modern web applications using React.js, Node.js, and cloud technologies. Successfully delivered 15+ projects with 99.9% uptime.",
      achievements: [
        "Increased application performance by 40%",
        "Led team of 5 junior developers",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Built scalable microservices architecture"
      ],
      skills: ["React.js", "Node.js", "AWS", "Docker", "MongoDB"],
      color: "#667eea",
      icon: "💻"
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Creative Agency",
      location: "Bandung, Indonesia",
      period: "2021 - 2022",
      type: "Contract",
      description: "Specialized in creating responsive and interactive user interfaces for various clients including e-commerce platforms and corporate websites.",
      achievements: [
        "Developed 20+ responsive websites",
        "Improved user engagement by 35%",
        "Optimized loading speed by 50%",
        "Collaborated with UX/UI designers"
      ],
      skills: ["React.js", "JavaScript", "CSS3", "Bootstrap", "Figma"],
      color: "#f093fb",
      icon: "🎨"
    },
    {
      id: 3,
      title: "Web Development Intern",
      company: "StartupTech Incubator",
      location: "Bandung, Indonesia",
      period: "2020 - 2021",
      type: "Internship",
      description: "Gained hands-on experience in full-stack development while working on real-world projects. Participated in agile development processes and code reviews.",
      achievements: [
        "Contributed to 8 different projects",
        "Learned modern development practices",
        "Participated in daily standups and sprints",
        "Built first production-ready application"
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      color: "#4facfe",
      icon: "🚀"
    },
    {
      id: 4,
      title: "Freelance Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "2019 - Present",
      type: "Freelance",
      description: "Providing web development services to small and medium businesses. Specialized in creating custom solutions that drive business growth.",
      achievements: [
        "Completed 25+ freelance projects",
        "Maintained 5-star rating on platforms",
        "Generated $50K+ in revenue",
        "Built long-term client relationships"
      ],
      skills: ["WordPress", "Laravel", "React.js", "E-commerce"],
      color: "#a8edea",
      icon: "💼"
    }
  ];

  const handleTimelineClick = (index) => {
    setActiveExp(index);
  };

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <div className="experience-header">
          <h2>Professional Journey</h2>
          <p>My career path and professional growth through the years</p>
          <div className="header-stats">
            <div className="stat-box">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">15+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>
        </div>

        <div className={`experience-content ${isVisible ? 'animate' : ''}`} ref={timelineRef}>
          {/* Timeline */}
          <div className="timeline">
            <div className="timeline-line">
              <div 
                className="timeline-progress"
                style={{ height: `${((activeExp + 1) / experiences.length) * 100}%` }}
              ></div>
            </div>
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`timeline-item ${index === activeExp ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => handleTimelineClick(index)}
              >
                <div className="timeline-dot" style={{ backgroundColor: exp.color }}>
                  <span className="timeline-icon">{exp.icon}</span>
                  <div className="dot-ripple" style={{ borderColor: exp.color }}></div>
                </div>
                <div className="timeline-date">
                  <span>{exp.period}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Details */}
          <div className="experience-details">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`experience-card ${index === activeExp ? 'active' : ''}`}
                style={{ '--exp-color': exp.color }}
              >
                <div className="card-header">
                  <div className="job-info">
                    <h3>{exp.title}</h3>
                    <div className="company-info">
                      <span className="company">{exp.company}</span>
                      <span className="location">📍 {exp.location}</span>
                    </div>
                  </div>
                  <div className="job-type">
                    <span className={`type-badge ${exp.type.toLowerCase().replace(' ', '-')}`}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="card-body">
                  <p className="job-description">{exp.description}</p>

                  <div className="achievements">
                    <h4>🏆 Key Achievements</h4>
                    <ul>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>
                          <div className="achievement-bullet"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="skills-used">
                    <h4>🛠️ Technologies Used</h4>
                    <div className="skills-tags">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="skill-tag"
                          style={{ animationDelay: `${skillIndex * 0.1}s` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="card-footer">
                  <div className="experience-duration">
                    <span>📅 {exp.period}</span>
                  </div>
                  <div className="card-glow"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="experience-nav">
          <button 
            className="nav-btn prev" 
            onClick={() => setActiveExp(Math.max(0, activeExp - 1))}
            disabled={activeExp === 0}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
            Previous
          </button>
          <div className="nav-dots">
            {experiences.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === activeExp ? 'active' : ''}`}
                onClick={() => setActiveExp(index)}
                style={{ backgroundColor: index === activeExp ? experiences[index].color : '' }}
              ></button>
            ))}
          </div>
          <button 
            className="nav-btn next" 
            onClick={() => setActiveExp(Math.min(experiences.length - 1, activeExp + 1))}
            disabled={activeExp === experiences.length - 1}
          >
            Next
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Floating Elements */}
        <div className="floating-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;