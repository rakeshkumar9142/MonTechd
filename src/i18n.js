import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';
import translationHI from './locales/hi/translation.json';

const resources = {
    en : {
        translation : translationEN,
    },
    ru : {
        translation : translationRU,
    },
    hi : {
        translation : translationHI,
    },
};

i18n 
// 1. Use the languase detector plugin
.use(LanguageDetector)

// 2. Pass the i18n instance to react-i18next

.use(initReactI18next)

// 3. Initialize i18next

.init({
    resources, // your translations
    fallbackLng: 'en', // Default Languase if detection fails
    supportedLngs: ['en', 'hi', 'ru'],

    interpolation : {
        
        //React already protects from XSS attacks
        escapeValue : false,
    }
})

export default i18n;