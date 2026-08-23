'use client';

import { createContext, useContext, ReactNode } from 'react';
import { translations, Locale } from '@/translations';

const I18nContext = createContext<{
  t: typeof translations.en;
  locale: Locale;
  setLocale: (locale: Locale) => void;
} | null>(null);

export function I18nProvider({ 
  children, 
  locale 
}: { 
  children: ReactNode; 
  locale: Locale 
}) {
  const setLocale = (newLocale: Locale) => {
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
    window.location.href = `/${newLocale}`;
  };

  return (
    <I18nContext.Provider value={{ t: translations[locale], locale, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within I18nProvider');
  }
  return context;
}
