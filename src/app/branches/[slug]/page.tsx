import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { MapPin, Phone, Clock, Navigation, Check } from 'lucide-react';
import { branches } from '@/lib/data';

interface BranchPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return branches.map((branch) => ({
    slug: branch.slug,
  }));
}

export function generateMetadata({ params }: BranchPageProps): Metadata {
  const branch = branches.find((b) => b.slug === params.slug);
  
  if (!branch) {
    return { title: 'Branch Not Found | Dr Cut' };
  }

  return {
    title: `${branch.name} | Dr Cut`,
    description: `Visit our ${branch.city} branch at ${branch.address}. Premium grooming services by master barbers.`,
  };
}

export default function BranchDetailPage({ params }: BranchPageProps) {
  const branch = branches.find((b) => b.slug === params.slug);

  if (!branch) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src={branch.image}
          alt={branch.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-6xl mx-auto w-full px-4 pb-16">
            {branch.featured && (
              <span className="inline-block bg-gold text-ink text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                Flagship Branch
              </span>
            )}
            <h1 className="font-display text-4xl sm:text-6xl text-gold mb-4">{branch.name}</h1>
            <div className="flex flex-wrap gap-6 text-cream">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-gold" />
                <span>{branch.address}, {branch.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-gold" />
                <span dir="ltr">{branch.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="font-display text-3xl text-cream mb-6">About this location</h2>
              <p className="text-ash-light leading-relaxed text-lg mb-6">
                Located in the heart of {branch.city}, {branch.name} offers a sanctuary for the modern gentleman. 
                Our master barbers provide bespoke grooming services in an atmosphere of uncompromised luxury. 
                Whether you need a quick touch-up or the full Royal Package, this branch is equipped with state-of-the-art 
                facilities to ensure your experience is nothing short of exceptional.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Complimentary beverages', 'Free Wi-Fi', 'Private VIP rooms', 'Premium grooming products'].map((amenity, i) => (
                  <li key={i} className="flex items-center gap-3 text-cream">
                    <Check size={18} className="text-gold" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-3xl text-cream mb-6">Master Barbers</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="text-center">
                    <div className="w-full aspect-square bg-ink-mid rounded-2xl mb-4 relative overflow-hidden border border-ash/10">
                      <Image 
                        src={`/img/barber${i}.jpg`} 
                        alt="Barber" 
                        fill 
                        className="object-cover"
                        // Note: Using a placeholder approach for barbers since they aren't in data.ts
                      />
                      <div className="absolute inset-0 bg-ink/20 mix-blend-multiply" />
                    </div>
                    <h3 className="font-medium text-cream">Master Barber</h3>
                    <p className="text-gold text-sm">Senior Stylist</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-ink-mid border border-ash/10 rounded-2xl p-6 sticky top-32">
              <Link
                href={`/book?branch=${branch.id}`}
                className="block w-full bg-gold text-ink text-center font-semibold py-4 rounded-lg hover:bg-gold-light transition-all shadow-[0_0_20px_rgba(201,168,76,0.2)] mb-8"
              >
                Book Appointment
              </Link>

              <h3 className="font-display text-xl text-cream mb-4 flex items-center gap-2">
                <Clock className="text-gold" /> Opening Hours
              </h3>
              <div className="space-y-3 mb-8">
                {branch.hours.map((schedule, i) => {
                  const isToday = new Date().toLocaleDateString('en-US', { weekday: 'long' }) === schedule.day;
                  return (
                    <div key={i} className={`flex justify-between text-sm ${isToday ? 'text-gold font-medium' : 'text-ash-light'}`}>
                      <span>{schedule.day}</span>
                      <span>{schedule.open} - {schedule.close}</span>
                    </div>
                  );
                })}
              </div>

              <h3 className="font-display text-xl text-cream mb-4 flex items-center gap-2">
                <Navigation className="text-gold" /> Location
              </h3>
              <p className="text-ash-light text-sm mb-4">
                {branch.address}<br />{branch.city}, Saudi Arabia
              </p>
              
              <a 
                href={`https://maps.google.com/?q=${branch.coordinates.lat},${branch.coordinates.lng}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-ink border border-ash/20 text-cream text-center font-medium py-3 rounded-lg hover:border-gold/50 transition-colors text-sm flex items-center justify-center gap-2"
              >
                Get Directions
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
