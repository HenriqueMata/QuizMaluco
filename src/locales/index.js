import { Platform, NativeModules } from 'react-native';

import i18n from 'i18n-js';

import en from './en-US';
import pt from './pt-BR';

const normalizeTranslate = {
  en_US: 'en_US',
  pt_BR: 'pt_BR',
  en: 'en_US',
  pt_US: 'pt_BR',
};

// Função responsável por adquirir o idioma utilizado no device
const getLanguageByDevice = () => {
  return Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale // Adquire o idioma no device iOS
    : NativeModules.I18nManager.localeIdentifier; // Adquire o idioma no device Android
};

// Aqui setamos os idiomas que o I18N irá dar suporte
i18n.translations = {
  en_US: en,
  pt_BR: pt,
};

// Função responsável por verificar se o idioma atual do divice está sendo suportado, caso não ele irá setar como 'en_US'
const setLanguageToI18n = () => {
  const language = getLanguageByDevice();
  const translateNormalize = normalizeTranslate[language];
  const iHaveThisLanguage = i18n.translations.hasOwnProperty(
    translateNormalize
  );
  iHaveThisLanguage
    ? (i18n.locale = translateNormalize)
    : (i18n.defaultLocale = 'en_US');
};

setLanguageToI18n();

export const translate = key => i18n.t(key);

export default i18n;
