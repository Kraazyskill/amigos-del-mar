import { en, type TranslationKey } from './locales/en'
import { es } from './locales/es'

export type Language = 'en' | 'es'

const translations = {
  en,
  es,
}

export function getTranslation(language: Language, key: TranslationKey, params?: Record<string, string | number>): string {
  let text: string = translations[language][key] || translations.en[key] || key
  
  // Replace placeholders like {year}, {min}, {max}, etc.
  if (params) {
    Object.entries(params).forEach(([paramKey, value]) => {
      text = text.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), String(value))
    })
  }
  
  return text
}

export { en, es }
export type { TranslationKey }

