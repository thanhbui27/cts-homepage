import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en';
import vi from './locales/vi';
import ja from './locales/ja';

const i18nextOptions = {
  resources: {
    en: {
      translation: en,
    },
    vi: {
      translation: vi,
    },
    ja: {
      translation: ja,
    },
  },
  lng: 'vi',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: { useSuspense: false },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(i18nextOptions);

export default i18n;
