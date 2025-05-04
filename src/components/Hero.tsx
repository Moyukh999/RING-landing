import React, { useEffect, useRef } from 'react';
import { ArrowRight, Headphones, BarChart } from 'lucide-react';


const Hero = () => {
  const animatedTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const textElement = animatedTextRef.current;
    if (!textElement) return;

    const phrases = [
      "regional languages",
      "thousands of customers",
      "intelligent analysis",
      "personalized outreach"
    ];
    
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    
    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        if (textElement) {
          textElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
          currentCharIndex--;
        }
        typeSpeed = 50;
      } else {
        if (textElement) {
          textElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
          currentCharIndex++;
        }
        typeSpeed = 100;
      }
      
      if (!isDeleting && currentCharIndex === currentPhrase.length) {
        // Pause at the end of typing
        typeSpeed = 1500;
        isDeleting = true;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        // Pause before typing next phrase
        typeSpeed = 500;
      }
      
      setTimeout(type, typeSpeed);
    };
    
    setTimeout(type, 1000);
  }, []);

  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-blue-700/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">AI-Powered Communication</span>
            <br />for the Modern Enterprise
          </h1>
          
          <div className="h-12 mb-8">
            <p className="text-xl md:text-2xl text-gray-300">
              Engage your customers with{" "}
              <span 
                ref={animatedTextRef} 
                className="inline-block min-w-12 text-purple-400 font-semibold"
              >
                regional languages
              </span>
            </p>
          </div>
          
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            RING helps banks, insurance companies and enterprises connect with customers 
            through AI-powered calls and emails, with multilingual support and powerful analytics.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button
  onClick={() => window.location.href = 'https://bob-front.vercel.app/dashboard'}
  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2"
>
  Get Started <ArrowRight size={20} />
</button>

            <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 border border-gray-700 hover:border-gray-600">
              Watch Demo
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center max-w-3xl mx-auto">
            <div className="p-4 bg-gray-900/70 backdrop-blur-sm rounded-lg border border-gray-800 transform transition-transform hover:scale-105">
              <div className="bg-purple-900/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Headphones className="text-purple-400" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-1">Multilingual</h3>
              <p className="text-gray-400 text-sm">Support for 20+ regional languages</p>
            </div>
            
            <div className="p-4 bg-gray-900/70 backdrop-blur-sm rounded-lg border border-gray-800 transform transition-transform hover:scale-105">
              <div className="bg-blue-900/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <BarChart className="text-blue-400" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-1">Smart Analysis</h3>
              <p className="text-gray-400 text-sm">AI-powered conversation insights</p>
            </div>
            
            <div className="col-span-2 md:col-span-1 p-4 bg-gray-900/70 backdrop-blur-sm rounded-lg border border-gray-800 transform transition-transform hover:scale-105">
              <div className="bg-indigo-900/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <PhoneIcon className="text-indigo-400" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-1">High Conversion</h3>
              <p className="text-gray-400 text-sm">3x more effective than traditional outreach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom Phone Icon
const PhoneIcon = ({ size = 24, className = "" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      <path d="M14.5 2v4"></path>
      <path d="M16.5 4h-4"></path>
    </svg>
  );
};

export default Hero;