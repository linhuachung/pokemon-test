import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en/index.json';
import vi from './vn/index.json';
import { STORAGE } from '@/constant/keyStoage';
import { LocalStore } from '@/helpers/local';

const selectedLanguage = LocalStore.get(STORAGE.LANGUAGE) || 'en';
const resources = {
  en,
  vi,
};

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: false,
  detection: {
    order: [ 'cookie', 'localStorage', 'htmlTag', 'path', 'subdomain' ],
    caches: [ 'localStorage', 'cookie' ],
  },
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
  lng: selectedLanguage,
  resources,
});
i18n.on('languageChanged', (language) => {
  LocalStore.set(STORAGE.LANGUAGE, language);
});
export default i18n;
