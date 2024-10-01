// File: src/components/Contact.js
import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col space-y-4">
            <a href="mailto:yashiyadav0901@gmail.com" className="flex items-center space-x-3 text-lg">
              <FaEnvelope className="text-primary" />
              <span>yashiyadav0901@gmail.com</span>
            </a>
            <a href="tel:+12602468543" className="flex items-center space-x-3 text-lg">
              <FaPhone className="text-primary" />
              <span>(260) 246-8543</span>
            </a>
            <a href="https://www.linkedin.com/in/yashiyadav/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-lg">
              <FaLinkedin className="text-primary" />
              <span>linkedin.com/in/yashiyadav</span>
            </a>
            <a href="https://github.com/yashiyadav1" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-lg">
              <FaGithub className="text-primary" />
              <span>github.com/yashiyadav1</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;