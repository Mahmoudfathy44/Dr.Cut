'use client';

import { createContext, useEffect, useState, ReactNode } from 'react';

// ---------- Context ----------
export const LanguageContext = createContext<{
  lang: string;
  toggle: () => void;
}>({
  lang: 'en',
  toggle: () => {},
});

// ---------- Provider ----------
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState('en');

  // Load persisted language on mount
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
    const initial = stored ?? 'en';
    setLang(initial);
    applyLang(initial);
  }, []);

  const applyLang = (l: string) => {
    const html = document.documentElement;
    html.lang = l;
    html.dir = l === 'ar' ? 'rtl' : 'ltr';
  };

  const toggle = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', newLang);
    }
    applyLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}
