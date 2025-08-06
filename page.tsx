
'use client';

import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import MiniCTAStrip from '@/components/MiniCTAStrip';
import AboutUs from '@/components/AboutUs';
import WhatWeDo from '@/components/WhatWeDo';
import HowWeWork from '@/components/HowWeWork';
import WhoWeServe from '@/components/WhoWeServe';
import WhyUs from '@/components/WhyUs';
import LetsCollaborate from '@/components/LetsCollaborate';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div id="home">
        <Header />
        <HeroSlider />
      </div>
      <MiniCTAStrip />
      <div id="about-us">
        <AboutUs />
      </div>
      <div id="what-we-do">
        <WhatWeDo />
      </div>
      <div id="how-we-work">
        <HowWeWork />
      </div>
      <div id="who-we-serve">
        <WhoWeServe />
      </div>
      <div id="why-us">
        <WhyUs />
      </div>
      <LetsCollaborate />
      <Footer />
    </div>
  );
}