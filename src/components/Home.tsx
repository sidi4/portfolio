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
              <p className="text-base sm:text-lg md:text-xl text-blue-200 font-medium mt-1">Master's Student in Communication Systems Networks &amp; IoT Enthusiast</p>
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