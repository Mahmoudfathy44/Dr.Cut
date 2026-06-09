'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Phone, Check } from 'lucide-react';
import { branches } from '@/lib/data';
import { useBooking } from './BookingContext';
import { cn } from '@/lib/utils';

export function BranchSelector() {
  const { state, setBranch, nextStep } = useBooking();

  const handleSelect = (branchId: string) => {
    setBranch(branchId);
    // Auto-advance after short delay for smooth UX
    setTimeout(() => nextStep(), 250);
  };

  return (
    <div>
      <h2 className="font-display text-2xl text-cream mb-2">اختر فرعاً</h2>
      <p className="text-ash-light text-sm mb-8">اختر فرع دكتور كت المفضل لديك</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {branches.map((branch, i) => {
          const isSelected = state.branchId === branch.id;
          return (
            <motion.button
              key={branch.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              onClick={() => handleSelect(branch.id)}
              className={cn(
                'group relative text-left rounded-2xl border overflow-hidden transition-all duration-300',
                isSelected
                  ? 'border-gold shadow-gold ring-1 ring-gold/30'
                  : 'border-ash/20 hover:border-gold/40 hover:shadow-dark'
              )}
            >
              {/* Image */}
              <div className="relative h-36 w-full overflow-hidden">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-mid via-ink/30 to-transparent" />
                {branch.featured && (
                  <span className="absolute top-2 left-2 bg-gold text-ink text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full">
                    رئيسي
                  </span>
                )}
                {isSelected && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-gold rounded-full flex items-center justify-center shadow-gold">
                    <Check size={12} className="text-ink" strokeWidth={3} />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4 bg-ink-mid">
                <h3 className={cn(
                  'font-semibold text-sm mb-2 transition-colors duration-300',
                  isSelected ? 'text-gold' : 'text-cream group-hover:text-gold'
                )}>
                  {branch.name}
                </h3>
                <div className="flex items-start gap-1.5 text-ash-light text-xs mb-1">
                  <MapPin size={11} className="text-gold shrink-0 mt-0.5" />
                  <span>{branch.address}, {branch.city}</span>
                </div>
                <div className="flex items-center gap-1.5 text-ash-light text-xs">
                  <Phone size={11} className="text-gold shrink-0" />
                  <span>{branch.phone}</span>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
