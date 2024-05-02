import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import enJSON from "/public/locales/en/common.json";
import thJSON from "/public/locales/th/common.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {...enJSON},
    th: {...thJSON},
  },
  lng: "th",
});

export default i18n;
