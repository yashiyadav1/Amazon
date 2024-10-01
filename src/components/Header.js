import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>Yashi Yadav</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="social-icons">
          <a href="https://github.com/yashiyadav1" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/yashiyadav/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;