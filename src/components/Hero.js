import React from 'react';
import resume from '../assets/Yadav_Yashi_Resume.pdf';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Yashi Yadav</h1>
        <h2>Machine Learning Engineer • Data Scientist • AI Engineer</h2>
        <div className="cta-buttons">
          <a href="#contact" className="cta-button get-in-touch">Get in Touch</a>
          <a href={resume} download className="cta-button resume-button">Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;