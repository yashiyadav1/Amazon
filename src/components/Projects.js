// File: src/components/Projects.js (continued)
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
    <section id="projects" className="bg-gray-200 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <ul className="list-disc list-inside space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
