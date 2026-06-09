import type { Branch, Service, Testimonial, TimeSlot } from '@/types';

// ─── Branches ────────────────────────────────────────────────────────────────

export const branches: Branch[] = [
  {
    id: 'branch-01',
    slug: 'riyadh-olaya',
    name: 'Dr Cut — Olaya',
    address: 'Olaya Street, Al Olaya District',
    city: 'Riyadh',
    phone: '+966 11 234 5678',
    featured: true,
    image: '/img/service1.jpg',
    coordinates: { lat: 24.6877, lng: 46.6863 },
    hours: [
      { day: 'Sunday', open: '10:00 AM', close: '10:00 PM' },
      { day: 'Monday', open: '10:00 AM', close: '10:00 PM' },
      { day: 'Tuesday', open: '10:00 AM', close: '10:00 PM' },
      { day: 'Wednesday', open: '10:00 AM', close: '10:00 PM' },
      { day: 'Thursday', open: '10:00 AM', close: '11:00 PM' },
      { day: 'Friday', open: '02:00 PM', close: '11:00 PM' },
      { day: 'Saturday', open: '10:00 AM', close: '11:00 PM' },
    ],
  },
];

// ─── Services ────────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    id: 'svc-01',
    name: 'قصة دكتور كت المميزة',
    description: 'قصة شعر دقيقة مصممة لتناسب أسلوبك. تشمل استشارة، غسيل، قص، وتصفيف.',
    duration: 45,
    price: 120,
    category: 'haircut',
    popular: true,
    image: '/img/barber1.jpg',
    includes: ['استشارة', 'تدليك فروة الرأس', 'غسيل ممتاز', 'قص وتصفيف'],
  },
  {
    id: 'svc-02',
    name: 'تدرج كلاسيكي (فید)',
    description: 'تدرج ناعم مع خطوط نظيفة. دقة خالدة للرجل العصري.',
    duration: 35,
    price: 90,
    category: 'haircut',
    image: '/img/barber2.jpg',
    includes: ['استشارة', 'قص وتدرج', 'تحديد الحواف'],
  },
  {
    id: 'svc-03',
    name: 'نحت اللحية',
    description: 'تشكيل وتصفيف احترافي للحية. منشفة ساخنة، تشذيب، وزيت تشطيب.',
    duration: 30,
    price: 75,
    category: 'beard',
    popular: true,
    image: '/img/barber3.jpg',
    includes: ['منشفة ساخنة', 'تشذيب وتشكيل اللحية', 'زيت اللحية'],
  },
  {
    id: 'svc-04',
    name: 'الباقة الملكية',
    description: 'تجربة عناية متكاملة. قص، نحت اللحية، علاج فروة الرأس، وعناية بالوجه.',
    duration: 90,
    price: 250,
    category: 'package',
    popular: true,
    image: '/img/barber4.jpg',
    includes: ['القصة المميزة', 'نحت اللحية', 'علاج فروة الرأس', 'عناية سريعة بالوجه'],
  },
  {
    id: 'svc-05',
    name: 'علاج فروة الرأس',
    description: 'تنظيف عميق وترطيب لفروة الرأس. يخفف الجفاف ويعزز النمو الصحي.',
    duration: 30,
    price: 85,
    category: 'treatment',
    image: '/img/branch1.jpg',
    includes: ['تحليل فروة الرأس', 'تنظيف عميق', 'قناع علاجي', 'تدليك'],
  },
  {
    id: 'svc-06',
    name: 'حلاقة بالمنشفة الساخنة',
    description: 'حلاقة تقليدية بالموس المستقيم مع تحضير ممتاز بالمنشفة الساخنة.',
    duration: 40,
    price: 100,
    category: 'beard',
    image: '/img/branch2.jpg',
    includes: ['تحضير بالمنشفة الساخنة', 'حلاقة بالموس المستقيم', 'بلسم ما بعد الحلاقة'],
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: 'test-01',
    name: 'Ahmed Al-Rashid',
    rating: 5,
    review: 'Dr Cut is on another level. The attention to detail and the experience from the moment you walk in — nothing compares. My go-to every week.',
    date: '2024-11-15',
    branch: 'Dr Cut — Olaya',
  },
  {
    id: 'test-02',
    name: 'Khalid Mansour',
    rating: 5,
    review: 'The Royal Package is worth every riyal. Walked out feeling like a completely new person. Incredible service and atmosphere.',
    date: '2024-11-22',
    branch: 'Dr Cut — Al Nakheel',
  },
  {
    id: 'test-03',
    name: 'Omar Saud',
    rating: 5,
    review: 'I\'ve tried many barbershops across Riyadh. Dr Cut sets the standard. The barbers are true professionals and the booking system is seamless.',
    date: '2024-12-01',
    branch: 'Dr Cut — Tahlia',
  },
  {
    id: 'test-04',
    name: 'Faisal Al-Qahtani',
    rating: 5,
    review: 'The Signature Cut is perfection every single time. They know exactly what I want. The scalp massage alone is worth the visit.',
    date: '2024-12-10',
    branch: 'Dr Cut — Corniche',
  },
  {
    id: 'test-05',
    name: 'Tariq Ibrahim',
    rating: 5,
    review: 'Luxury grooming done right. The hot towel shave was an experience I didn\'t know I needed. Will be back every month.',
    date: '2024-12-18',
    branch: 'Dr Cut — Olaya',
  },
];

// ─── Time Slots ───────────────────────────────────────────────────────────────

export const generateTimeSlots = (date: string): TimeSlot[] => {
  const baseSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
    '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM',
    '08:00 PM', '08:30 PM', '09:00 PM',
  ];

  // Simulate some unavailable slots based on date string for determinism
  const seed = date.split('-').reduce((acc, n) => acc + parseInt(n), 0);
  return baseSlots.map((time, index) => ({
    id: `slot-${index}`,
    time,
    available: (index + seed) % 4 !== 0, // roughly 75% available
  }));
};

// ─── Stats ────────────────────────────────────────────────────────────────────

export const stats = [
  { label: 'Years of Excellence', value: '7+' },
  { label: 'Happy Clients', value: '50K+' },
  { label: 'Expert Barbers', value: '60+' },
  { label: 'Locations', value: '1' },
];
