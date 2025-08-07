
'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: "Estate Development & Consulting Bureau (EDCB)",
    subtitle: "A Real Estate Transformation Venture by Kapildev Patel Ventures",
    caption: "From society to skyline — we redevelop, regulate, and rejuvenate estates through stakeholder-first execution.",
    image: "https://static.readdy.ai/image/688072044816ef3f6cf39f7e7c8f89e8/4ac068e6ef88d6d1d90d3fba181b4aa5.png",
    textColor: "text-white"
  },
  {
    id: 2,
    title: "From Feasibility to Foundation",
    subtitle: "",
    caption: "Unlocking site viability, land optimization & phased development strategies.",
    image: "https://static.readdy.ai/image/688072044816ef3f6cf39f7e7c8f89e8/70ba5b2cb6cf890e04a8cef3be0bffbc.png",
    textColor: "text-white"
  },
  {
    id: 3,
    title: "Project Management, Professional Guidance",
    subtitle: "",
    caption: "Transparent PMC supervision and collaborative milestone tracking.",
    image: "https://static.readdy.ai/image/688072044816ef3f6cf39f7e7c8f89e8/90ebb01a0c982ca51cd5b52ebd68c9e9.png",
    textColor: "text-white"
  },
  {
    id: 4,
    title: "Approvals That Move Projects Forward",
    subtitle: "",
    caption: "We simplify RERA, MHADA, ULC and compliance for smooth execution.",
    image: "https://readdy.ai/api/search-image?query=professional%20Indian%20government%20office%20interior%20with%20warm%20wooden%20furniture%20and%20official%20documents%2C%20Indian%20bureaucrat%20in%20formal%20attire%20reviewing%20RERA%20and%20regulatory%20paperwork%20at%20mahogany%20desk%2C%20official%20Indian%20regulatory%20environment%20with%20traditional%20decor%20and%20warm%20lighting%2C%20dramatic%20shadows%20creating%20perfect%20contrast%20for%20white%20text%20overlay&width=1920&height=1080&seq=slide4indiangov&orientation=landscape",
    textColor: "text-white"
  },
  {
    id: 5,
    title: "Fundable. Viable. Ready to Build.",
    subtitle: "",
    caption: "Financial modeling and investor decks for credit-ready project execution.",
    image: "https://readdy.ai/api/search-image?query=sophisticated%20Indian%20boardroom%20with%20Indian%20business%20professionals%20in%20formal%20suits%20discussing%20financial%20charts%20and%20architectural%20models%2C%20modern%20Indian%20corporate%20office%20with%20glass%20conference%20table%2C%20Indian%20businessmen%20and%20women%20analyzing%20investment%20proposals%2C%20dramatic%20corporate%20lighting%20with%20warm%20accents%20for%20optimal%20white%20text%20contrast&width=1920&height=1080&seq=slide5indianfinance&orientation=landscape",
    textColor: "text-white"
  },
  {
    id: 6,
    title: "Execution You Can Count On",
    subtitle: "",
    caption: "End-to-end delivery — from agreement to handover with post-completion care.",
    image: "https://static.readdy.ai/image/688072044816ef3f6cf39f7e7c8f89e8/9d176bb41d42b3a5050aabf38ef05aad.png",
    textColor: "text-white"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>

            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className={`text-left max-w-4xl ${slide.textColor}`}>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4 sm:mb-6 text-[#C49102]">
                      {slide.subtitle}
                    </h2>
                  )}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold leading-relaxed max-w-3xl">
                    {slide.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-[#C49102] scale-125 shadow-lg'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 transform -translate-y-1/2 bg-[#005B63]/20 hover:bg-[#005B63]/40 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 z-20 group"
      >
        <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
          <i className="ri-arrow-left-line text-lg sm:text-xl"></i>
        </div>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 transform -translate-y-1/2 bg-[#005B63]/20 hover:bg-[#005B63]/40 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 z-20 group"
      >
        <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
          <i className="ri-arrow-right-line text-lg sm:text-xl"></i>
        </div>
      </button>

      <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-8 z-20">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="bg-[#005B63]/20 hover:bg-[#005B63]/40 backdrop-blur-sm text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full transition-all duration-300 text-xs sm:text-sm font-medium"
        >
          <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
            <i className={`${isAutoPlaying ? 'ri-pause-line' : 'ri-play-line'} text-sm`}></i>
          </div>
        </button>
      </div>
    </section>
  );
}
