import React from 'react';
import { FaPython, FaJava, FaReact, FaDocker, FaDatabase } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiMicrosoftazure, SiKubernetes, SiMongodb } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'TensorFlow', icon: <SiTensorflow /> },
    { name: 'PyTorch', icon: <SiPytorch /> },
    { name: 'Azure', icon: <SiMicrosoftazure /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Kubernetes', icon: <SiKubernetes /> },
    { name: 'SQL', icon: <FaDatabase /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;