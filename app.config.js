const { version: VERSION, buildNumber: BUILD_NUMBER } = require("./version.json")

const env = {
    EXPO_NAME: process.env.EXPO_NAME,
    EXPO_ICON: process.env.EXPO_ICON,
    EXPO_SPLASH: process.env.EXPO_SPLASH,
    EXPO_IDENTIFIER: process.env.EXPO_IDENTIFIER,
}

if (process.env.NODE_ENV === "development" && process.env.LOCAL_EXPO_PROFILE) {
    const profiles = require("./eas.json")
    const profileKey = process.env.LOCAL_EXPO_PROFILE
    const profileEnv = profiles.build[profileKey]?.env
    if (profileEnv) {
        Object.assign(env, profileEnv)
    } else {
        console.warn(`Missing eas profile "${profileKey}"`)
    }
}

export default {
    expo: {
        owner: "dadolyner",
        slug: "tutorial_v2",
        name: env.EXPO_NAME,
        icon: env.EXPO_ICON,
        version: VERSION,
        orientation: "portrait",
        userInterfaceStyle: "light",
        splash: {
            image: env.EXPO_SPLASH,
            resizeMode: "cover",
            backgroundColor: "#ffffff",
        },
        assetBundlePatterns: ["**/*"],
        ios: {
            icon: env.EXPO_ICON,
            supportsTablet: true,
            bundleIdentifier: env.EXPO_IDENTIFIER,
            buildNumber: BUILD_NUMBER.toString(),
            entitlements: {
                "com.apple.developer.networking.wifi-info": true,
            },
        },
        android: {
            icon: env.EXPO_ICON,
            package: env.EXPO_IDENTIFIER,
            versionCode: BUILD_NUMBER,
        },
        extra: {
            eas: {
                projectId: "e603b77a-91fd-4446-95fd-d2a13aedf433",
            },
        },
        plugins: [
            [
                "expo-build-properties",
                {
                    android: {
                        minSdkVersion: 23,
                    },
                },
            ],
        ],
    },
}
