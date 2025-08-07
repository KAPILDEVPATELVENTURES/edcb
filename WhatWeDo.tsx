
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

export default function WhatWeDo() {
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

  const services = [
    {
      title: "Estate Development",
      image: "https://readdy.ai/api/search-image?query=Modern%20Indian%20residential%20township%20development%20with%20high-rise%20buildings%20and%20landscaped%20gardens%2C%20Indian%20architects%20planning%20urban%20development%20project%2C%20diverse%20Indian%20families%20walking%20through%20modern%20Indian%20housing%20complex%2C%20bright%20Indian%20sunlight%2C%20contemporary%20Indian%20urban%20planning%2C%20green%20spaces%20and%20modern%20architecture%20in%20Indian%20city&width=600&height=400&seq=estate-dev&orientation=landscape",
      summary: "We guide landowners, societies, and developers from idea to cityscape.",
      details: [
        "Land assessment and feasibility studies",
        "Master planning and urban design",
        "Society redevelopment projects",
        "Township and residential projects",
        "Commercial development guidance"
      ],
      ctaText: "Start Estate Planning",
      whatsappMessage: "Hi EDCB, I'd like to discuss estate or society development.",
      faqItems: [
        "What: Comprehensive estate development from land assessment to project completion",
        "Why: To transform underutilized land into modern, sustainable communities",
        "When: Timeline varies from 2-5 years based on project scale and approvals",
        "To Do: Secure land documents, conduct feasibility studies, obtain necessary permits",
        "Awareness: Estate development requires careful planning to balance profitability with community needs"
      ]
    },
    {
      title: "PMC & Compliance Advisory",
      image: "https://readdy.ai/api/search-image?query=Indian%20legal%20professionals%20and%20architects%20reviewing%20construction%20compliance%20documents%20in%20modern%20Indian%20office%2C%20RERA%20and%20government%20approval%20papers%20on%20desk%2C%20Indian%20regulatory%20consultation%20meeting%2C%20professional%20Indian%20consultants%20discussing%20building%20permits%2C%20bright%20office%20environment%20with%20Indian%20construction%20regulations&width=600&height=400&seq=pmc-compliance&orientation=landscape",
      summary: "We assist with PMC, DCPR interpretation, and smooth regulatory facilitation.",
      details: [
        "Project Management Consulting (PMC)",
        "RERA/MHADA/ULC coordination",
        "Plan sanctioning and approvals",
        "DCPR interpretation and compliance",
        "Legal alignment and documentation"
      ],
      ctaText: "Get Advisory Support",
      whatsappMessage: "Hi EDCB, I need help with PMC or regulatory compliance.",
      faqItems: [
        "What: Project management consulting and regulatory compliance advisory services",
        "Why: To ensure projects meet all legal requirements and avoid delays or penalties",
        "When: Required throughout project lifecycle, critical during approval phases",
        "To Do: Prepare all project documents, engage early for compliance planning",
        "Awareness: Non-compliance can result in project delays, legal issues, and financial losses"
      ]
    },
    {
      title: "Financial & Execution Enablement",
      image: "https://readdy.ai/api/search-image?query=Indian%20business%20meeting%20with%20financial%20charts%20and%20construction%20project%20models%2C%20Indian%20investors%20and%20developers%20discussing%20real%20estate%20financing%2C%20modern%20Indian%20conference%20room%20with%20property%20investment%20presentation%2C%20Indian%20rupee%20financial%20projections%2C%20professional%20Indian%20real%20estate%20financial%20planning%20session&width=600&height=400&seq=financial-execution&orientation=landscape",
      summary: "We help make your project credit-ready, viable, and successfully delivered.",
      details: [
        "Viability analysis and feasibility reports",
        "Investor readiness and pitch preparation",
        "Funding guidance and financial structuring",
        "Construction coordination and oversight",
        "Project delivery and handover support"
      ],
      ctaText: "Make My Project Ready",
      whatsappMessage: "Hi EDCB, I want support in financing and delivery.",
      faqItems: [
        "What: Financial structuring, investor preparation, and execution management services",
        "Why: To ensure projects are financially viable and successfully completed on time",
        "When: Financial planning starts early, execution management during construction phase",
        "To Do: Prepare financial projections, identify funding sources, establish project timelines",
        "Awareness: Proper financial planning and execution management are crucial for project success"
      ]
    }
  ];

  return (
    <section 
      id="what-we-do"
      ref={sectionRef}
      className="w-full bg-[#F8F6F0] py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#005B63] font-['Poppins'] mb-4">
              What We Do
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-[#C49102] mx-auto mb-4 sm:mb-6"></div>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
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
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#005B63] font-['Poppins'] mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#2C2C2C] font-['Poppins'] leading-relaxed mb-4 sm:mb-6">
                    {service.summary}
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
      {services.map((service, index) => (
        <Popup
          key={`popup-${index}`}
          isOpen={activePopup === index}
          onClose={() => setActivePopup(null)}
          title={service.title}
          details={service.details}
          ctaText={service.ctaText}
          whatsappMessage={service.whatsappMessage}
        />
      ))}

      {/* FAQ Popups */}
      {services.map((service, index) => (
        <Popup
          key={`faq-${index}`}
          isOpen={activeFAQ === index}
          onClose={() => setActiveFAQ(null)}
          title={service.title}
          details={[]}
          ctaText={service.ctaText}
          whatsappMessage={service.whatsappMessage}
          faqItems={service.faqItems}
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
