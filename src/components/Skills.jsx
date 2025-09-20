import React, { useState, useEffect } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector('.skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skillsData = [
    {
      name: 'HTML5',
      icon: '🏗️',
      color: '#E34F26',
      level: 95,
      category: 'Frontend'
    },
    {
      name: 'CSS3',
      icon: '🎨',
      color: '#1572B6',
      level: 90,
      category: 'Frontend'
    },
    {
      name: 'JavaScript',
      icon: '⚡',
      color: '#F7DF1E',
      level: 92,
      category: 'Frontend'
    },
    {
      name: 'React.js',
      icon: '⚛️',
      color: '#61DAFB',
      level: 88,
      category: 'Frontend'
    },
    {
      name: 'Node.js',
      icon: '🟢',
      color: '#339933',
      level: 85,
      category: 'Backend'
    },
    {
      name: 'Python',
      icon: '🐍',
      color: '#3776AB',
      level: 87,
      category: 'Backend'
    },
    {
      name: 'MongoDB',
      icon: '🍃',
      color: '#47A248',
      level: 82,
      category: 'Database'
    },
    {
      name: 'PostgreSQL',
      icon: '🐘',
      color: '#336791',
      level: 80,
      category: 'Database'
    },
    {
      name: 'Git',
      icon: '🔧',
      color: '#F05032',
      level: 90,
      category: 'Tools'
    },
    {
      name: 'Docker',
      icon: '🐳',
      color: '#2496ED',
      level: 75,
      category: 'DevOps'
    },
    {
      name: 'AWS',
      icon: '☁️',
      color: '#FF9900',
      level: 78,
      category: 'Cloud'
    },
    {
      name: 'TypeScript',
      icon: '📘',
      color: '#3178C6',
      level: 83,
      category: 'Frontend'
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools', 'DevOps', 'Cloud'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2>My Skills & Expertise</h2>
          <p>Technologies and tools I use to bring ideas to life</p>
        </div>

        <div className="category-filter">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={`skills-grid ${isVisible ? 'animate' : ''}`}>
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--skill-color': skill.color 
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="skill-icon">
                <span>{skill.icon}</span>
                <div className="skill-glow"></div>
              </div>
              
              <div className="skill-info">
                <h3>{skill.name}</h3>
                <span className="skill-category">{skill.category}</span>
              </div>

              <div className="skill-level">
                <div className="level-bar">
                  <div 
                    className="level-fill"
                    style={{ 
                      width: hoveredSkill === skill.name ? `${skill.level}%` : '0%',
                      backgroundColor: skill.color
                    }}
                  ></div>
                </div>
                <span className="level-text">{skill.level}%</span>
              </div>

              <div className="skill-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-item">
            <h4>12+</h4>
            <p>Technologies</p>
          </div>
          <div className="summary-item">
            <h4>3+</h4>
            <p>Years Experience</p>
          </div>
          <div className="summary-item">
            <h4>20+</h4>
            <p>Projects Built</p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-icon" style={{ top: '10%', left: '5%' }}>💻</div>
        <div className="floating-icon" style={{ top: '20%', right: '8%' }}>🚀</div>
        <div className="floating-icon" style={{ bottom: '15%', left: '3%' }}>⭐</div>
        <div className="floating-icon" style={{ bottom: '25%', right: '5%' }}>🔥</div>
      </div>
    </section>
  );
};

export default Skills;