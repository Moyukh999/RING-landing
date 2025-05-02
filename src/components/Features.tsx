import React from 'react';
import { 
  MicIcon, 
  Languages, 
  PieChart, 
  BarChart3, 
  Users, 
  Fingerprint 
} from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-700/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-40 w-64 h-64 bg-blue-700/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              Powerful Features
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            RING transforms how businesses communicate with customers using cutting-edge AI technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
  return (
    <div 
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="mb-5 inline-block rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-3 text-purple-400 group-hover:text-purple-300 transition-colors">
        {feature.icon}
      </div>
      <h3 className="font-semibold text-xl mb-3 group-hover:text-white transition-colors">{feature.title}</h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{feature.description}</p>
    </div>
  );
};

const features: Feature[] = [
  {
    icon: <MicIcon size={24} />,
    title: "AI Voice Technology",
    description: "Natural-sounding AI voices that adapt tone and style based on conversation context and customer profiles."
  },
  {
    icon: <Languages size={24} />,
    title: "Multilingual Support",
    description: "Engage customers in 20+ regional languages and dialects for more personal and effective communication."
  },
  {
    icon: <PieChart size={24} />,
    title: "Post-Call Analysis",
    description: "Comprehensive insights from each interaction, identifying customer sentiment and potential leads."
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Performance Dashboard",
    description: "Real-time analytics showing conversion rates, call effectiveness, and ROI across campaigns."
  },
  {
    icon: <Users size={24} />,
    title: "Customer Segmentation",
    description: "Target specific customer segments based on demographics, behaviors, and financial profiles."
  },
  {
    icon: <Fingerprint size={24} />,
    title: "Compliance & Security",
    description: "Bank-grade security with full regulatory compliance for financial services and sensitive data."
  }
];

export default Features;