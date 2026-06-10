'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { BranchesSection } from '@/components/sections/BranchesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <BranchesSection />
      <TestimonialsSection />
    </>
  );
}
