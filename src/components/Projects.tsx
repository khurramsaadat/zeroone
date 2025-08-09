"use client";
import React from 'react';
import Image from 'next/image';

const projects = [
  {
    id: '1',
    name: 'aiflix-stream',
    description: 'Owned by khurramsaadat\'s team',
    url: 'https://aiflix-stream.netlify.app/',
    screenshot_url: 'https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: '2',
    name: 'dfre',
    description: 'Owned by khurramsaadat\'s team',
    url: 'https://dfre.netlify.app/',
    screenshot_url: 'https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: '3',
    name: 'stockstrackerapp',
    description: 'Owned by khurramsaadat\'s team',
    url: 'https://stockstrackerapp.netlify.app/',
    screenshot_url: 'https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: '4',
    name: 'personalityapp',
    description: 'Owned by khurramsaadat\'s team',
    url: 'https://personalityapp.netlify.app/',
    screenshot_url: 'https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
<div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-48">
<Image src={project.screenshot_url} alt={project.name} fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
