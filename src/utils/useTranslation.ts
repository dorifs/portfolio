import es from '../i18n/es'
import en from '../i18n/en'
import de from '../i18n/de'
type Lang = 'es' | 'en' | 'de';

export function useTranslations(lang: Lang) {
  switch (lang) {
    case 'es':
      return es;
    case 'en':
      return en;
    case 'de':
      return de;
    default:
      return es;
  }
}