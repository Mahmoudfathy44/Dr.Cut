import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | Dr Cut',
  description: 'Discover the story behind Dr Cut, the premium barbershop redefining men\'s grooming.',
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="font-display text-4xl sm:text-5xl text-gold mb-6">Our Story</h1>
        <p className="text-ash-light text-lg leading-relaxed">
          Dr Cut was founded on a simple premise: grooming is not just a chore; it is an experience, an art form, and a statement of who you are.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-ash/10">
          <Image
            src="/img/about2.jpg"
            alt="Barber working"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/20 mix-blend-multiply" />
        </div>
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-cream">The Art of Precision</h2>
          <p className="text-ash-light leading-relaxed">
            We believe that every cut, every shave, and every style should be executed with surgical precision. 
            That&apos;s why our master barbers are more than just stylists—they are craftsmen dedicated to perfecting your look.
          </p>
          <p className="text-ash-light leading-relaxed">
            From our carefully selected premium products to our impeccably designed spaces, every detail at Dr Cut is engineered to provide an unparalleled grooming experience.
          </p>
          <div className="pt-6 grid grid-cols-2 gap-6 border-t border-ash/10">
            <div>
              <p className="font-display text-3xl text-gold mb-2">7+</p>
              <p className="text-sm text-ash uppercase tracking-wider">Years of Excellence</p>
            </div>
            <div>
              <p className="font-display text-3xl text-gold mb-2">50K+</p>
              <p className="text-sm text-ash uppercase tracking-wider">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
