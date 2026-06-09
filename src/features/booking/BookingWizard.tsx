'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from './BookingContext';
import { StepIndicator } from './StepIndicator';
import { BranchSelector } from './BranchSelector';
import { ServiceSelector } from './ServiceSelector';
import { DateTimePicker } from './DateTimePicker';
import { CustomerForm } from './CustomerForm';
import { BookingSummary } from './BookingSummary';

export function BookingWizard() {
  const { state } = useBooking();
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to top of wizard on step change
  useEffect(() => {
    if (containerRef.current) {
      const top = containerRef.current.offsetTop - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, [state.step]);

  const renderStep = () => {
    switch (state.step) {
      case 1:
        return <BranchSelector />;
      case 2:
        return <ServiceSelector />;
      case 3:
        return <DateTimePicker />;
      case 4:
        return <CustomerForm />;
      case 5:
        return <BookingSummary />;
      default:
        return null;
    }
  };

  return (
    <div ref={containerRef} className="w-full max-w-4xl mx-auto" dir="rtl">
      <div className="bg-ink border border-ash/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

        {/* Wizard Content */}
        <div className="relative z-10">
          <StepIndicator />
          
          <div className="mt-8 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={state.step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
