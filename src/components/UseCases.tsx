import React, { useState } from 'react';
import { Building2, Building, Landmark, ChevronRight } from 'lucide-react';

const UseCases = () => {
  const [activeTab, setActiveTab] = useState('banking');

  const tabs = [
    { id: 'banking', label: 'Banking', icon: <Landmark size={20} /> },
    { id: 'insurance', label: 'Insurance', icon: <Building size={20} /> },
    { id: 'enterprise', label: 'Enterprise', icon: <Building2 size={20} /> }
  ];

  return (
    <section id="use-cases" className="py-20 bg-gray-950 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-60 left-20 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              Industry Solutions
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            See how RING is transforming communication across different industries
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Content */}
          <div className="w-full max-w-5xl">
            {activeTab === 'banking' && (
              <UseCaseContent
                title="Banking & Financial Services"
                description="Increase product adoption and customer engagement through personalized outreach based on account activity, financial goals, and life events."
                image="https://images.pexels.com/photos/7821483/pexels-photo-7821483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                benefits={[
                  "Increase credit card applications by 35%",
                  "Boost mortgage pre-approvals by 28%",
                  "Enhance customer satisfaction with personalized financial advice",
                  "Reduce cost-per-acquisition by 42% compared to traditional outreach"
                ]}
              />
            )}
            
            {activeTab === 'insurance' && (
              <UseCaseContent
                title="Insurance Companies"
                description="Drive policy renewals and cross-selling opportunities through timely, personalized communication that addresses customer needs and risk profiles."
                image="https://images.pexels.com/photos/7691725/pexels-photo-7691725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                benefits={[
                  "Increase policy renewal rates by 24%",
                  "Drive 40% more cross-selling of complementary insurance products",
                  "Reduce customer service costs with automated policy explanations",
                  "Identify high-value customers for personalized coverage recommendations"
                ]}
              />
            )}
            
            {activeTab === 'enterprise' && (
              <UseCaseContent
                title="Enterprise Solutions"
                description="Transform customer outreach and lead qualification across departments with scalable AI communication that integrates with existing CRM systems."
                image="https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                benefits={[
                  "Qualify leads 3x faster than traditional methods",
                  "Scale outreach efforts without increasing headcount",
                  "Maintain consistent brand voice across all communications",
                  "Generate detailed analytics on customer preferences and objections"
                ]}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

interface UseCaseContentProps {
  title: string;
  description: string;
  image: string;
  benefits: string[];
}

const UseCaseContent = ({ title, description, image, benefits }: UseCaseContentProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="order-2 lg:order-1">
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-gray-300 mb-8">{description}</p>
        
        <ul className="space-y-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-1">
                <ChevronRight size={16} className="text-white" />
              </div>
              <span className="text-gray-300">{benefit}</span>
            </li>
          ))}
        </ul>
        
        <button className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center gap-2">
          Explore {title.split(' ')[0]} Solutions
        </button>
      </div>
      
      <div className="order-1 lg:order-2 h-72 sm:h-96 lg:h-auto rounded-2xl overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default UseCases;