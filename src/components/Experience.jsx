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
      title: "S1 Teknik Informatika",
      company: "Universitas Pamulang",
      location: "Tangerang Selatan, Indonesia",
      period: "2021 - 2025",
      type: "Sarjana",
      status: "Final Year Student",
      description: "Menyelesaikan pendidikan Strata 1 di bidang Teknik Informatika dengan fokus pada pengembangan perangkat lunak modern, web development, dan teknologi terkini. Aktif mengerjakan berbagai proyek praktis yang relevan dengan industri.",
      achievements: [
        "IPK 3.6 dengan prestasi akademik konsisten",
        "Menguasai 5+ bahasa pemrograman modern",
        "Mengerjakan 5+ proyek web development",
        "Aktif dalam organisasi IT dan coding bootcamp",
        "Sertifikasi Nasional dalam Web Development"
      ],
      skills: ["JavaScript", "React.js", "Node.js", "PHP", "MySQL", "HTML5", "CSS3"],
      color: "#667eea",
      icon: "🎓",
      gpa: "3.75"
    },
    {
      id: 2,
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Remote, Indonesia",
      period: "2023 - Present",
      type: "Freelance",
      status: "Active",
      description: "Menyediakan layanan pengembangan website untuk UMKM dan startup lokal. Mengkhususkan diri dalam pembuatan website responsif, e-commerce, dan sistem informasi sederhana yang user-friendly.",
      achievements: [
        "Menyelesaikan 5+ proyek website sukses",
        "Klien rating 4.9/5 dengan testimoni positif",
        "Optimasi SEO meningkatkan traffic 200%+",
        "Maintenance & support berkelanjutan"
      ],
      skills: ["PHP", "React.js", "java", "SEO", "Responsive Design","MySQL"],
      color: "#f093fb",
      icon: "💻",
      clients: "5+"
    },
    {
      id: 3,
      title: "SMA Jurusan IPA",
      company: "SMAN 1 Cianjur",
      location: "Cianjur, Jawa Barat",
      period: "2017 - 2020",
      type: "Sekolah Menengah Atas",
      status: "Graduate",
      description: "Menyelesaikan pendidikan menengah atas dengan jurusan IPA. Membangun fondasi kuat dalam matematika, fisika, dan logika yang menjadi dasar untuk programming. Aktif dalam kegiatan ekstrakurikuler teknologi.",
      achievements: [
        "Lulus dengan nilai  (kategori baik)",
        "Ketua kelas selama 2 tahun berturut-turut",
        "Anggota aktif organisasi di sekolah",
      ],
      skills: ["Matematika", "Logika", "Problem Solving", "Microsoft Office", "Photoshop"],
      color: "#4facfe",
      icon: "📚",
      rank: "Top 10%"
    },
  ];

  const handleTimelineClick = (index) => {
    setActiveExp(index);
  };

  return (
    <section className="experience" id="experience">
      <div className="background-animation">
        <div className="floating-code">
          <span>&lt;/&gt;</span>
          <span>{`{}`}</span>
          <span>( )</span>
          <span>[ ]</span>
          <span>&lt;html&gt;</span>
          <span>console.log()</span>
        </div>
      </div>

      <div className="experience-container">
        <div className="experience-header">
          <div className="header-badge">
            <span className="badge-icon">⚡</span>
            <span>Ready to Code & Create</span>
          </div>
          <h2>My Journey</h2>
          <p>From student to developer - Building skills, creating solutions, ready for challenges</p>
          <div className="header-stats">
            <div className="stat-box">
              <div className="stat-icon">🎯</div>
              <div className="stat-number">1+</div>
              <div className="stat-label">Years Learning</div>
            </div>
            <div className="stat-box">
              <div className="stat-icon">💼</div>
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects Done</div>
            </div>
            <div className="stat-box">
              <div className="stat-icon">🚀</div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Motivation</div>
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
                  <div className="dot-pulse" style={{ backgroundColor: exp.color }}></div>
                </div>
                <div className="timeline-date">
                  <span>{exp.period}</span>
                  <div className="timeline-status" style={{ backgroundColor: exp.color }}>
                    {exp.status}
                  </div>
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
                <div className="card-glow"></div>
                <div className="card-header">
                  <div className="job-info">
                    <div className="job-title-wrapper">
                      <h3>{exp.title}</h3>
                      {exp.gpa && (
                        <div className="achievement-badge">
                          <span>GPA {exp.gpa}</span>
                        </div>
                      )}
                      {exp.clients && (
                        <div className="achievement-badge">
                          <span>{exp.clients} Clients</span>
                        </div>
                      )}
                      {exp.rank && (
                        <div className="achievement-badge">
                          <span>{exp.rank}</span>
                        </div>
                      )}
                      {exp.projects && (
                        <div className="achievement-badge">
                          <span>{exp.projects} Projects</span>
                        </div>
                      )}
                    </div>
                    <div className="company-info">
                      <span className="company">{exp.company}</span>
                      <span className="location">📍 {exp.location}</span>
                    </div>
                  </div>
                  <div className="job-type">
                    <span className={`type-badge ${exp.type.toLowerCase().replace(/ /g, '-')}`}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="card-body">
                  <p className="job-description">{exp.description}</p>

                  <div className="achievements">
                    <h4>🏆 Key Highlights</h4>
                    <div className="achievements-grid">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="achievement-item">
                          <div className="achievement-bullet"></div>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="skills-used">
                    <h4>🛠️ Skills & Technologies</h4>
                    <div className="skills-tags">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="skill-tag"
                          style={{ 
                            animationDelay: `${skillIndex * 0.1}s`,
                            '--skill-color': exp.color
                          }}
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
                  <div className="card-actions">
                    <button className="action-btn">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
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
          
          <div className="nav-progress">
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${((activeExp + 1) / experiences.length) * 100}%` }}
              ></div>
            </div>
            <span className="progress-text">{activeExp + 1} / {experiences.length}</span>
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

        {/* Call to Action */}
        <div className="cta-section">
          <div className="cta-content">
            <h3>Ready to contribute to your team!</h3>
            <p>Passionate learner, dedicated worker, and problem solver</p>
            <div className="cta-buttons">
              <button className="cta-btn primary">
                <span>💼</span>
                Hire Me
              </button>
              <button className="cta-btn secondary">
                <span>📄</span>
                Download CV
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="floating-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;