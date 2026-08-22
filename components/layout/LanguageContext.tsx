'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Locale } from '@/lib/translations';

type ContextType = {
  t: typeof translations.en;
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<ContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale;
    if (saved) setLocaleState(saved);
  }, []);

  return (
    <LanguageContext.Provider value={{ t: translations[locale], locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useTranslation must be used within LanguageProvider');
  return context;
}
