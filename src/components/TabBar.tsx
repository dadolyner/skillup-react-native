import { Route, useStackNavigator } from "@core/navigation/config"
import { Icon, TouchableOpacity, View } from "@core/tailwind"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faComment, faGear, faHome } from "@fortawesome/free-solid-svg-icons"
import React from "react"

export function TabBar({ tab }: { tab?: Route }) {
    const navigator = useStackNavigator()

    const tabBarItems = [
        {
            icon: faHome,
            tab: Route.HomeTab,
            selectedTab: tab,
            onPress: () => navigator.navigate(Route.HomeTab, {}),
        },
        {
            icon: faGear,
            tab: Route.SettingsTab,
            selectedTab: tab,
            onPress: () => navigator.navigate(Route.SettingsTab, {}),
        },
        {
            icon: faComment,
            tab: Route.QuotesTab,
            selectedTab: tab,
            onPress: () => navigator.navigate(Route.QuotesTab, {}),
        },
    ] as const

    return (
        <>
            <View className="bg-gray-300">
                <View className="flex flex-row items-center justify-around p-4 pb-6">
                    {tabBarItems.map((item) => (
                        <TabBarOption
                            icon={item.icon}
                            tab={item.tab}
                            selectedTab={item.selectedTab}
                            onPress={item.onPress}
                        />
                    ))}
                </View>
            </View>
        </>
    )
}

function TabBarOption({
    icon,
    tab,
    selectedTab,
    onPress,
}: {
    icon: IconProp
    tab?: Route
    selectedTab?: Route
    onPress: () => void
}) {
    const tabIconColor = !selectedTab ? "text-zinc-400" : tab === selectedTab ? "text-black" : "text-zinc-400"

    return (
        <>
            <TouchableOpacity
                className={["mx-2 flex flex-1 items-center justify-center rounded-xl p-4"].join(" ")}
                onPress={onPress}
            >
                <Icon size={20} icon={icon} className={tabIconColor} />
            </TouchableOpacity>
        </>
    )
}
