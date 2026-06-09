'use client';

import { useState } from 'react';
import { useBooking } from './BookingContext';
import { branches, services } from '@/lib/data';
import { MapPin, Calendar, Clock, Scissors, User, Phone, Mail, FileText, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ConfirmationCard } from './ConfirmationCard';

export function BookingSummary() {
  const { state, prevStep, reset } = useBooking();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Look up full details
  const branch = branches.find((b) => b.id === state.branchId);
  const service = services.find((s) => s.id === state.serviceId);
  const { date, timeSlot, customer } = state;

  if (!branch || !service || !date || !timeSlot || !customer) {
    return (
      <div className="text-center py-12" dir="rtl">
        <p className="text-red-400 mb-4">بيانات الحجز غير مكتملة.</p>
        <button onClick={reset} className="text-gold underline">البدء من جديد</button>
      </div>
    );
  }

  const handleConfirm = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
      // We don't advance the global step because Confirmation is its own view state here
    }, 1500);
  };

  if (isConfirmed) {
    return <ConfirmationCard />;
  }

  // Format date nicely
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div dir="rtl">
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-display text-2xl text-cream">مراجعة وتأكيد</h2>
        <button onClick={prevStep} className="text-ash-light hover:text-gold text-sm transition-colors flex items-center gap-1" disabled={isSubmitting}>
          رجوع &rarr;
        </button>
      </div>
      <p className="text-ash-light text-sm mb-8">يرجى التحقق من بياناتك قبل التأكيد</p>

      <div className="space-y-6">
        {/* Appointment Card */}
        <div className="bg-ink-mid border border-ash/20 rounded-2xl p-6 relative overflow-hidden">
          {/* Decorative watermark */}
          <Scissors size={120} className="absolute -right-8 -top-8 text-ash/5 rotate-12" />
          
          <h3 className="text-gold font-display text-lg mb-4 border-b border-ash/10 pb-2">تفاصيل الموعد</h3>
          
          <div className="space-y-4 relative z-10">
            <div className="flex items-start gap-3">
              <Scissors size={18} className="text-ash mt-0.5" />
              <div>
                <p className="text-cream font-medium">{service.name}</p>
                <p className="text-ash-light text-sm">{service.duration} دقيقة • {service.price} ريال</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-ash mt-0.5" />
              <div>
                <p className="text-cream font-medium">{branch.name}</p>
                <p className="text-ash-light text-sm">{branch.address}, {branch.city}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pt-2">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-gold" />
                <span className="text-cream text-sm">{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-gold" />
                <span className="text-cream text-sm">{timeSlot}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Info Card */}
        <div className="bg-ink-mid border border-ash/20 rounded-2xl p-6">
          <h3 className="text-gold font-display text-lg mb-4 border-b border-ash/10 pb-2">بياناتك الشخصية</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <User size={16} className="text-ash" />
              <span className="text-cream text-sm">{customer.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-ash" />
              <span className="text-cream text-sm" dir="ltr">{customer.phone}</span>
            </div>
            {customer.email && (
              <div className="flex items-center gap-3 sm:col-span-2">
                <Mail size={16} className="text-ash" />
                <span className="text-cream text-sm" dir="ltr">{customer.email}</span>
              </div>
            )}
            {customer.notes && (
              <div className="flex items-start gap-3 sm:col-span-2 mt-2">
                <FileText size={16} className="text-ash mt-0.5 shrink-0" />
                <span className="text-ash-light text-sm italic">&quot;{customer.notes}&quot;</span>
              </div>
            )}
          </div>
        </div>

        {/* Total & Action */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-ash/10 mt-8">
          <div>
            <p className="text-ash-light text-sm">المبلغ الإجمالي (الدفع في الفرع)</p>
            <p className="text-2xl font-display text-cream">{service.price} ريال</p>
          </div>
          
          <button
            onClick={handleConfirm}
            disabled={isSubmitting}
            className={cn(
              "w-full sm:w-auto bg-gold text-ink font-semibold px-10 py-4 rounded-lg flex items-center justify-center gap-2 transition-all",
              isSubmitting ? "opacity-80 cursor-wait" : "hover:bg-gold-light hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]"
            )}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-ink/30 border-t-ink rounded-full animate-spin" />
                جاري التأكيد...
              </>
            ) : (
              <>
                <CheckCircle size={18} />
                تأكيد الحجز
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
