module.exports = function (api) {
    api.cache(true)
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            "nativewind/babel",
            [
                "module-resolver",
                {
                    alias: {
                        "@assets": "./assets",
                        "@constants": "./src/constants",
                        "@components": "./src/components",
                        "@core": "./src/core",
                        "@features": "./src/features",
                        "@store": "./src/store",
                    },
                },
            ],
        ],
    }
}
