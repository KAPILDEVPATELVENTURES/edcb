'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  profile: string;
  message: string;
}

export default function LetsCollaborate() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    profile: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Hi EDCB,

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Profile: ${formData.profile}

Message: ${formData.message}

I would like to discuss collaboration opportunities.`;

    window.open(`https://wa.me/919594987678?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    
    // Reset form and close popup
    setFormData({
      name: '',
      phone: '',
      email: '',
      profile: '',
      message: ''
    });
    setIsPopupOpen(false);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      profile: '',
      message: ''
    });
  };

  return (
    <section 
      id="lets-collaborate"
      className="w-full bg-[#005B63] py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8F6F0] font-['Poppins'] mb-6">
          Let's Collaborate & Upscale Together
        </h2>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-[#F8F6F0] font-['Poppins'] mb-12 max-w-3xl mx-auto">
          Ready to discuss redevelopment, land potential, or partnership?
        </p>
        
        {/* CTA Button */}
        <button
          onClick={() => setIsPopupOpen(true)}
          className="bg-[#C49102] hover:bg-[#B8840E] text-white font-bold text-xl px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl font-['Poppins'] whitespace-nowrap cursor-pointer"
        >
          Share Your Requirement
        </button>
      </div>

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#2C2C2C] hover:text-[#005B63] transition-colors duration-200"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#005B63] font-['Poppins'] mb-2">
                Share Your Requirement
              </h3>
              <p className="text-[#2C2C2C] font-['Poppins']">
                Let us know how we can help you with your project
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-[#005B63] mb-2 font-['Poppins']">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-[#005B63]/20 rounded-lg focus:outline-none focus:border-[#C49102] transition-colors duration-200 font-['Poppins']"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-[#005B63] mb-2 font-['Poppins']">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-[#005B63]/20 rounded-lg focus:outline-none focus:border-[#C49102] transition-colors duration-200 font-['Poppins']"
                  placeholder="+91 9999999999"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-[#005B63] mb-2 font-['Poppins']">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-[#005B63]/20 rounded-lg focus:outline-none focus:border-[#C49102] transition-colors duration-200 font-['Poppins']"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Profile Dropdown */}
              <div>
                <label htmlFor="profile" className="block text-sm font-bold text-[#005B63] mb-2 font-['Poppins']">
                  Profile *
                </label>
                <select
                  id="profile"
                  name="profile"
                  value={formData.profile}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-[#005B63]/20 rounded-lg focus:outline-none focus:border-[#C49102] transition-colors duration-200 font-['Poppins'] pr-8"
                >
                  <option value="">Select your profile</option>
                  <option value="Society">Society</option>
                  <option value="Landowner">Landowner</option>
                  <option value="Developer">Developer</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-[#005B63] mb-2 font-['Poppins']">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-3 border border-[#005B63]/20 rounded-lg focus:outline-none focus:border-[#C49102] transition-colors duration-200 font-['Poppins'] resize-none"
                  placeholder="Please describe your requirements or project details..."
                />
                <div className="text-right text-sm text-[#2C2C2C]/60 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formData.message.length > 500}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-3 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i className="ri-whatsapp-line text-xl"></i>
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}