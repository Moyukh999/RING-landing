import React, { useState } from 'react';
import { Play } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Smart Customer Targeting",
      description: "RING analyzes your customer data to identify the most promising segments based on demographics, behavior, and financial profiles.",
      image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "AI-Powered Communication",
      description: "Our AI initiates personalized calls and emails in the customer's preferred language, adapting to their responses in real-time.",
      image: "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Intelligent Analysis",
      description: "After each interaction, RING provides detailed insights, sentiment analysis, and identifies qualified leads for your team.",
      image: "https://images.pexels.com/photos/6289028/pexels-photo-6289028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Continuous Optimization",
      description: "The system learns from each interaction to improve future communications and increase conversion rates over time.",
      image: "https://images.pexels.com/photos/7654586/pexels-photo-7654586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-700/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              How RING Works
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our streamlined process transforms your customer outreach from start to finish
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`px-4 py-3 rounded-lg text-left transition-all duration-300 border ${
                  activeStep === index
                    ? 'bg-gray-800 border-purple-500 shadow-lg shadow-purple-500/10'
                    : 'bg-gray-900/50 border-gray-800 hover:bg-gray-800/70'
                }`}
              >
                <div className="flex items-center mb-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    activeStep === index
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500'
                      : 'bg-gray-700'
                  }`}>
                    <span className="text-white text-sm font-medium">{index + 1}</span>
                  </div>
                  <h3 className={`text-sm font-medium truncate ${
                    activeStep === index ? 'text-white' : 'text-gray-300'
                  }`}>
                    {step.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
          
          {/* Active Step Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4 text-white">{steps[activeStep].title}</h3>
              <p className="text-gray-300 mb-8">{steps[activeStep].description}</p>
              
              {activeStep === 1 && (
                <div className="mb-8 bg-gray-900 rounded-lg p-5 border border-gray-800">
                  <h4 className="font-medium text-white mb-3">Sample AI Conversation</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-2">
                      <span className="text-purple-400 font-medium">RING AI:</span>
                      <p className="text-gray-300">
                        "नमस्ते राजेश जी, मैं एक्सिस बैंक से आभा बात कर रही हूँ। क्या आप हमारे नए रिवॉर्ड क्रेडिट कार्ड के बारे में जानना चाहेंगे?"
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-400 font-medium">Customer:</span>
                      <p className="text-gray-400">
                        "हां, लेकिन मुझे फीस के बारे में जानना है।"
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-purple-400 font-medium">RING AI:</span>
                      <p className="text-gray-300">
                        "बिलकुल राजेश जी, पहले साल के लिए कोई वार्षिक शुल्क नहीं है, और उसके बाद ₹1,000 + कर, जो ₹5,000 से अधिक के वार्षिक खर्च पर माफ़ हो जाता है।"
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center gap-2">
                  Schedule Demo
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border border-gray-700 hover:border-gray-600 flex items-center gap-2">
                  <Play size={16} />
                  Watch Video
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
                <img 
                  src={steps[activeStep].image} 
                  alt={steps[activeStep].title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;