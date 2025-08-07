'use client';

export default function Footer() {
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', elementId: 'home' },
    { name: 'About Us', elementId: 'about-us' },
    { name: 'Our Process', elementId: 'our-process' },
    { name: 'What We Do', elementId: 'what-we-do' },
    { name: 'How We Work', elementId: 'how-we-work' },
    { name: 'Who We Serve', elementId: 'who-we-serve' },
    { name: 'Why Us', elementId: 'why-us' },
    { name: 'Let\'s Collaborate', elementId: 'lets-collaborate' },
    { name: 'Contact', elementId: 'contact' }
  ];

  const socialLinks = [
    { name: 'WhatsApp', icon: 'ri-whatsapp-line', url: 'https://wa.me/919594987678' },
    { name: 'Facebook', icon: 'ri-facebook-line', url: '#' },
    { name: 'Instagram', icon: 'ri-instagram-line', url: '#' },
    { name: 'LinkedIn', icon: 'ri-linkedin-line', url: '#' },
    { name: 'Twitter', icon: 'ri-twitter-x-line', url: '#' },
    { name: 'YouTube', icon: 'ri-youtube-line', url: '#' }
  ];

  const handleWhatsApp = () => {
    const message = "Hi EDCB, I would like to connect with you regarding real estate services.";
    window.open(`https://wa.me/919594987678?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer id="contact" className="w-full bg-[#005B63] text-[#F8F6F0]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Column 1 - About */}
          <div className="space-y-6">
            <div>
              <img 
                src="https://static.readdy.ai/image/688072044816ef3f6cf39f7e7c8f89e8/3905db36b1d4699cdade392f28c47e85.jfif" 
                alt="EDCB Logo" 
                className="h-16 w-auto object-contain mb-4"
              />
              <p className="text-lg font-bold text-[#C49102] font-['Poppins'] italic">
                "Elevating Lives"
              </p>
            </div>
            <p className="text-[#F8F6F0] font-['Poppins'] leading-relaxed">
              Estate Development & Consulting Bureau - Transforming urban real estate through stakeholder-first execution and regulatory excellence.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#F8F6F0] font-['Poppins'] mb-6">
              Quick Links
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => smoothScrollTo(link.elementId)}
                  className="text-[#F8F6F0] hover:text-[#C49102] transition-colors duration-200 font-['Poppins'] text-left cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3 - Contact */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#F8F6F0] font-['Poppins'] mb-6">
              Contact Us
            </h3>
            
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-phone-line text-[#C49102] text-xl"></i>
                </div>
                <a 
                  href="tel:+919594987678"
                  className="text-[#F8F6F0] hover:text-[#C49102] transition-colors duration-200 font-['Poppins']"
                >
                  +91-9594 987 678
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-mail-line text-[#C49102] text-xl"></i>
                </div>
                <a 
                  href="mailto:unite@edcb.in"
                  className="text-[#F8F6F0] hover:text-[#C49102] transition-colors duration-200 font-['Poppins']"
                >
                  unite@edcb.in
                </a>
              </div>

              {/* Website */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-global-line text-[#C49102] text-xl"></i>
                </div>
                <a 
                  href="http://www.edcb.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F8F6F0] hover:text-[#C49102] transition-colors duration-200 font-['Poppins']"
                >
                  www.edcb.in
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <i className="ri-map-pin-line text-[#C49102] text-xl"></i>
                </div>
                <address className="text-[#F8F6F0] font-['Poppins'] not-italic leading-relaxed">
                  Borivali West, Mumbai,<br />
                  Maharashtra, India<br />
                  Pin - 400092
                </address>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsApp}
                className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-3 font-['Poppins'] whitespace-nowrap cursor-pointer"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-whatsapp-line text-lg"></i>
                </div>
                WhatsApp Us
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-[#F8F6F0] font-['Poppins']">
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#F8F6F0]/10 hover:bg-[#C49102] rounded-full flex items-center justify-center transition-colors duration-200 group"
                  >
                    <i className={`${social.icon} text-xl text-[#F8F6F0] group-hover:text-white`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#F8F6F0]/20 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-[#F8F6F0] font-['Poppins'] text-sm">
                Copyright © 2025 Estate Development & Consulting Bureau. All rights reserved | A division of Kapildev Patel Ventures
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <a 
                href="#privacy" 
                className="text-[#F8F6F0] hover:text-[#C49102] transition-colors duration-200 font-['Poppins']"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-[#F8F6F0] hover:text-[#C49102] transition-colors duration-200 font-['Poppins']"
              >
                Terms of Service
              </a>
              <a 
                href="#cookies" 
                className="text-[#F8F6F0] hover:text-[#C49102] transition-colors duration-200 font-['Poppins']"
              >
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}