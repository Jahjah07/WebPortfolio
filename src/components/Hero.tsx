import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const texts = [
    "Jahred Uy",
    "a Full-Stack Developer"
  ];
  
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < currentFullText.length) {
        setCurrentText(currentFullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setCurrentText(currentFullText.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (currentIndex === currentFullText.length && !isDeleting) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (currentIndex === 0 && isDeleting) {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-32 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-60 left-1/2 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute bottom-60 right-20 w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-2000"></div>
        
        {/* Floating shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 border-2 border-blue-300 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-6 h-6 border-2 border-purple-300 rounded-full animate-spin-slow-reverse"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-1000"></div>
      </div>
      
      <div className="container-custom section-padding text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder with animation */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center animate-float shadow-2xl">
            <span className="text-4xl font-bold text-white animate-pulse">JU</span>
          </div>

          {/* Main Heading with cycling typing effect */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6 animate-fade-in">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-gradient">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Subtitle with highlighted text */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Full-Stack Developer passionate about{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 font-semibold">
              creating beautiful, functional, and user-friendly web applications
            </span>
          </p>

          {/* Call to Action Buttons with hover animations */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <button
              onClick={scrollToContact}
              className="btn-primary text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Get In Touch
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-secondary text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              View My Work
            </button>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm text-gray-500 dark:text-gray-400 animate-pulse">Scroll Down</span>
              <svg
                className="w-6 h-6 text-gray-400 dark:text-gray-500 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 