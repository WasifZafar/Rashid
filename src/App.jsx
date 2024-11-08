
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Info from './components/info';
import About from './components/About';
import Carousel from './components/Carousel';
import Project from './components/Project';
import Contact from './components/Contect';
import Footer from './components/Footer';


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const handleMouseEnter = () => setHoverMessage(true);
  const handleMouseLeave = () => setHoverMessage(false);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-logo">
        <h1>RQ</h1>
        </div>

        <div
          className={`menu-icon ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu Toggle"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => scrollToSection(homeRef)} className="nav-link">Info</a>
          <a href="#about" onClick={() => scrollToSection(aboutRef)} className="nav-link">About</a>
          <a href="#project" onClick={() => scrollToSection(projectRef)} className="nav-link">Project</a>
          <a href="#contact" onClick={() => scrollToSection(contactRef)} className="nav-link">Contact</a>

        </nav>
      </header> 

      
        <Info ref={homeRef} /> 
        <About ref={aboutRef} />
        <Carousel/>
        <Project ref={projectRef} /> 
        <Contact ref={contactRef}/> 
        <Footer />
       
      </>
  );
};

export default App;
