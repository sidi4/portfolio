import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white fixed w-full z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/"
              className="text-black text-2xl font-extrabold hover:text-blue-600 transition-colors"
            >
              Sidi Mohamed
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/"
              className={`text-black hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors relative ${
                isActive('/') ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about"
              className={`text-black hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors relative ${
                isActive('/about') ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600' : ''
              }`}
            >
              About
            </Link>
            <Link 
              to="/technologies"
              className={`text-black hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors relative ${
                isActive('/technologies') ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600' : ''
              }`}
            >
              Technologies
            </Link>
            <Link 
              to="/projects"
              className={`text-black hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors relative ${
                isActive('/projects') ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600' : ''
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/contact"
              className={`text-black hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors relative ${
                isActive('/contact') ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600' : ''
              }`}
            >
              Contact
            </Link>
            
            
            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/"
              onClick={() => setIsOpen(false)}
              className={`text-black hover:text-blue-600 block w-full text-left px-3 py-2 rounded-md text-base font-medium relative ${
                isActive('/') ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`text-black hover:text-blue-600 block w-full text-left px-3 py-2 rounded-md text-base font-medium relative ${
                isActive('/about') ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600' : ''
              }`}
            >
              About
            </Link>
            <Link 
              to="/technologies"
              onClick={() => setIsOpen(false)}
              className={`text-black hover:text-blue-600 block w-full text-left px-3 py-2 rounded-md text-base font-medium relative ${
                isActive('/technologies') ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600' : ''
              }`}
            >
              Technologies
            </Link>
            <Link 
              to="/projects"
              onClick={() => setIsOpen(false)}
              className={`text-black hover:text-blue-600 block w-full text-left px-3 py-2 rounded-md text-base font-medium relative ${
                isActive('/projects') ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600' : ''
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`text-black hover:text-blue-600 block w-full text-left px-3 py-2 rounded-md text-base font-medium relative ${
                isActive('/contact') ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600' : ''
              }`}
            >
              Contact
            </Link>
            <div className="flex space-x-4 mt-2 px-3">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-700">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-800">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 