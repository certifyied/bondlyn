import React from 'react';
import SeoHeader from '../components/SeoHeader';
import HeroSection from '../components/HeroSection';
import WhoWeAreSection from '../components/WhoWeAreSection';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import WhoCanBenefitSection from '../components/WhoCanBenefitSection';
import WhyBondlynSection from '../components/WhyBondlynSection';
import TrustMarquee from '../components/TrustMarquee';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import './Home.css';

export default function Home() {
  return (
    <main>
      <SeoHeader title="Home" description="Every Child Has Something Extraordinary Inside. We Help It Come Out." />
      <HeroSection />
      <WhoWeAreSection />
      <StatsSection />
      <ServicesSection />
      <WhoCanBenefitSection />
      <WhyBondlynSection />
      <TrustMarquee />
      <HowItWorksSection />
      <TestimonialsSection />
      <BlogSection />
    </main>
  );
}
