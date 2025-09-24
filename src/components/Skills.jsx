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
      name: 'HTML',
      icon: '🏗️',
      color: '#E34F26',
      level: 80,
      category: 'Frontend'
    },
    {
      name: 'CSS',
      icon: '🎨',
      color: '#1572B6',
      level: 80,
      category: 'Frontend'
    },
    {
      name: 'JavaScript',
      icon: '⚡',
      color: '#F7DF1E',
      level: 80,
      category: 'Frontend'
    },
    {
      name: 'React.js',
      icon: '⚛️',
      color: '#61DAFB',
      level: 80,
      category: 'Frontend'
    },
    {
      name: 'Node.js',
      icon: '🟢',
      color: '#339933',
      level: 80,
      category: 'Backend'
    },
    {
  name: 'MySQL',
  icon: '🛢️',
  color: '#4479A1',
  level: 80,
  category: 'Database'
},
{
  name: 'Java',
  icon: '☕',
  color: '#007396',
  level: 80,
  category: 'Backend'
},

{
  name: 'PHP',
  icon: '🐘',
  color: '#777BB4',
  level: 80,
  category: 'Backend'
},

  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database'];
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
            <h4>7+</h4>
            <p>Technologies</p>
          </div>
          <div className="summary-item">
            <h4>1+</h4>
            <p>Years Experience</p>
          </div>
          <div className="summary-item">
            <h4>5+</h4>
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