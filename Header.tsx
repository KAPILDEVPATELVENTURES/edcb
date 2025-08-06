
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', elementId: 'home' },
    { name: 'About Us', elementId: 'about-us' },
    { name: 'Our Process', elementId: 'our-process' },
    { name: 'What We Do', elementId: 'what-we-do' },
    { name: 'How We Work', elementId: 'how-we-work' },
    { name: 'Who We Serve', elementId: 'who-we-serve' },
    { name: 'Why Us', elementId: 'why-us' },
    { name: 'Contact', elementId: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#F8F6F0] backdrop-blur-sm shadow-lg' : 'bg-[#F8F6F0]/80 backdrop-blur-sm'
    }`}>
      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => smoothScrollTo('home')} className="flex items-center">
            <img 
              src="https://static.readdy.ai/image/688072044816ef3f6cf39f7e7c8f89e8/3905db36b1d4699cdade392f28c47e85.jfif" 
              alt="EDCB Logo" 
              className="h-20 w-auto object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => smoothScrollTo(item.elementId)}
                className="text-[#005B63] font-['Poppins'] font-bold text-base hover:opacity-75 transition-opacity duration-200 relative group whitespace-nowrap cursor-pointer"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#005B63] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5"
          >
            <span className={`w-6 h-0.5 bg-[#005B63] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#005B63] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#005B63] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#F8F6F0] border-t border-[#005B63]/10 shadow-lg">
          <nav className="flex flex-col py-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => smoothScrollTo(item.elementId)}
                className="text-[#005B63] font-['Poppins'] font-bold px-6 py-3 hover:bg-[#E2F4F3] transition-colors duration-200 text-left cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}