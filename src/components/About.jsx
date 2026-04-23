import React from 'react';
import '../styles/About.css';
import Lanyard from './Lanyard';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I'm Ahmad Showi S Fuadi, an Informatics Engineering fresh graduate
            aspiring to be a full-stack developer. I have a solid foundation in web application 
            development and a strong interest in emerging technologies such as 
            Artificial Intelligence, Machine Learning, and cloud computing. 
            With eagerness to learn and high adaptability, I am ready to grow with a company and 
            contribute to building innovative and valuable digital solutions.
          </p>
          
          <div className="stats">
            <div className="stat-item">
              <h3>5+</h3>
              <p>Project Finished</p>
            </div>
            <div className="stat-item">
              <h3>1+</h3>
              <p>Years of Experience</p>
            </div>
          </div>
          
          <p className="motto">Working with heart, creating with mind.</p>
        </div>
        
        <div className="id-card-container">
          {/* 3D Lanyard Card */}
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>
      </div>
    </section>
  );
};

export default About;
