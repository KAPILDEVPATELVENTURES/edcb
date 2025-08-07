
'use client';

import { useEffect, useRef, useState } from 'react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  details: string[];
  ctaText: string;
  whatsappMessage: string;
  faqItems?: string[];
}

function Popup({ isOpen, onClose, title, details, ctaText, whatsappMessage, faqItems }: PopupProps) {
  if (!isOpen) return null;

  const handleWhatsApp = () => {
    window.open(`https://wa.me/919594987678?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#2C2C2C] hover:text-[#005B63] transition-colors duration-200"
        >
          <i className="ri-close-line text-xl"></i>
        </button>
        
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-[#005B63] font-['Poppins'] mb-4">
            {title}
          </h3>
          
          {details.length > 0 && (
            <ul className="text-[#2C2C2C] font-['Poppins'] leading-relaxed space-y-2 mb-4">
              {details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#C49102] mr-2">•</span>
                  {detail}
                </li>
              ))}
            </ul>
          )}
          
          {faqItems && faqItems.length > 0 && (
            <div className="mt-6">
              <h4 className="text-lg font-bold text-[#005B63] font-['Poppins'] mb-3">FAQ</h4>
              <ul className="space-y-3">
                {faqItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#C49102] mr-2 font-bold">•</span>
                    <span className="text-[#2C2C2C] font-['Poppins'] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <button
          onClick={handleWhatsApp}
          className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-3 whitespace-nowrap min-h-[44px]"
        >
          <i className="ri-whatsapp-line text-xl"></i>
          {ctaText}
        </button>
      </div>
    </div>
  );
}

export default function WhyUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [activePopup, setActivePopup] = useState<number | null>(null);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const strengths = [
    {
      title: "Stakeholder-First Focus",
      image: "https://readdy.ai/api/search-image?query=diverse%20Indian%20families%20elderly%20people%20and%20middle-class%20residents%20in%20traditional%20and%20modern%20Indian%20clothing%20sitting%20in%20warm%20community%20meeting%20discussing%20housing%20society%20plans%2C%20Indian%20cooperative%20society%20members%20engaged%20in%20transparent%20dialogue%20with%20housing%20development%20consultants%2C%20collaborative%20decision%20making%20in%20Indian%20housing%20society%20community%20hall%2C%20warm%20interior%20lighting%20and%20professional%20consultation%20atmosphere&width=600&height=400&seq=stakeholder-focus-new&orientation=landscape",
      summary: "We align with societies, not just developers, ensuring transparent collaboration.",
      details: [
        "Consent-driven planning with member education",
        "Fair contracts prioritizing society interests",
        "Transparent communication throughout the project",
        "Regular updates and feedback sessions",
        "Protection of member rights and benefits"
      ],
      ctaText: "Align With Us",
      whatsappMessage: "Hi EDCB, I appreciate your stakeholder-first approach. Let's discuss.",
      faqItems: [
        "What: Stakeholder-first approach ensuring all members' interests are prioritized in development decisions",
        "Why: To build trust and ensure successful project outcomes through transparent collaboration",
        "When: Applied throughout the entire project lifecycle from initial consultation to completion",
        "To Do: Engage all stakeholders early, maintain open communication, document agreements clearly",
        "Awareness: Stakeholder alignment is crucial for project success and long-term satisfaction"
      ]
    },
    {
      title: "Regulatory Expertise",
      image: "https://readdy.ai/api/search-image?query=Indian%20legal%20experts%20and%20government%20officials%20in%20modern%20Indian%20government%20office%20reviewing%20RERA%20and%20MHADA%20documents%2C%20Indian%20bureaucrats%20examining%20construction%20permits%20and%20regulatory%20paperwork%2C%20professional%20Indian%20legal%20consultation%2C%20bright%20office%20environment%20with%20Indian%20regulatory%20compliance%20documents%20and%20approvals&width=600&height=400&seq=regulatory-expertise&orientation=landscape",
      summary: "We simplify RERA, MHADA, ULC, and DCPR complexities into actionable steps.",
      details: [
        "Legal navigation through complex regulations",
        "Document preparation and submission",
        "Authority liaison and follow-up",
        "Compliance monitoring and updates",
        "Risk mitigation and contingency planning"
      ],
      ctaText: "Simplify Compliance",
      whatsappMessage: "Hi EDCB, I want help with approvals and compliance.",
      faqItems: [
        "What: Expert guidance through complex regulatory landscape including RERA, MHADA, ULC, and DCPR",
        "Why: To ensure full compliance while minimizing delays and avoiding legal complications",
        "When: Critical during approval phases and maintained throughout project execution",
        "To Do: Gather all required documents, understand regulatory requirements, maintain compliance records",
        "Awareness: Regulatory compliance is mandatory and non-compliance can result in project delays and penalties"
      ]
    },
    {
      title: "360° Project Support",
      image: "https://readdy.ai/api/search-image?query=comprehensive%20Indian%20construction%20project%20management%20scene%20with%20Indian%20architects%2C%20engineers%20and%20project%20managers%20coordinating%20various%20aspects%20of%20development%2C%20Indian%20construction%20site%20with%20PMC%20team%20overseeing%20progress%2C%20integrated%20project%20support%20with%20Indian%20professionals%20managing%20design%20finance%20and%20execution%20phases&width=600&height=400&seq=project-support&orientation=landscape",
      summary: "From feasibility to final handover, we offer integrated advisory + execution.",
      details: [
        "Project Management Consulting (PMC)",
        "Design coordination and approval",
        "Financial structuring and funding support",
        "Construction oversight and quality control",
        "Post-handover support and maintenance guidance"
      ],
      ctaText: "Get Full Support",
      whatsappMessage: "Hi EDCB, I want end-to-end development support.",
      faqItems: [
        "What: Complete project support from initial feasibility to final handover and beyond",
        "Why: To provide comprehensive service that ensures project success at every stage",
        "When: Continuous support throughout the entire project lifecycle, typically 2-4 years",
        "To Do: Define project scope, establish milestones, maintain regular communication with all teams",
        "Awareness: 360° support reduces risks, ensures quality, and provides peace of mind throughout development"
      ]
    }
  ];

  return (
    <section 
      id="why-us"
      ref={sectionRef}
      className="w-full bg-[#F8F6F0] py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#005B63] font-['Poppins'] mb-4">
              Why Us
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-[#C49102] mx-auto mb-4 sm:mb-6"></div>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-[#C49102]/20 overflow-hidden transform ${
                  isVisible ? `opacity-100 translate-y-0` : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img
                    src={strength.image}
                    alt={strength.title}
                    className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#C49102] rounded-full flex items-center justify-center mr-2 sm:mr-3">
                      <i className="ri-star-fill text-white text-sm sm:text-base"></i>
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold text-[#005B63] font-['Poppins']">
                      {strength.title}
                    </h3>
                  </div>
                  
                  <p className="text-[#2C2C2C] font-['Poppins'] leading-relaxed mb-4 sm:mb-6">
                    • {strength.summary}
                  </p>

                  {/* Button Container */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => setActivePopup(index)}
                      className="flex-1 bg-[#005B63] hover:bg-[#C49102] text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap group min-h-[44px] text-sm"
                    >
                      <i className="ri-information-line text-lg group-hover:scale-110 transition-transform duration-200"></i>
                      Know More
                    </button>
                    
                    <button
                      onClick={() => setActiveFAQ(index)}
                      className="bg-[#C49102] hover:bg-[#005B63] text-white font-bold py-3 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center min-h-[44px]"
                    >
                      <i className="ri-question-line text-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Regular Popups */}
      {strengths.map((strength, index) => (
        <Popup
          key={`popup-${index}`}
          isOpen={activePopup === index}
          onClose={() => setActivePopup(null)}
          title={strength.title}
          details={strength.details}
          ctaText={strength.ctaText}
          whatsappMessage={strength.whatsappMessage}
        />
      ))}

      {/* FAQ Popups */}
      {strengths.map((strength, index) => (
        <Popup
          key={`faq-${index}`}
          isOpen={activeFAQ === index}
          onClose={() => setActiveFAQ(null)}
          title={strength.title}
          details={[]}
          ctaText={strength.ctaText}
          whatsappMessage={strength.whatsappMessage}
          faqItems={strength.faqItems}
        />
      ))}

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
