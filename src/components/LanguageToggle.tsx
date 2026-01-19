import React from 'react';
import { Globe } from 'lucide-react';
interface LanguageToggleProps {
  language: 'en' | 'es';
  onToggle: (lang: 'en' | 'es') => void;
}
export function LanguageToggle({
  language,
  onToggle
}: LanguageToggleProps) {
  return <button onClick={() => onToggle(language === 'en' ? 'es' : 'en')} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors text-sm font-medium" aria-label="Toggle language">
      <Globe size={16} />
      <span>{language === 'en' ? 'English' : 'Español'}</span>
    </button>;
}