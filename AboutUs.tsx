
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
  isProcessStep?: boolean;
}

function Popup({ isOpen, onClose, title, content, ctaText, whatsappMessage, faqItems, isProcessStep }: PopupProps) {
  if (!isOpen) return null;

  const handleWhatsApp = () => {
    window.open(`https://wa.me/919594987678?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
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
          <p className="text-[#2C2C2C] font-['Poppins'] leading-relaxed mb-4">
            {content}
          </p>
          
          {faqItems && faqItems.length > 0 && (
            <div className="mt-6">
              <h4 className="text-lg font-bold text-[#005B63] font-['Poppins'] mb-3">
                {isProcessStep ? 'Process FAQ' : 'FAQ'}
              </h4>
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

export default function AboutUs() {
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

  const processSteps = [
    {
      stepNumber: 1,
      title: "Discovery & Alignment",
      image: "https://readdy.ai/api/search-image?query=Indian%20business%20professionals%20conducting%20site%20visit%20and%20consultation%20meeting%2C%20diverse%20team%20of%20Indian%20consultants%20with%20clipboards%20and%20tablets%20examining%20property%2C%20Indian%20real%20estate%20experts%20in%20formal%20attire%20discussing%20project%20with%20property%20owners%2C%20bright%20outdoor%20lighting%2C%20professional%20Indian%20property%20assessment%20and%20discovery%20phase&width=600&height=400&seq=discovery&orientation=landscape",
      summary: "Understanding your vision, property, and project goals.",
      content: "Our comprehensive discovery phase includes detailed site visits, stakeholder interviews, and initial feasibility assessment. We analyze your property's potential, understand your specific requirements, and align all parties with the development vision.",
      ctaText: "Start With Discovery",
      whatsappMessage: "Hi EDCB, I'd like to start with a project discovery discussion.",
      faqItems: [
        "What: Comprehensive site assessment and stakeholder alignment process",
        "Why: To ensure all parties understand project scope and potential before proceeding",
        "When: First step in any development project, typically takes 2-4 weeks",
        "To Do: Prepare property documents, gather stakeholder contact information",
        "Awareness: This phase determines project viability and prevents future conflicts"
      ]
    },
    {
      stepNumber: 2,
      title: "Structuring & Compliance",
      image: "https://readdy.ai/api/search-image?query=Indian%20architects%20and%20legal%20experts%20working%20on%20regulatory%20compliance%20documents%2C%20team%20of%20Indian%20professionals%20reviewing%20RERA%20and%20MHADA%20paperwork%2C%20Indian%20legal%20consultants%20and%20planners%20in%20modern%20office%20with%20architectural%20drawings%20and%20compliance%20certificates%2C%20professional%20Indian%20regulatory%20planning%20environment&width=600&height=400&seq=structuring&orientation=landscape",
      summary: "Planning the right model with legal, financial, and PMC structure.",
      content: "Our structuring phase covers RERA compliance, MHADA coordination, comprehensive documentation, and FSI-based design optimization. We create robust frameworks that ensure regulatory adherence while maximizing project viability.",
      ctaText: "Let's Structure It",
      whatsappMessage: "Hi EDCB, I want help structuring my redevelopment or project.",
      faqItems: [
        "What: Legal framework setup, RERA/MHADA compliance, and financial structuring",
        "Why: To ensure regulatory compliance and create a solid foundation for execution",
        "When: After discovery phase completion, takes 4-8 weeks depending on complexity",
        "To Do: Gather legal documents, society resolutions, and financial commitments",
        "Awareness: Proper structuring prevents legal issues and ensures smooth approvals"
      ]
    },
    {
      stepNumber: 3,
      title: "Execution & Handover",
      image: "https://readdy.ai/api/search-image?query=Indian%20construction%20team%20completing%20modern%20residential%20building%20with%20happy%20Indian%20families%20receiving%20new%20apartment%20keys%2C%20professional%20Indian%20project%20managers%20overseeing%20successful%20building%20handover%2C%20Indian%20construction%20site%20with%20completed%20towers%20and%20landscaping%2C%20celebration%20of%20successful%20project%20delivery%20in%20Indian%20real%20estate%20development&width=600&height=400&seq=execution-new&orientation=landscape",
      summary: "Groundwork, updates, handover & post-project support.",
      content: "Our execution phase includes comprehensive milestone tracking, regular society coordination, and seamless on-ground delivery management. We ensure transparent communication and successful project completion with ongoing post-handover support.",
      ctaText: "Execute With Us",
      whatsappMessage: "Hi EDCB, I'm ready to move forward with execution.",
      faqItems: [
        "What: Construction management, milestone tracking, and project delivery coordination",
        "Why: To ensure timely completion with quality standards and stakeholder satisfaction",
        "When: After approvals are secured, typically 18-36 months for completion",
        "To Do: Finalize contractor selection, secure funding, and establish communication channels",
        "Awareness: Regular monitoring ensures quality control and prevents cost overruns"
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#F8F6F0] py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#005B63] font-['Poppins'] mb-4 leading-tight">
              Redefining Urban Transformation in India
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-[#C49102] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-[#2C2C2C] font-['Poppins'] font-medium max-w-4xl mx-auto leading-relaxed">
              More than redevelopment — EDCB enables future-ready real estate through trust, compliance, and collaborative execution.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-16 sm:mb-20">
            {/* Left Column - Text Content */}
            <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-8'}`}>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-[#2C2C2C] font-['Poppins'] leading-relaxed">
                  Estate Development & Consulting Bureau (EDCB) is a venture by Kapildev Patel Ventures focused on transforming urban real estate — not only through redevelopment, but through visionary development of land, infrastructure, and modern communities.
                </p>
                
                <p className="text-base sm:text-lg text-[#2C2C2C] font-['Poppins'] leading-relaxed">
                  With a commitment to regulatory clarity, credit readiness, and transparent PMC processes, EDCB acts as a one-window facilitator for societies, landowners, and developers. Whether it's rejuvenating old housing or building new townships, we prioritize stakeholder alignment and ethical execution.
                </p>
              </div>

              {/* Mission Statement */}
              <div className="bg-white/80 border-l-4 border-[#C49102] p-6 sm:p-8 rounded-lg shadow-lg">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                    <i className="ri-building-line text-xl sm:text-2xl text-[#005B63]"></i>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#005B63] font-['Poppins'] mb-2 sm:mb-3">Our Mission</h3>
                    <p className="text-base sm:text-lg font-semibold text-[#2C2C2C] font-['Poppins'] italic leading-relaxed">
                      "To uplift India's urban future through equitable, efficient, and expert-led real estate transformation."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'}`}>
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=panoramic%20view%20of%20modern%20Indian%20city%20skyline%20during%20golden%20hour%20with%20mix%20of%20traditional%20and%20contemporary%20architecture%2C%20Indian%20urban%20development%20transformation%2C%20vibrant%20Indian%20metropolis%20with%20construction%20cranes%20and%20new%20buildings%2C%20warm%20lighting%20showcasing%20urban%20growth%20and%20redevelopment%2C%20professional%20Indian%20real%20estate%20cityscape%20with%20diverse%20buildings%20representing%20urban%20transformation&width=800&height=600&seq=indiancityscape&orientation=landscape"
                  alt="Urban Transformation in India"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Our Process Section */}
          <div id="our-process" className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
            {/* Process Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#005B63] font-['Poppins'] mb-4">
                Our Process
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-[#C49102] mx-auto"></div>
            </div>

            {/* Process Steps Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-[#E2F4F3]/30 border border-[#005B63]/10 overflow-hidden"
                >
                  {/* Step Number */}
                  <div className="bg-[#005B63] text-white text-center py-3 sm:py-4">
                    <div className="text-2xl sm:text-3xl font-bold font-['Poppins']">
                      Step {step.stepNumber}
                    </div>
                  </div>

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
                      • {step.summary}
                    </p>

                    {/* Button Container */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => setActivePopup(index)}
                        className="flex-1 bg-[#005B63] hover:bg-[#C49102] text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 font-['Poppins'] flex items-center justify-center gap-2 whitespace-nowrap min-h-[44px] text-sm"
                      >
                        <i className="ri-chat-3-line text-lg"></i>
                        Discuss This Step
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

          {/* Bottom Features */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
            {[
              {
                icon: 'ri-shield-check-line',
                title: 'Regulatory Clarity',
                description: 'Simplified RERA, MHADA, and compliance processes'
              },
              {
                icon: 'ri-team-line',
                title: 'Stakeholder First',
                description: 'Collaborative approach with transparent communication'
              },
              {
                icon: 'ri-building-4-line',
                title: 'Future Ready',
                description: 'Modern infrastructure for tomorrow\'s communities'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/80 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[#005B63]/10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#005B63]/10 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <i className={`${feature.icon} text-2xl sm:text-3xl text-[#005B63]`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#005B63] font-['Poppins'] text-center mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#2C2C2C] font-['Poppins'] text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Regular Popups */}
      {processSteps.map((step, index) => (
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
      {processSteps.map((step, index) => (
        <Popup
          key={`faq-${index}`}
          isOpen={activeFAQ === index}
          onClose={() => setActiveFAQ(null)}
          title={step.title}
          content=""
          ctaText={step.ctaText}
          whatsappMessage={step.whatsappMessage}
          faqItems={step.faqItems}
          isProcessStep={true}
        />
      ))}
    </section>
  );
}
