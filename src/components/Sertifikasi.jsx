import React, { useState, useRef, useEffect } from 'react';
import '../styles/Sertifikasi.css';

const Sertifikasi = () => {
  const [flippedCard, setFlippedCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);
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

  const certifications = [
    {
      id: 1,
      title: "Program Kreativitas Mahasiswa",
      subtitle: "PKM - Pengabdian Kepada Masyarakat",
      issuer: "Kementerian Pendidikan Indonesia",
      date: "2023",
      image: "/pkm.jpg",
      category: "Community Service",
      level: "National",
      description: "Berhasil menyelesaikan program pengabdian kepada masyarakat dengan fokus pada pemberdayaan komunitas lokal melalui teknologi digital dan edukasi.",
      skills: ["Community Development", "Project Management", "Digital Literacy", "Social Impact"],
      credentialId: "PKM-2023-001",
      status: "Verified",
      color: "#4f46e5",
      icon: "🤝"
    },
    {
      id: 2,
      title: "Sertifikasi Kompetensi Programmer",
      subtitle: "Junior Web Developer",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      date: "2025",
      image: "/pemrograman.jpg",
      category: "Professional",
      level: "National",
      description: "Sertifikasi nasional yang diakui BNSP untuk kompetensi sebagai Junior Web Developer dengan standar industri internasional.",
      skills: ["Web Development", "Database Management", "API Integration", "Quality Assurance"],
      credentialId: "BNSP-2023-JWD-7845",
      status: "Certified",
      color: "#059669",
      icon: "💻"
    }
  ];

  const categories = ['All', 'Community Service', 'Professional'];

  const filteredCertifications = selectedCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  const handleCardFlip = (cardId) => {
    setFlippedCard(flippedCard === cardId ? null : cardId);
  };

  const handleCardHover = (cardId, isHovering) => {
    if (isHovering) {
      setHoveredCard(cardId);
    } else {
      setHoveredCard(null);
    }
  };

  return (
    <section className="sertifikasi" id="sertifikasi">
      <div className="sertifikasi-container" ref={containerRef}>
        <div className="sertifikasi-header">
          <div className="header-content">
            <h2>Certifications & Achievements</h2>
            <p>Professional certifications and community service accomplishments</p>
          </div>
          
          <div className="achievement-stats">
            <div className="stat-card">
              <div className="stat-icon">🏆</div>
              <div className="stat-info">
                <div className="stat-number">2</div>
                <div className="stat-label">Certificates</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <div className="stat-info">
                <div className="stat-number">National</div>
                <div className="stat-label">Level</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">✅</div>
              <div className="stat-info">
                <div className="stat-number">Verified</div>
                <div className="stat-label">Status</div>
              </div>
            </div>
          </div>
        </div>

        <div className="category-filter">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="filter-icon">
                {category === 'All' && '🎓'}
                {category === 'Community Service' && '🤝'}
                {category === 'Professional' && '💼'}
              </span>
              {category}
            </button>
          ))}
        </div>

        <div className={`certifications-grid ${isVisible ? 'animate' : ''}`}>
          {filteredCertifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`certification-card ${flippedCard === cert.id ? 'flipped' : ''} ${hoveredCard === cert.id ? 'hovered' : ''}`}
              style={{ 
                animationDelay: `${index * 0.3}s`,
                '--cert-color': cert.color
              }}
              onMouseEnter={() => handleCardHover(cert.id, true)}
              onMouseLeave={() => handleCardHover(cert.id, false)}
            >
              {/* Card Front */}
              <div className="card-front">
                <div className="card-header">
                  <div className="cert-badge">
                    <span className="badge-icon">{cert.icon}</span>
                    <span className="badge-level">{cert.level}</span>
                  </div>
                  <div className={`cert-status ${cert.status.toLowerCase()}`}>
                    <div className="status-dot"></div>
                    {cert.status}
                  </div>
                </div>

                <div className="cert-image-container">
                  <img src={cert.image} alt={cert.title} className="cert-image" />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <button 
                        className="view-details-btn"
                        onClick={() => handleCardFlip(cert.id)}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>

                <div className="cert-info">
                  <h3>{cert.title}</h3>
                  <p className="cert-subtitle">{cert.subtitle}</p>
                  <div className="cert-meta">
                    <span className="issuer">{cert.issuer}</span>
                    <span className="date">📅 {cert.date}</span>
                  </div>
                </div>

                <div className="card-footer">
                  <div className="cert-category">
                    <span>{cert.category}</span>
                  </div>
                  <button 
                    className="flip-btn"
                    onClick={() => handleCardFlip(cert.id)}
                    title="View Details"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9,18 15,12 9,6"/>
                    </svg>
                  </button>
                </div>

                <div className="card-glow"></div>
                <div className="card-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
              </div>

              {/* Card Back */}
              <div className="card-back">
                <div className="back-header">
                  <button 
                    className="back-btn"
                    onClick={() => handleCardFlip(cert.id)}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15,18 9,12 15,6"/>
                    </svg>
                    Back
                  </button>
                  <div className="credential-id">
                    ID: {cert.credentialId}
                  </div>
                </div>

                <div className="back-content">
                  <div className="cert-description">
                    <h4>📋 Description</h4>
                    <p>{cert.description}</p>
                  </div>

                  <div className="cert-skills">
                    <h4>🛠️ Skills Covered</h4>
                    <div className="skills-tags">
                      {cert.skills.map((skill, skillIndex) => (
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

                  <div className="verification-info">
                    <h4>🔐 Verification</h4>
                    <div className="verification-details">
                      <div className="verification-item">
                        <span className="label">Issuer:</span>
                        <span className="value">{cert.issuer}</span>
                      </div>
                      <div className="verification-item">
                        <span className="label">Date:</span>
                        <span className="value">{cert.date}</span>
                      </div>
                      <div className="verification-item">
                        <span className="label">Level:</span>
                        <span className="value">{cert.level}</span>
                      </div>
                    </div>
                  </div>

                  <div className="action-buttons">
                    <button className="verify-btn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12l2 2 4-4"/>
                        <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                        <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                        <path d="M13 12h8"/>
                        <path d="M3 12h8"/>
                      </svg>
                      Verify Certificate
                    </button>
                    <button className="download-btn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7,10 12,15 17,10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                      </svg>
                      Download
                    </button>
                  </div>
                </div>

                <div className="back-glow"></div>
              </div>
            </div>
          ))}
        </div>

        

        {/* Background Effects */}
        <div className="bg-decorations">
          <div className="floating-cert floating-cert-1">🏆</div>
          <div className="floating-cert floating-cert-2">🎓</div>
          <div className="floating-cert floating-cert-3">⭐</div>
          <div className="floating-cert floating-cert-4">🏅</div>
          <div className="floating-cert floating-cert-5">✨</div>
        </div>
      </div>
    </section>
  );
};

export default Sertifikasi;