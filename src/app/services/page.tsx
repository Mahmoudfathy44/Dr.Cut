import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Scissors, Check } from 'lucide-react';
import { services } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Our Services | Dr Cut',
  description: 'Explore the premium grooming services offered by Dr Cut. From signature haircuts to royal beard treatments.',
};

export default function ServicesPage() {
  const categories = ['haircut', 'beard', 'treatment', 'package'];

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="font-display text-4xl sm:text-5xl text-gold mb-6">Our Services</h1>
        <p className="text-ash-light max-w-2xl mx-auto text-lg leading-relaxed">
          At Dr Cut, we elevate grooming into an art form. Every service is a curated experience designed to help you look and feel your absolute best.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-24">
        {categories.map((category) => {
          const categoryServices = services.filter((s) => s.category === category);
          if (categoryServices.length === 0) return null;

          return (
            <section key={category} className="scroll-mt-32" id={category}>
              <div className="flex items-center gap-4 mb-10">
                <h2 className="font-display text-3xl text-cream capitalize">{category}s</h2>
                <div className="h-px bg-gold/30 flex-1" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryServices.map((service) => (
                  <div
                    key={service.id}
                    className="group bg-ink-mid border border-ash/10 rounded-2xl overflow-hidden hover:border-gold/30 hover:shadow-[0_10px_40px_-10px_rgba(201,168,76,0.15)] transition-all duration-300 flex flex-col"
                  >
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-mid via-ink/20 to-transparent" />
                      {service.popular && (
                        <div className="absolute top-4 left-4 bg-gold text-ink text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-lg shadow-gold/20">
                          Most Popular
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-display text-xl text-cream group-hover:text-gold transition-colors">
                          {service.name}
                        </h3>
                        <p className="font-display text-xl text-gold">{service.price} SAR</p>
                      </div>

                      <p className="text-ash-light text-sm mb-6 leading-relaxed flex-1">
                        {service.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {service.includes?.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-ash">
                            <Check size={14} className="text-gold/70" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-ash/10">
                        <div className="flex items-center gap-2 text-ash text-sm">
                          <Clock size={16} />
                          <span>{service.duration} mins</span>
                        </div>
                        <Link
                          href={`/book?service=${service.id}`}
                          className="flex items-center gap-2 text-gold font-medium hover:text-gold-light transition-colors text-sm uppercase tracking-wider"
                        >
                          Book Now <Scissors size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="max-w-4xl mx-auto mt-32 text-center bg-gold/5 border border-gold/20 rounded-3xl p-10 sm:p-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        <h2 className="font-display text-3xl text-gold mb-4 relative z-10">Not sure what you need?</h2>
        <p className="text-cream mb-8 max-w-xl mx-auto relative z-10">
          Book a free consultation with one of our master barbers. We&apos;ll assess your face shape, hair type, and personal style to recommend the perfect look.
        </p>
        <Link
          href="/book"
          className="inline-block bg-gold text-ink font-semibold px-8 py-4 rounded-lg hover:bg-gold-light transition-colors shadow-lg shadow-gold/20 relative z-10"
        >
          Book an Appointment
        </Link>
      </div>
    </div>
  );
}
