import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { BranchesSection } from '@/components/sections/BranchesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Dr Cut — Premium Barbershop Experience',
  description:
    'Dr Cut is the premier barbershop destination in Saudi Arabia. Precision haircuts, expert beard sculpting, and luxury grooming across Riyadh, Jeddah & Al Khobar.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <BranchesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
