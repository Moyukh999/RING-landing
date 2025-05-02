import React, { useState, useEffect } from 'react';
import { PhoneCall, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="flex items-center gap-2 text-2xl font-bold text-white">
              <PhoneCall className="h-8 w-8 text-purple-500" strokeWidth={1.5} />
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">RING</span>
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#use-cases" className="text-gray-300 hover:text-white transition-colors">Use Cases</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              Request Demo
            </button>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 shadow-lg animate-fadeIn">
          <div className="px-4 py-4 space-y-4">
            <a 
              href="#features" 
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#use-cases" 
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Use Cases
            </a>
            <a 
              href="#how-it-works" 
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-all duration-200 shadow-lg hover:shadow-purple-500/25">
              Request Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;