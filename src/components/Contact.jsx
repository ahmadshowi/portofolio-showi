import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [whatsappMessage, setWhatsappMessage] = useState('');

  const socialLinks = [
    {
      id: 1,
      name: 'WhatsApp',
      username: '+62 822-9941-7885',
      icon: '💬',
      color: '#25D366',
      description: 'Chat langsung dengan saya',
      action: 'Chat Now',
      gradient: 'linear-gradient(135deg, #25D366, #128C7E)',
      link: `https://wa.me/6282299417885?text=${encodeURIComponent('Halo Ahmad! Saya tertarik dengan portfolio Anda.')}`
    },
    {
      id: 2,
      name: 'Instagram',
      username: '@ahmadshowisf',
      icon: '📸',
      color: '#E4405F',
      description: 'Follow journey & project saya',
      action: 'Follow',
      gradient: 'linear-gradient(135deg, #833AB4, #FD1D1D, #F77737)',
      link: 'https://instagram.com/ahmadshowisf'
    },
    {
      id: 3,
      name: 'Facebook',
      username: '@ahmadshowisf',
      icon: '👥',
      color: '#1877F2',
      description: 'Connect & networking',
      action: 'Connect',
      gradient: 'linear-gradient(135deg, #1877F2, #42A5F5)',
      link: 'https://facebook.com/ahmadshowisf'
    }
  ];

  const handleWhatsAppClick = () => {
    const message = whatsappMessage || 'Halo Ahmad! Saya tertarik dengan portfolio Anda dan ingin berdiskusi lebih lanjut.';
    const whatsappUrl = `https://wa.me/6282299417885?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSocialClick = (link) => {
    window.open(link, '_blank');
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <div className="header-badge">
            <span className="badge-icon">📱</span>
            <span>Let's Connect</span>
          </div>
          <h2>Get In Touch</h2>
          <p>Ready to collaborate? Let's discuss your next project!</p>
        </div>

        {/* Quick WhatsApp Section */}
        <div className="whatsapp-quick">
          <div className="whatsapp-card">
            <div className="whatsapp-icon">
              <span>💬</span>
              <div className="ping-animation"></div>
            </div>
            <div className="whatsapp-content">
              <h3>Quick WhatsApp</h3>
              <p>Send me a message directly</p>
              <div className="whatsapp-input">
                <textarea
                  placeholder="Type your message here..."
                  value={whatsappMessage}
                  onChange={(e) => setWhatsappMessage(e.target.value)}
                  rows="3"
                />
                <button 
                  className="whatsapp-send-btn"
                  onClick={handleWhatsAppClick}
                >
                  <span>Send via WhatsApp</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13"/>
                    <path d="M22 2L15 22L11 13L2 9L22 2Z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Cards */}
        <div className="social-grid">
          {socialLinks.map((social) => (
            <div
              key={social.id}
              className={`social-card ${activeCard === social.id ? 'active' : ''}`}
              style={{ '--social-color': social.color }}
              onMouseEnter={() => setActiveCard(social.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="card-glow" style={{ background: social.gradient }}></div>
              
              <div className="social-header">
                <div className="social-icon">
                  <span>{social.icon}</span>
                  <div className="icon-ripple"></div>
                </div>
                <div className="social-info">
                  <h3>{social.name}</h3>
                  <p className="social-username">{social.username}</p>
                </div>
              </div>

              <div className="social-body">
                <p className="social-description">{social.description}</p>
                
                <div className="social-stats">
                  <div className="stat-item">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Available</span>
                  </div>
                  <div className="stat-item">
                  </div>
                </div>
              </div>

              <div className="social-footer">
                <div className="social-actions">
                  <button
                    className="social-btn primary"
                    onClick={() => handleSocialClick(social.link)}
                    style={{ background: social.gradient }}
                  >
                    <span>{social.action}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v7"/>
                      <polyline points="15,10 18,13 21,10"/>
                      <line x1="4" y1="21" x2="20" y2="21"/>
                    </svg>
                  </button>
                  <button
                    className="social-btn secondary"
                    onClick={() => copyToClipboard(social.username)}
                    title="Copy username"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Hover Effect Elements */}
              <div className="card-particles">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">🕒</div>
            <div className="info-content">
              <h4>Response Time</h4>
              <p>Usually within 1-2 hours</p>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">🌍</div>
            <div className="info-content">
              <h4>Location</h4>
              <p>Cianjur, West Java, Indonesia</p>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">💼</div>
            <div className="info-content">
              <h4>Availability</h4>
              <p>Open for opportunities</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="contact-cta">
          <div className="cta-content">
            <h3>Ready to work together?</h3>
            <p>Let's create something amazing! I'm just one message away.</p>
            <div className="cta-buttons">
              <button
                className="cta-btn primary"
                onClick={() => handleSocialClick(`https://wa.me/6282299417885?text=${encodeURIComponent('Hi Ahmad! I have a project in mind. Can we discuss?')}`)}
              >
                <span>💬</span>
                Start a Project
              </button>
              <button
                className="cta-btn secondary"
                onClick={() => handleSocialClick('https://instagram.com/ahmadshowisf')}
              >
                <span>👋</span>
                Say Hello
              </button>
            </div>
          </div>
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

export default Contact;