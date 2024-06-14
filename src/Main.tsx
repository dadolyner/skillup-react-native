import "@core/locale"
import { StackNavigator } from "@core/navigation/navigation"
import { QueryClientProvider } from "@core/query"
import { Text, View } from "@core/tailwind"
import { NavigationContainer } from "@react-navigation/native"
import { useFonts } from "expo-font"
import { NativeWindStyleSheet } from "nativewind"
import { useEffect, useState } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { SafeAreaProvider } from "react-native-safe-area-context"

NativeWindStyleSheet.setOutput({
    default: "native",
})

const openSansFonts = {
    Regular: require("../assets/fonts/OpenSans-Regular.ttf"),
    SemiBold: require("../assets/fonts/OpenSans-SemiBold.ttf"),
    Bold: require("../assets/fonts/OpenSans-Bold.ttf"),
}

export default function Main() {
    const [appIsReady, setAppIsReady] = useState(false)
    const [fontsLoaded] = useFonts(openSansFonts)

    useEffect(() => {
        async function PrepareApp() {
            try {
                await new Promise((resolve) => setTimeout(resolve, 2000))
            } catch (e) {
                console.warn(e)
            } finally {
                setAppIsReady(true)
            }
        }
        PrepareApp()
    }, [])

    if (!appIsReady || !fontsLoaded) return null

    return (
        <ErrorBoundary FallbackComponent={TopLevelError}>
            <SafeAreaProvider>
                <QueryClientProvider>
                    <NavigationContainer>
                        <StackNavigator />
                    </NavigationContainer>
                </QueryClientProvider>
            </SafeAreaProvider>
        </ErrorBoundary>
    )
}

function TopLevelError() {
    return (
        <View className="flex flex-1 items-center justify-center">
            <Text>Something went wrong.</Text>
        </View>
    )
}
