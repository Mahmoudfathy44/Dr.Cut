'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { useBooking } from './BookingContext';
import { branches, services } from '@/lib/data';
import Link from 'next/link';

export function ConfirmationCard() {
  const { state, reset } = useBooking();
  const branch = branches.find((b) => b.id === state.branchId);
  const service = services.find((s) => s.id === state.serviceId);

  if (!branch || !service || !state.date || !state.timeSlot) {
    return null;
  }

  const formattedDate = new Date(state.date).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-ink-mid border border-gold/30 rounded-2xl p-8 text-center max-w-md mx-auto relative overflow-hidden"
      dir="rtl"
    >
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gold/20 blur-[50px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="mx-auto w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6"
      >
        <CheckCircle size={32} className="text-gold" />
      </motion.div>

      <h2 className="font-display text-3xl text-cream mb-2">تم تأكيد الحجز</h2>
      <p className="text-ash-light text-sm mb-8">
        لقد أرسلنا رسالة تأكيد تتضمن التفاصيل إلى بريدك الإلكتروني.
      </p>

      <div className="bg-ink rounded-xl p-5 mb-8 text-left space-y-4">
        <div className="flex items-center gap-3 pb-4 border-b border-ash/10">
          <div className="w-10 h-10 rounded-full bg-ink-light flex items-center justify-center shrink-0">
            <span className="text-gold font-display text-lg">Dr</span>
          </div>
          <div>
            <p className="text-cream font-medium text-sm">{service.name}</p>
            <p className="text-ash text-xs">{branch.name}</p>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2 text-ash-light">
            <Calendar size={14} className="text-gold" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2 text-ash-light">
            <Clock size={14} className="text-gold" />
            <span>{state.timeSlot}</span>
          </div>
        </div>

        <div className="flex items-start gap-2 text-sm pt-2">
          <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
          <span className="text-ash-light leading-snug">{branch.address}, {branch.city}</span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={reset}
          className="w-full py-3 rounded-lg border border-gold text-gold font-medium hover:bg-gold/5 transition-colors"
        >
          حجز موعد آخر
        </button>
        <Link
          href="/"
          className="w-full py-3 rounded-lg text-ash-light hover:text-cream text-sm flex items-center justify-center gap-2 transition-colors"
        >
          <ArrowRight size={14} className="rotate-180" /> العودة للرئيسية 
        </Link>
      </div>
    </motion.div>
  );
}
