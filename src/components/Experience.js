import React from 'react';

const experiences = [
  {
    title: 'Software QA Intern',
    company: 'Nokia',
    period: 'May 2024 - Present',
    description: [
      'Developed RESTful API using FastAPI for XR Edge Cloud management.',
      'Engineered backend system for network resource management using Kubernetes custom resources and Gitea.',
      'Implemented error handling and logging in microservices architecture.',
      'Developed AI model deployment POC in microservices architecture.',
      'Implemented FAISS-based vector database, reducing query time significantly.',
      'Created NLP scripts for network log analysis, speeding up issue identification.',
    ],
  },
  {
    title: 'D365 Developer Intern',
    company: 'Vera Bradley',
    period: 'May 2022 – August 2022',
    description: [
      'Enhanced Microsoft Dynamics 365 by resolving ITR/Bugs backlogs, improving the overall ERP system.',
      'Designed Power Automate Flows for alerts on 24 critical Batch Jobs in D365, improving system responsiveness and error handling.',
    ],
  },
  {
    title: 'Graduate Research Assistant',
    company: 'Purdue University Fort Wayne',
    period: 'August 2023 - December 2024',
    description: [
      'Designing and implementing a deep learning model for steganographic applications using TensorFlow.',
      'Developed custom DWT-based convolutional layer, improving image hiding capacity by 30%.',
      'Developed custom layers and loss functions to optimize model performance.',
      'Created a comprehensive pipeline for dataset preprocessing, model training, and evaluation.',
      'Developed a novel DWT-based database to optimize the training process.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="item">
            <h3>{exp.title}</h3>
            <p className="meta">{exp.company} | {exp.period}</p>
            <ul>
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;