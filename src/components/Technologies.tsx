import React from 'react';
import AnimatedBackground from './AnimatedBackground';

const Technologies = () => {
  const technologies = [
    {
      category: "Frontend",
      items: ["React","Tailwind CSS", "HTML5", "CSS3", "JavaScript"]
    },
    {
      category: "Backend",
      items: ["Laravel", "Python", "PHP", "Django", "REST APIs"]
    },
    {
      category: "Database",
      items: ["Supabase", "MySQL", "MongoDB"]
    },
    {
      category: "DevOps & Tools",
      items: ["Git", "Docker", "AWS", "Linux"]
    },
    {
      category: "IoT & Networking",
      items: ["Arduino", "Raspberry Pi", "MQTT", "TCP/IP", "Network Security"]
    }
  ];

  return (
    <div className="min-h-screen flex items-center font-sans relative">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full m-8 relative z-10">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Technologies & Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              <h2 className="text-2xl font-bold text-cyan-200 mb-4">{tech.category}</h2>
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item, itemIndex) => (
                  <span 
                    key={itemIndex}
                    className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies; 