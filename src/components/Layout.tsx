import { useStackNavigator } from "@core/navigation/config"
import { Icon, ScrollView, Text, TouchableOpacity, View } from "@core/tailwind"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { ReactNode, useCallback } from "react"
import { Platform } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export const Screen = Object.freeze({
    Wrapper({ children }: { children: ReactNode }) {
        return (
            <ScrollView
                stickyHeaderIndices={[0]}
                contentContainerStyle={{ flexGrow: 1 }}
                className="flex flex-1 bg-white"
            >
                {children}
            </ScrollView>
        )
    },
})

export const Header = Object.freeze({
    Wrapper({ children }: { children: ReactNode }) {
        const insets = useSafeAreaInsets()

        return (
            <View className="bg-gray-300">
                <View
                    className="flex w-full flex-row items-center justify-between px-4 pb-2"
                    style={{ paddingTop: Platform.OS === "ios" ? insets.top : insets.top + 20 }}
                >
                    {children}
                </View>
            </View>
        )
    },
    Title({ title }: { title: string }) {
        return <Text className="text-xl font-bold text-black">{title}</Text>
    },
    Empty() {
        return <View className="w-10"></View>
    },
    BackButton() {
        const navigator = useStackNavigator()

        const goBack = useCallback(() => {
            if (navigator.canGoBack()) {
                navigator.goBack()
            }
        }, [navigator])

        return (
            <TouchableOpacity onPress={goBack}>
                <View className="flex flex-row items-center justify-center py-1">
                    <Icon icon={faAngleLeft} className="text-black" />
                </View>
            </TouchableOpacity>
        )
    },
})

export const Content = Object.freeze({
    Wrapper({ children }: { children: ReactNode }) {
        return <View className="flex flex-1 p-4">{children}</View>
    },
})
