import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Sertifikasi from './components/Sertifikasi';
import Testimonial from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Sertifikasi />
      <Testimonial />
      <Contact />
    </>
  );
}

export default App;