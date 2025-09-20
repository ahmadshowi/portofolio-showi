import React, { useState, useRef, useEffect } from 'react';
import '../styles/Testimonials.css';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO at TechStart",
      company: "TechStart Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "Kerja Showi sangat memuaskan! Website yang dia buat untuk perusahaan kami benar-benar mengubah cara kami berinteraksi dengan klien. Performance dan design-nya luar biasa!",
      project: "Corporate Website",
      date: "December 2023",
      color: "#667eea",
      tags: ["React.js", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder & CTO",
      company: "InnovateTech",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "Ahmad Showi adalah developer yang sangat profesional dan detail. Dia berhasil membangun sistem e-commerce kami dari nol dengan fitur-fitur canggih yang sangat membantu bisnis kami berkembang pesat.",
      project: "E-Commerce Platform",
      date: "November 2023",
      color: "#f093fb",
      tags: ["Laravel", "MySQL", "Payment Gateway"]
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      position: "Marketing Director",
      company: "Digital Agency Pro",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "Pengalaman bekerja dengan Showi sangat mengesankan! Dia tidak hanya mampu mengembangkan aplikasi web yang powerful, tapi juga memahami kebutuhan bisnis dengan baik. Highly recommended!",
      project: "Management Dashboard",
      date: "October 2023",
      color: "#4facfe",
      tags: ["Vue.js", "Express.js", "PostgreSQL"]
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Product Manager",
      company: "StartupHub",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "Showi delivered exceptional work on our mobile-responsive web application. His attention to detail and ability to solve complex problems made our project a huge success. The app performs flawlessly!",
      project: "Mobile Web App",
      date: "September 2023",
      color: "#a8edea",
      tags: ["React Native", "Firebase", "PWA"]
    },
    {
      id: 5,
      name: "Amanda Wilson",
      position: "Operations Manager",
      company: "HealthTech Solutions",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "Ahmad sangat memahami requirement kami dan mampu mengimplementasikan sistem yang kompleks dengan hasil yang melebihi ekspektasi. Communication skill dan technical expertise-nya sangat baik!",
      project: "Healthcare Management System",
      date: "August 2023",
      color: "#667eea",
      tags: ["Django", "Python", "REST API"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (autoPlay) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [autoPlay, testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`star ${index < rating ? 'filled' : ''}`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        ⭐
      </span>
    ));
  };

  return (
    <section className="testimonial" id="testimonial">
      <div className="testimonial-container" ref={containerRef}>
        <div className="testimonial-header">
          <h2>What Clients Say</h2>
          <p>Real feedback from satisfied clients who trusted me with their projects</p>
          <div className="header-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-heart">💖</div>
            <div className="decoration-line"></div>
          </div>
        </div>

        <div className="testimonial-stats">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5.0</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
        </div>

        <div className={`testimonial-carousel ${isVisible ? 'animate' : ''}`}>
          <div className="carousel-container">
            <div 
              className="testimonial-track"
              style={{ 
                transform: `translateX(-${activeIndex * 100}%)`,
                '--active-color': testimonials[activeIndex]?.color
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
                  style={{ '--testimonial-color': testimonial.color }}
                >
                  <div className="card-background">
                    <div className="bg-pattern"></div>
                    <div className="bg-glow"></div>
                  </div>

                  <div className="testimonial-content">
                    <div className="quote-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>

                    <div className="testimonial-text">
                      <p>"{testimonial.testimonial}"</p>
                    </div>

                    <div className="rating">
                      {renderStars(testimonial.rating)}
                    </div>

                    <div className="project-info">
                      <div className="project-badge">
                        <span className="project-name">{testimonial.project}</span>
                        <span className="project-date">{testimonial.date}</span>
                      </div>
                      <div className="tech-stack">
                        {testimonial.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="tech-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="client-info">
                    <div className="client-avatar">
                      <img src={testimonial.image} alt={testimonial.name} />
                      <div className="avatar-ring"></div>
                    </div>
                    <div className="client-details">
                      <h4>{testimonial.name}</h4>
                      <p className="client-position">{testimonial.position}</p>
                      <p className="client-company">@ {testimonial.company}</p>
                    </div>
                    <div className="verified-badge">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                  </div>

                  <div className="card-particles">
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-controls">
            <button 
              className="control-btn prev-btn"
              onClick={prevTestimonial}
              title="Previous testimonial"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            <div className="carousel-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  style={{ 
                    backgroundColor: index === activeIndex ? testimonials[index].color : ''
                  }}
                ></button>
              ))}
            </div>

            <button 
              className="control-btn next-btn"
              onClick={nextTestimonial}
              title="Next testimonial"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>

          <div className="carousel-settings">
            <button 
              className={`autoplay-btn ${autoPlay ? 'active' : ''}`}
              onClick={toggleAutoPlay}
              title={autoPlay ? 'Pause autoplay' : 'Resume autoplay'}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {autoPlay ? (
                  <>
                    <rect x="6" y="4" width="4" height="16"/>
                    <rect x="14" y="4" width="4" height="16"/>
                  </>
                ) : (
                  <polygon points="5,3 19,12 5,21"/>
                )}
              </svg>
            </button>
            <span className="slide-counter">
              {activeIndex + 1} / {testimonials.length}
            </span>
          </div>
        </div>

        <div className="testimonial-cta">
          <div className="cta-content">
            <h3>🚀 Ready to Start Your Project?</h3>
            <p>Join these satisfied clients and let's create something amazing together!</p>
            <div className="cta-buttons">
              <button className="primary-cta">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Get In Touch
              </button>
              <button className="secondary-cta">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                  <polyline points="10,17 15,12 10,7"/>
                  <line x1="15" y1="12" x2="3" y2="12"/>
                </svg>
                View Portfolio
              </button>
            </div>
          </div>
        </div>

        {/* Background Effects */}
        <div className="testimonial-bg-effects">
          <div className="floating-quote floating-quote-1">"</div>
          <div className="floating-quote floating-quote-2">"</div>
          <div className="floating-star floating-star-1">⭐</div>
          <div className="floating-star floating-star-2">✨</div>
          <div className="floating-star floating-star-3">💫</div>
          <div className="floating-heart floating-heart-1">💖</div>
          <div className="floating-heart floating-heart-2">💝</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;