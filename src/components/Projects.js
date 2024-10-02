import React from 'react';

const projects = [
  {
    title: 'Adaptive Reading Companion (ARC)',
    description: 'Chrome extension to enable bionic reading for people with Meares Irlen syndrome and adding options to assist online text reading for different disabilities.',
    features: [
      'Font customization',
      'Background color changes',
      'Focus mode',
      'Text-to-speech',
      'NLP techniques for text analysis and vocabulary assistance',
    ],
  },
  {
    title: 'Jerry: The Virtual Assistant',
    description: 'A virtual voice assistant using ChatGPT\'s API for communication and answering user queries.',
    features: [
      'Voice recognition model using PyTorch',
      'Context-aware conversations and task execution',
      'Google\'s API integration for web search capabilities',
    ],
  },
  {
    title: 'Binary Classification of Hateful Speech on Social Media',
    description: 'Scalable content moderation system using CNN, GloVe-enhanced CNN, and fine-tuned BERT models.',
    features: [
      'Achieved 93.50% accuracy with the BERT model',
      'Efficient matching algorithm for content classification',
      'Dataset of 450,000+ sentences',
    ],
  },
  {
    title: 'American Sign Language (ASL) Recognition',
    description: 'Convolutional Neural Network (CNN) architecture using TensorFlow for real-time hand gesture recognition.',
    features: [
      'Parallel processing for data pre-processing',
      'Data augmentation techniques',
      'LSTM layers for temporal sequence modeling in video-based ASL recognition',
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;