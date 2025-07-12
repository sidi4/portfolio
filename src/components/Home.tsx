import React from 'react';
// import AnimatedBackground from './AnimatedBackground';

const Home = () => {
  return (
    <div className="min-h-[50vh] flex items-center font-sans relative pt-24">
      {/* <AnimatedBackground /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left side - Intro Text */}
          <div className="flex flex-col items-start justify-center space-y-4 animate-fade-in">
            <div className="space-y-1">
              <p className="text-base text-white font-semibold">Hi, <span className="inline-block">👋</span></p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-200">My Name is</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">Sidi Mohamed Jeddou</h1>
              <p className="text-base sm:text-lg md:text-xl text-blue-200 font-medium mt-1">Master's Student in Communication Systems Networks & IoT Enthusiast</p>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4 mt-2">
              <a href="https://github.com/medbbh" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors" aria-label="GitHub">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/sidi-mohamed-jeddou-574229225/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
              </a>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center md:justify-end animate-fade-in mt-8 md:mt-0">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-blue-400 opacity-40 blur-lg group-hover:opacity-60 transition-opacity duration-300"></div>
              <img
                src="/WhatsApp Image 2025-06-03 at 22.46.14.jpeg"
                alt="Sidi Mohamed Jeddou"
                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-2 border-white relative z-10 transition-transform duration-300 group-hover:scale-105"
                style={{
                  objectPosition: 'center',
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 