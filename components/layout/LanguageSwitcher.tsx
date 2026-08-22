'use client';

import { useTranslation } from '@/lib/i18n';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="relative group">
      <button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-full bg-white/5 border border-white/10 text-ink-200 hover:text-white hover:border-white/20 transition">
        <Globe className="w-4 h-4" />
        {locale.toUpperCase()}
      </button>
      
      <div className="absolute right-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="p-1 rounded-xl bg-ink-900 border border-white/10 shadow-xl min-w-[120px]">
          <button
            onClick={() => setLocale('en')}
            className={`w-full text-left px-3 py-2 text-sm rounded-lg transition ${
              locale === 'en' ? 'bg-white/10 text-white' : 'text-ink-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLocale('fr')}
            className={`w-full text-left px-3 py-2 text-sm rounded-lg transition ${
              locale === 'fr' ? 'bg-white/10 text-white' : 'text-ink-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            Français
          </button>
        </div>
      </div>
    </div>
  );
}
