import React from 'react';
import AnimatedBackground from './AnimatedBackground';

const About = () => {
  return (
    <div className="min-h-screen flex items-center font-sans relative pt-20">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full m-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
          <h1 className="text-4xl font-bold text-white mb-6">About Me</h1>
          <p className="text-lg text-gray-200 mb-8">
            I'm a Software Engineer passionate about IoT, cloud computing, mobile development, and networking. I love building scalable applications and exploring new technologies
          </p>

          <h2 className="text-3xl font-bold text-white mb-6">Education</h2>

          <div className="space-y-8">
            {/* Master's Program */}
            <div className="border-b border-gray-700 pb-4 last:border-b-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-white">Master's in Communicating System Networks</h3>
                  <p className="text-gray-300 text-sm mt-1">
                    <span className="inline-flex items-center"><i className="fas fa-school mr-2"></i>University of Nouakchott</span>
                    <span className="inline-flex items-center ml-4"><i className="fas fa-map-marker-alt mr-2"></i>Nouakchott, Mauritania</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-green-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-1">Master's Program</span>
                  <p className="text-gray-300 text-sm">2023 – Present</p>
                </div>
              </div>
            </div>

            {/* Bachelor's Program */}
            <div className="border-b border-gray-700 pb-4 last:border-b-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-white">Bachelor's in Computer Methods Applied to Business Management</h3>
                  <p className="text-gray-300 text-sm mt-1">
                    <span className="inline-flex items-center"><i className="fas fa-school mr-2"></i>University of Nouakchott</span>
                    <span className="inline-flex items-center ml-4"><i className="fas fa-map-marker-alt mr-2"></i>Nouakchott, Mauritania</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-green-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-1">Bachelor's Program</span>
                  <p className="text-gray-300 text-sm">2019 – 2023</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6 mt-8">Work Experience</h2>

          <div className="space-y-8">
            {/* Full Stack Web Developer Intern - Chinguitel */}
            <div className="border-b border-gray-700 pb-4 last:border-b-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-white">Full Stack Web Developer Intern</h3>
                  <p className="text-gray-300 text-sm mt-1">
                    <span className="inline-flex items-center"><i className="fas fa-building mr-2"></i>Chinguitel</span>
                    <span className="inline-flex items-center ml-4"><i className="fas fa-map-marker-alt mr-2"></i>Nouakchott, Mauritania</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-green-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-1">Internship</span>
                  <p className="text-gray-300 text-sm">August - September 2022</p>
                </div>
              </div>
            </div>

            {/* Full Stack Web Developer Intern - Syskat Technology */}
            <div className="border-b border-gray-700 pb-4 last:border-b-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-white">Full Stack Web Developer Intern</h3>
                  <p className="text-gray-300 text-sm mt-1">
                    <span className="inline-flex items-center"><i className="fas fa-building mr-2"></i>Syskat Technology</span>
                    <span className="inline-flex items-center ml-4"><i className="fas fa-map-marker-alt mr-2"></i>Nouakchott, Mauritania</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-green-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-1">Internship</span>
                  <p className="text-gray-300 text-sm">February - April 2023</p>
                </div>
              </div>
            </div>

            {/* Full Stack Web Developer Intern - MTNIMA */}
            <div className="border-b border-gray-700 pb-4 last:border-b-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-white">Full Stack Web Developer Intern</h3>
                  <p className="text-gray-300 text-sm mt-1">
                    <span className="inline-flex items-center"><i className="fas fa-building mr-2"></i>MTNIMA</span>
                    <span className="inline-flex items-center ml-4"><i className="fas fa-map-marker-alt mr-2"></i>Nouakchott, Mauritania</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-green-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-1">Internship</span>
                  <p className="text-gray-300 text-sm">October - December 2023</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6 mt-8">Achievements</h2>

          <div className="space-y-4">
            {/* Add your achievements here */}
            <div className="bg-white/5 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-white mb-2">I2COMSAPP-2024: International Conference on Artificial Intelligence Organizer</h3>
              <p className="text-gray-300">
                Played a pivotal role in organizing the International Conference on Artificial Intelligence in Mauritania, contributing to the advancement of AI research and networking within the global community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 