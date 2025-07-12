import React from 'react';
import AnimatedBackground from './AnimatedBackground';

const Projects = () => {
  const projects = [
    {
      title: "RIM VENT",
      description: "Une Application pour la gestion des ventes.",
      technologies: ["Laravel", "Angular", "MySQL",],
      image: "/RIMvent.jpeg",
      link: "https://github.com/medbbh/Gestion_vente.git"
    },
    {
      title: "Thimar - AI Productivity Platform",
      description: "A Goal and Task management app built specifically for Muslims.",
      technologies: ["React", "TypeScript", "Django", "Supabase","AI"],
      image: "/Thimar.jpeg",
      link: "https://github.com/thimar-app/thimar.git"
    },
    {
      title: "IoT Smoke ,Gas & Flame Detection System",
      description: "This project is an IoT-based Smoke, Gas & Flame Detection System that uses an MQ-2 sensor to detect gas and smoke levels and a Flame Sensor to detect fire. It sends real-time notifications via Blynk and stores data in a MySQL database for monitoring.",
      technologies: ["Php", "Html", "Js","css", "Arduino", "Blynk","MySQL", "ESP32"],
      image: "/Gaz.jpeg",
      link: "https://github.com/sidi4/IOT.git"
    },
    {
      title: "PACMAN",
      description: "This project is an IoT-based Smoke, Gas & Flame Detection System that uses an MQ-2 sensor to detect gas and smoke levels and a Flame Sensor to detect fire. It sends real-time notifications via Blynk and stores data in a MySQL database for monitoring.",
      technologies: ["Python", , "Pygame"],
      image: "/Pacman.jpeg",
      link: "https://github.com/medbbh/pac-man.git"
    },
    {
      title: "Web Application for a medical laboratory",
      description: "This project is a web application for a medical laboratory that allows the laboratory to manage its patients, tests, and results.",
      technologies: ["Php", "Html", "Js","css", "MySQL", "Laravel"],
      image: "/labo].png",
      link: "https://github.com/aliyon1/PFE.git"
    }
  ];

  return (
    <div className="min-h-screen flex items-center font-sans relative">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full m-8 relative z-10">
        <h1 className="text-4xl font-bold text-white mb-8 text-center mt-12">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-800">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-50 object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-cyan-200 mb-3">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 text-gray-900 rounded-lg shadow hover:bg-gray-100 transition-colors font-semibold border border-gray-300 mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.186 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                  </svg>
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 