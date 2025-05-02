import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      name: "Rajiv Mehta",
      role: "Digital Banking Director",
      company: "Axis Bank",
      content: "RING has transformed our credit card marketing campaigns. We've seen a 42% increase in applications and the multilingual AI has helped us reach previously underserved customers in tier 2 and 3 cities.",
      image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      logo: "AB"
    },
    {
      name: "Priya Sharma",
      role: "Customer Acquisition Head",
      company: "HDFC Life Insurance",
      content: "The post-call analysis RING provides has been game-changing for our team. We can now identify qualified leads with much higher precision and our agents are focusing their time on customers with genuine interest.",
      image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      logo: "HL"
    },
    {
      name: "Vikram Singh",
      role: "CTO",
      company: "IndusInd Bank",
      content: "Implementing RING was surprisingly simple. Within weeks, we were seeing results from our campaigns. The AI's ability to handle complex conversations about financial products in regional languages has exceeded our expectations.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      logo: "IB"
    }
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <section id="testimonials" className="py-20 bg-gray-950 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-blue-700/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              Customer Success Stories
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            See how leading financial institutions are transforming customer engagement with RING
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-full md:w-1/3">
                        <div className="relative h-40 w-40 md:h-48 md:w-48 rounded-lg overflow-hidden mb-4 mx-auto">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <div className="inline-block bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mb-3 border-2 border-purple-500">
                            <span className="font-bold text-sm text-purple-400">{testimonial.logo}</span>
                          </div>
                          <div className="flex justify-center md:justify-start mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="w-full md:w-2/3">
                        <blockquote className="text-gray-300 text-lg mb-6 relative">
                          <span className="text-5xl text-purple-500/30 absolute -top-6 -left-2">"</span>
                          {testimonial.content}
                          <span className="text-5xl text-purple-500/30 absolute -bottom-10 right-0">"</span>
                        </blockquote>
                        <div className="mt-6">
                          <p className="font-semibold text-white">{testimonial.name}</p>
                          <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevSlide}
              className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-200"
              disabled={isAnimating}
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentIndex(index);
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 w-8' 
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-200"
              disabled={isAnimating}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;