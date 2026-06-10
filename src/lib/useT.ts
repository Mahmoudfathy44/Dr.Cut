'use client';

import { useContext } from 'react';
import { LanguageContext } from '@/app/LanguageProvider';
import { translations, type Lang } from '@/lib/translations';

/**
 * Returns the translation object for the current language,
 * plus `lang` and `toggle` from the LanguageContext.
 */
export function useT() {
  const { lang, toggle } = useContext(LanguageContext);
  const t = translations[lang as Lang] ?? translations.en;
  return { t, lang, toggle };
}
