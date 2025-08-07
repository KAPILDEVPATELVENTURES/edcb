
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

export default function WhoWeServe() {
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

  const stakeholders = [
    {
      title: "Housing Societies",
      image: "https://readdy.ai/api/search-image?query=diverse%20Indian%20families%20and%20elderly%20residents%20in%20traditional%20and%20modern%20Indian%20clothing%20sitting%20in%20cooperative%20housing%20society%20community%20meeting%20hall%20discussing%20redevelopment%20plans%2C%20warm%20community%20atmosphere%20with%20Indian%20apartment%20buildings%20visible%20through%20windows%2C%20collaborative%20discussion%20among%20Indian%20middle-class%20society%20members%2C%20bright%20natural%20lighting%20in%20community%20space&width=600&height=400&seq=housing-societies-new&orientation=landscape",
      summary: "We support cooperative societies exploring redevelopment or self-redevelopment.",
      details: [
        "Society education and awareness programs",
        "Pre-feasibility studies and viability assessments",
        "Member coordination and consensus building",
        "Legal advisory and documentation support",
        "Government liaison and approval assistance"
      ],
      ctaText: "Unite to Redevelop",
      whatsappMessage: "Hi EDCB, our society wants to explore redevelopment.",
      faqItems: [
        "What: Comprehensive support for housing societies considering redevelopment projects",
        "Why: To help societies navigate complex redevelopment process with maximum member benefit",
        "When: Best to engage early when society first considers redevelopment options",
        "To Do: Conduct society meetings, gather member consensus, organize property documents",
        "Awareness: Redevelopment decisions require careful consideration of member rights and market conditions"
      ]
    },
    {
      title: "Landowners & Heirs",
      image: "https://readdy.ai/api/search-image?query=Indian%20landowner%20family%20standing%20on%20their%20agricultural%20land%20plot%20with%20urban%20development%20in%20background%2C%20traditional%20Indian%20farmer%20with%20modern%20Indian%20business%20professional%20discussing%20land%20development%2C%20Indian%20family%20with%20property%20documents%2C%20mixed%20rural%20and%20urban%20Indian%20landscape%2C%20bright%20natural%20lighting%20showing%20land%20potential&width=600&height=400&seq=landowners-heirs&orientation=landscape",
      summary: "We guide landholders or inheritors on unlocking value through urban development.",
      details: [
        "Land potential analysis and market assessment",
        "Joint venture planning and structuring",
        "Development options and strategy formulation",
        "Legal title verification and clearances",
        "Investment partnership facilitation"
      ],
      ctaText: "Plan My Land Use",
      whatsappMessage: "Hi EDCB, I own land and need guidance for development.",
      faqItems: [
        "What: Strategic guidance for landowners to maximize value through development opportunities",
        "Why: To help landowners make informed decisions about development potential and partnerships",
        "When: Ideal timing depends on market conditions and regulatory environment",
        "To Do: Secure clear land titles, understand zoning regulations, assess market demand",
        "Awareness: Land development requires careful planning to balance returns with regulatory compliance"
      ]
    },
    {
      title: "Builders & Channel Partners",
      image: "https://readdy.ai/api/search-image?query=professional%20Indian%20builders%20and%20developers%20in%20hard%20hats%20and%20formal%20attire%20at%20construction%20site%2C%20Indian%20real%20estate%20partners%20shaking%20hands%20in%20front%20of%20modern%20Indian%20residential%20project%2C%20diverse%20group%20of%20Indian%20construction%20professionals%20and%20investors%2C%20architectural%20plans%20and%20building%20models%2C%20bright%20professional%20Indian%20construction%20industry%20meeting&width=600&height=400&seq=builders-partners&orientation=landscape",
      summary: "We collaborate with ethical developers, investors, and channel associates.",
      details: [
        "Project onboarding and partnership facilitation",
        "Compliance support and regulatory guidance",
        "Partner matching and network expansion",
        "Joint venture structuring and documentation",
        "Market entry and business development support"
      ],
      ctaText: "Collaborate With Us",
      whatsappMessage: "Hi EDCB, I'd like to explore a partnership or project collaboration.",
      faqItems: [
        "What: Partnership opportunities and support for builders, developers, and channel partners",
        "Why: To create synergistic partnerships that benefit all stakeholders in development projects",
        "When: Best to establish partnerships before project initiation for maximum collaboration",
        "To Do: Define partnership terms, establish roles and responsibilities, align on project goals",
        "Awareness: Successful partnerships require clear agreements and shared commitment to ethical practices"
      ]
    }
  ];

  return (
    <section 
      id="who-we-serve"
      ref={sectionRef}
      className="w-full bg-[#F8F6F0] py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#005B63] font-['Poppins'] mb-4">
              Who We Serve
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-[#C49102] mx-auto mb-4 sm:mb-6"></div>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {stakeholders.map((stakeholder, index) => (
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
                    src={stakeholder.image}
                    alt={stakeholder.title}
                    className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#005B63] font-['Poppins'] mb-3 sm:mb-4">
                    {stakeholder.title}
                  </h3>
                  <div className="text-[#2C2C2C] font-['Poppins'] leading-relaxed mb-4 sm:mb-6">
                    <p className="flex items-start">
                      <span className="text-[#C49102] mr-2">•</span>
                      {stakeholder.summary}
                    </p>
                  </div>

                  {/* Button Container */}
                  <div className="flex gap-3 mb-4">
                    <button
                      onClick={() => setActivePopup(index)}
                      className="flex-1 bg-[#005B63] hover:bg-[#C49102] text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 font-['Poppins'] flex items-center justify-center gap-2 whitespace-nowrap min-h-[44px] text-sm"
                    >
                      Let's Collaborate
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
      {stakeholders.map((stakeholder, index) => (
        <Popup
          key={`popup-${index}`}
          isOpen={activePopup === index}
          onClose={() => setActivePopup(null)}
          title={stakeholder.title}
          details={stakeholder.details}
          ctaText={stakeholder.ctaText}
          whatsappMessage={stakeholder.whatsappMessage}
        />
      ))}

      {/* FAQ Popups */}
      {stakeholders.map((stakeholder, index) => (
        <Popup
          key={`faq-${index}`}
          isOpen={activeFAQ === index}
          onClose={() => setActiveFAQ(null)}
          title={stakeholder.title}
          details={[]}
          ctaText={stakeholder.ctaText}
          whatsappMessage={stakeholder.whatsappMessage}
          faqItems={stakeholder.faqItems}
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
