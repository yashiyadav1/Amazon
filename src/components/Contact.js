import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope />
            <a href="mailto:yashiyadav0901@gmail.com">yashiyadav0901@gmail.com</a>
          </div>
          <div className="contact-item">
            <FaPhone />
            <a href="tel:+12602468543">(260) 246-8543</a>
          </div>
          <div className="contact-item">
            <FaLinkedin />
            <a href="https://www.linkedin.com/in/yashiyadav/" target="_blank" rel="noopener noreferrer">linkedin.com/in/yashiyadav</a>
          </div>
          <div className="contact-item">
            <FaGithub />
            <a href="https://github.com/yashiyadav1" target="_blank" rel="noopener noreferrer">github.com/yashiyadav1</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;