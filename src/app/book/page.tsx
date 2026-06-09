import { Metadata } from 'next';
import { BookingWizard } from '@/features/booking/BookingWizard';
import { BookingProvider } from '@/features/booking/BookingContext';

export const metadata: Metadata = {
  title: 'احجز موعداً | Dr Cut',
  description: 'احجز مقعدك في دكتور كت. اختر الفرع والخدمة والوقت المفضل لديك بكل سهولة.',
};

export default function BookPage() {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl sm:text-5xl text-gold mb-4">احجز مقعدك</h1>
        <p className="text-ash-light max-w-xl mx-auto">
          اختبر العناية المتميزة. اتبع الخطوات أدناه لحجز موعدك في فرع دكتور كت المفضل لديك.
        </p>
      </div>

      <BookingProvider>
        <BookingWizard />
      </BookingProvider>
    </div>
  );
}
