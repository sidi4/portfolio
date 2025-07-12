import React from 'react';
import AnimatedBackground from './AnimatedBackground';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center font-sans relative">
      <AnimatedBackground />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full m-8 relative z-10">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Contact</h1>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4">
              <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-cyan-200">LinkedIn</h2>
                <p className="text-gray-300 mt-2 mb-4">730 followers</p>
                <a 
                  href="https://www.linkedin.com/in/sidi-mohamed-jeddou-574229225/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-center"
                >
                  Visit My LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 