
'use client';

import { useEffect, useRef, useState } from 'react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  ctaText: string;
  whatsappMessage: string;
  faqItems?: string[];
}

function Popup({ isOpen, onClose, title, content, ctaText, whatsappMessage, faqItems }: PopupProps) {
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
          {content && (
            <p className="text-[#2C2C2C] font-['Poppins'] leading-relaxed mb-4">
              {content}
            </p>
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

export default function HowWeWork() {
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

  const workSteps = [
    {
      title: "Strategic Assessment",
      image: "https://readdy.ai/api/search-image?query=Indian%20business%20professionals%20in%20formal%20attire%20conducting%20strategic%20planning%20meeting%20in%20modern%20Indian%20office%2C%20diverse%20team%20of%20Indian%20men%20and%20women%20analyzing%20documents%20and%20charts%2C%20Indian%20business%20consultation%2C%20bright%20office%20lighting%2C%20professional%20Indian%20corporate%20environment%20with%20city%20skyline%20view%2C%20strategic%20planning%20session&width=600&height=400&seq=assessment&orientation=landscape",
      summary: "We begin by aligning project goals, regulatory scope, and stakeholder needs.",
      content: "Our comprehensive strategic assessment includes feasibility study, society alignment, and legal overview. We evaluate your project's potential, analyze regulatory requirements, and ensure all stakeholders are aligned with the development vision.",
      ctaText: "Let's Assess",
      whatsappMessage: "Hi EDCB, I'd like to begin a feasibility and alignment assessment.",
      faqItems: [
        "What: Comprehensive project evaluation including feasibility, regulatory review, and stakeholder alignment",
        "Why: To identify potential challenges early and ensure project viability before significant investment",
        "When: Initial phase of any project, typically takes 2-4 weeks for complete assessment",
        "To Do: Gather all project documents, stakeholder details, and define clear objectives",
        "Awareness: Thorough assessment prevents costly mistakes and ensures informed decision-making"
      ]
    },
    {
      title: "Collaborative Structuring",
      image: "https://readdy.ai/api/search-image?query=diverse%20team%20of%20Indian%20architects%20urban%20planners%20and%20legal%20experts%20collaborating%20on%20architectural%20blueprints%20in%20modern%20Indian%20office%2C%20Indian%20professionals%20working%20together%20on%20construction%20drawings%20and%20building%20models%2C%20collaborative%20planning%20session%20with%20Indian%20consultants%20and%20engineers%20around%20conference%20table%2C%20bright%20professional%20workspace%20with%20architectural%20plans&width=600&height=400&seq=collaborative-structuring&orientation=landscape",
      summary: "We design viable frameworks for compliance, funding, and execution readiness.",
      content: "Our collaborative structuring involves RERA/MHADA facilitation, FSI strategy development, and partner identification. We create comprehensive frameworks that ensure regulatory compliance while maximizing project viability and stakeholder benefits.",
      ctaText: "Structure with Us",
      whatsappMessage: "Hi EDCB, I'm ready to discuss structuring our redevelopment.",
      faqItems: [
        "What: Development of project framework including legal structure, compliance roadmap, and execution plan",
        "Why: To create a solid foundation that ensures regulatory compliance and successful project delivery",
        "When: After assessment completion, takes 4-8 weeks depending on project complexity",
        "To Do: Finalize project scope, identify key stakeholders, prepare necessary documentation",
        "Awareness: Proper structuring is crucial for obtaining approvals and securing funding"
      ]
    },
    {
      title: "Execution Oversight",
      image: "https://readdy.ai/api/search-image?query=Indian%20construction%20site%20management%20with%20Indian%20engineers%20and%20project%20managers%20overseeing%20building%20construction%2C%20Indian%20workers%20in%20safety%20helmets%2C%20modern%20Indian%20residential%20building%20under%20construction%2C%20construction%20supervision%2C%20bright%20daylight%2C%20professional%20project%20management%20in%20Indian%20real%20estate&width=600&height=400&seq=execution&orientation=landscape",
      summary: "We coordinate PMC, legal, and construction teams till successful handover.",
      content: "Our execution oversight includes milestone management, regulatory approvals, regular society updates, and comprehensive handover support. We ensure seamless coordination between all stakeholders throughout the construction process.",
      ctaText: "Manage My Project",
      whatsappMessage: "Hi EDCB, I'm seeking end-to-end execution guidance.",
      faqItems: [
        "What: Complete project management from groundbreaking to handover including quality control",
        "Why: To ensure timely completion with quality standards while maintaining stakeholder satisfaction",
        "When: Construction phase, typically 18-36 months depending on project scale",
        "To Do: Secure all approvals, finalize contractor selection, establish monitoring systems",
        "Awareness: Active oversight prevents delays, cost overruns, and quality issues"
      ]
    }
  ];

  return (
    <section 
      id="how-we-work"
      ref={sectionRef}
      className="w-full bg-[#F8F6F0] py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#005B63] font-['Poppins'] mb-4">
              How We Work
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-[#C49102] mx-auto mb-4 sm:mb-6"></div>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {workSteps.map((step, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-[#E2F4F3]/30 border border-[#005B63]/10 overflow-hidden transform ${
                  isVisible ? `opacity-100 translate-y-0` : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#005B63] font-['Poppins'] mb-3 sm:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[#2C2C2C] font-['Poppins'] leading-relaxed mb-4 sm:mb-6">
                    {step.summary}
                  </p>

                  {/* Button Container */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => setActivePopup(index)}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-[#005B63] hover:bg-[#C49102] text-white rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer min-h-[44px]"
                    >
                      <i className="ri-search-line text-lg sm:text-xl"></i>
                    </button>
                    
                    <button
                      onClick={() => setActiveFAQ(index)}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C49102] hover:bg-[#005B63] text-white rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer min-h-[44px]"
                    >
                      <i className="ri-question-line text-lg sm:text-xl"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Regular Popups */}
      {workSteps.map((step, index) => (
        <Popup
          key={`popup-${index}`}
          isOpen={activePopup === index}
          onClose={() => setActivePopup(null)}
          title={step.title}
          content={step.content}
          ctaText={step.ctaText}
          whatsappMessage={step.whatsappMessage}
        />
      ))}

      {/* FAQ Popups */}
      {workSteps.map((step, index) => (
        <Popup
          key={`faq-${index}`}
          isOpen={activeFAQ === index}
          onClose={() => setActiveFAQ(null)}
          title={step.title}
          content=""
          ctaText={step.ctaText}
          whatsappMessage={step.whatsappMessage}
          faqItems={step.faqItems}
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
