import React from 'react';
import { PhoneCall, Mail, MapPin, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-white mb-6">
              <PhoneCall className="h-7 w-7 text-purple-500" strokeWidth={1.5} />
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">RING</span>
            </div>
            <p className="text-gray-400 mb-6">
              AI-powered communication platform helping businesses connect with customers through 
              personalized outreach in multiple languages.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Banking & Finance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Enterprise</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Telecommunications</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">E-commerce</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-purple-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">contact@ringai.com</span>
              </li>
              <li className="flex items-start gap-3">
                <PhoneCall size={20} className="text-purple-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">+91 (800) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-purple-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  One World Trade Center<br />
                  New York, NY 10007
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} RING AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;