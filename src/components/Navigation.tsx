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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 