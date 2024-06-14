import en from "@assets/locales/en.json"
import i18next, { ParseKeys, TFunction } from "i18next"
import moment from "moment"
import "moment/locale/en-gb"
import { initReactI18next } from "react-i18next"

export type TKey = ParseKeys<"en">
export type TFunc = TFunction<"en">

moment.locale("en-gb")
i18next.use(initReactI18next).init({
    compatibilityJSON: "v3",
    lng: "en",
    fallbackLng: "en",
    resources: {
        en: { translation: en },
    },
})
