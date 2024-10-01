// File: src/components/Skills.js
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
    <section id="skills" className="bg-gray-200 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <div className="text-4xl mb-2 text-primary">{skill.icon}</div>
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;