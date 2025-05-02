import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-700/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-gray-900/80 backdrop-blur-md rounded-3xl border border-gray-800 p-8 md:p-12 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Transform Your Customer Communications?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Join leading financial institutions that are using RING to drive conversions, 
              enhance customer experiences, and gain valuable insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 hover:border-purple-500/30 transition-all duration-300">
              <h3 className="font-semibold text-xl mb-3 text-white">Schedule a Demo</h3>
              <p className="text-gray-400 mb-6">
                See RING in action with a personalized demo tailored to your business needs.
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 w-full flex items-center justify-center gap-2">
                Book a Demo <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 hover:border-purple-500/30 transition-all duration-300">
              <h3 className="font-semibold text-xl mb-3 text-white">Start a Free Trial</h3>
              <p className="text-gray-400 mb-6">
                Experience the power of AI-driven communication with a 14-day trial.
              </p>
              <button className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg w-full flex items-center justify-center gap-2">
                Start Free Trial <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 mb-4">Have questions? We're here to help.</p>
            <button className="bg-transparent hover:bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-gray-700 hover:border-gray-600 inline-flex items-center gap-2">
              Contact Sales Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;