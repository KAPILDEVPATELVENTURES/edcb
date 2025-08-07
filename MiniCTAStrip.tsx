
'use client';

import { useState, useEffect } from 'react';

export default function MiniCTAStrip() {
  const [currentTile, setCurrentTile] = useState(0);

  const tiles = [
    {
      text: 'Yes, Our Society Is Exploring Redevelopment',
      image: "https://readdy.ai/api/search-image?query=Indian%20residential%20society%20buildings%20with%20families%20discussing%20redevelopment%20plans%2C%20traditional%20Indian%20apartment%20complex%2C%20Indian%20people%20in%20traditional%20and%20modern%20attire%20having%20community%20meeting%2C%20warm%20Indian%20lighting%2C%20clean%20minimalist%20background&width=400&height=200&seq=cta1indian&orientation=landscape",
      whatsappMessage: 'Hi EDCB, we are exploring redevelopment and would like your guidance.'
    },
    {
      text: 'We Need Guidance Before Taking a Step',
      image: "https://readdy.ai/api/search-image?query=Indian%20real%20estate%20consultant%20providing%20guidance%20to%20Indian%20family%2C%20professional%20Indian%20advisor%20with%20documents%20and%20blueprints%2C%20Indian%20office%20consultation%20scene%2C%20bright%20clean%20background%2C%20professional%20Indian%20business%20setting&width=400&height=200&seq=cta2indian&orientation=landscape",
      whatsappMessage: 'Hi EDCB, we need initial redevelopment advice and consultation.'
    },
    {
      text: 'We Have Land and Want to Develop',
      image: "https://readdy.ai/api/search-image?query=open%20Indian%20land%20plot%20with%20surveying%20equipment%2C%20Indian%20construction%20engineers%20planning%20development%2C%20clear%20Indian%20landscape%20with%20blue%20sky%2C%20professional%20land%20development%20in%20India%2C%20clean%20bright%20background&width=400&height=200&seq=cta3indian&orientation=landscape",
      whatsappMessage: 'Hi EDCB, we have land and want to explore development opportunities.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTile((prev) => (prev + 1) % tiles.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [tiles.length]);

  const handleTileClick = (whatsappMessage: string) => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919594987678?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="w-full bg-[#F8F6F0] py-6 sm:py-8 overflow-hidden">
      <div className="relative">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentTile * 100}%)` }}
        >
          {tiles.map((tile, index) => (
            <div 
              key={index}
              className="w-full flex-shrink-0 px-4 sm:px-6 lg:px-8"
            >
              <div 
                onClick={() => handleTileClick(tile.whatsappMessage)}
                className="flex items-center gap-4 sm:gap-6 bg-white/70 border border-[#005B63]/20 rounded-xl sm:rounded-2xl py-4 sm:py-6 px-4 sm:px-8 cursor-pointer transition-all duration-300 hover:bg-[#E2F4F3] hover:shadow-xl hover:scale-[1.02] mx-auto max-w-4xl min-h-[80px] sm:min-h-[100px]"
              >
                <div className="flex-shrink-0">
                  <img
                    src={tile.image}
                    alt={tile.text}
                    className="w-16 h-12 sm:w-24 sm:h-16 md:w-32 md:h-20 object-cover rounded-lg"
                  />
                </div>
                <span className="text-[#005B63] font-semibold text-base sm:text-lg md:text-2xl lg:text-3xl font-['Poppins'] text-left flex-1 leading-tight">
                  {tile.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-4 sm:mt-6 gap-2 sm:gap-3">
        {tiles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTile(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              currentTile === index ? 'bg-[#005B63] scale-125' : 'bg-[#005B63]/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
