import { Metadata } from 'next';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Dr Cut',
  description: 'Get in touch with the Dr Cut team for inquiries, feedback, or corporate partnerships.',
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="font-display text-4xl sm:text-5xl text-gold mb-6">Get in Touch</h1>
        <p className="text-ash-light text-lg leading-relaxed">
          Have a question or need assistance? Our concierge team is here to ensure your experience with Dr Cut is flawless from start to finish.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8 bg-ink-mid border border-ash/10 rounded-2xl p-8 lg:p-12">
          <h2 className="font-display text-2xl text-cream mb-8">Contact Information</h2>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
              <Phone size={24} className="text-gold" />
            </div>
            <div>
              <p className="text-ash text-sm uppercase tracking-wider mb-1">Call Us</p>
              <p className="text-cream text-lg font-medium" dir="ltr">+966 9200 12345</p>
              <p className="text-ash-light text-sm mt-1">Mon-Sun, 10:00 AM - 10:00 PM</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
              <Mail size={24} className="text-gold" />
            </div>
            <div>
              <p className="text-ash text-sm uppercase tracking-wider mb-1">Email Us</p>
              <p className="text-cream text-lg font-medium">concierge@drcut.com</p>
              <p className="text-ash-light text-sm mt-1">We aim to reply within 24 hours</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
              <MapPin size={24} className="text-gold" />
            </div>
            <div>
              <p className="text-ash text-sm uppercase tracking-wider mb-1">Head Office</p>
              <p className="text-cream text-lg font-medium">Olaya Tower, Riyadh</p>
              <p className="text-ash-light text-sm mt-1">Saudi Arabia</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-ink border border-ash/20 rounded-2xl p-8 lg:p-12">
          <h2 className="font-display text-2xl text-cream mb-8">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cream mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-ink-mid border border-ash/20 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cream mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-ink-mid border border-ash/20 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-colors"
                  placeholder="Your email"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-cream mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full bg-ink-mid border border-ash/20 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-colors"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-cream mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-ink-mid border border-ash/20 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-colors resize-none"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full bg-gold text-ink font-semibold px-8 py-4 rounded-lg hover:bg-gold-light transition-colors shadow-[0_0_20px_rgba(201,168,76,0.2)] flex items-center justify-center gap-2"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
