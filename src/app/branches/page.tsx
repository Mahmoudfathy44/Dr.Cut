import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import { branches } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Our Branches | Dr Cut',
  description: 'Find a Dr Cut premium barbershop near you. View our locations, opening hours, and contact information.',
};

export default function BranchesPage() {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="font-display text-4xl sm:text-5xl text-gold mb-6">Our Locations</h1>
        <p className="text-ash-light max-w-2xl mx-auto text-lg leading-relaxed">
          Find your nearest Dr Cut. Each of our branches is designed to offer the same premium standard of service in a unique, luxurious setting.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {branches.map((branch) => (
          <div
            key={branch.id}
            className="group bg-ink-mid border border-ash/10 rounded-2xl overflow-hidden hover:border-gold/30 hover:shadow-[0_10px_40px_-10px_rgba(201,168,76,0.15)] transition-all duration-500"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={branch.image}
                alt={branch.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-mid via-ink/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="font-display text-2xl text-cream mb-2">{branch.name}</h2>
                <div className="flex items-start gap-2 text-sm text-gold/90 mb-1">
                  <MapPin size={16} className="shrink-0 mt-0.5" />
                  <span>{branch.address}, {branch.city}</span>
                </div>
              </div>

              {branch.featured && (
                <div className="absolute top-4 right-4 bg-gold text-ink text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-lg shadow-gold/20">
                  Flagship
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-ash text-xs uppercase tracking-wider mb-2">
                    <Clock size={14} />
                    <span>Today&apos;s Hours</span>
                  </div>
                  <p className="text-cream text-sm">10:00 AM - 10:00 PM</p>
                  <p className="text-gold text-xs">Open Now</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-ash text-xs uppercase tracking-wider mb-2">
                    <Phone size={14} />
                    <span>Contact</span>
                  </div>
                  <p className="text-cream text-sm" dir="ltr">{branch.phone}</p>
                  <Link href={`tel:${branch.phone.replace(/\s+/g, '')}`} className="text-gold text-xs hover:underline">
                    Call Branch
                  </Link>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  href={`/book?branch=${branch.id}`}
                  className="flex-1 bg-gold text-ink text-center font-semibold py-3 rounded-lg hover:bg-gold-light transition-colors text-sm"
                >
                  احجز الأن
                </Link>
                <Link
                  href={`/branches/${branch.slug}`}
                  className="flex-1 bg-ink border border-ash/20 text-cream text-center font-medium py-3 rounded-lg hover:border-gold/50 transition-colors text-sm flex items-center justify-center gap-2 group-hover:bg-ash/5"
                >
                  View Details <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
