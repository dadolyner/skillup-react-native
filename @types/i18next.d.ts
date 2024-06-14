import en from "@assets/locales/en.json"

declare module "i18next" {
    interface CustomTypeOptions {
        defaultNS: "en"
        resources: {
            en: typeof en
        }
    }
}
