import { useNavigation, useRoute } from "@react-navigation/core"
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack"

export enum Route {
    HomeTab = "HomeTab",
    SettingsTab = "SettingsTab",

    Home = "Home",
    Settings = "Settings",
    Quote = "Quote",
}

export type ScreenProps<T extends Route> = StackScreenProps<ScreenParamList, T>
export type ScreenParamList = {
    [Route.HomeTab]: {}
    [Route.SettingsTab]: {}

    [Route.Home]: {}
    [Route.Settings]: {}
    [Route.Quote]: {}
}

export function useStackNavigator() {
    return useNavigation<StackNavigationProp<ScreenParamList>>()
}

export function useScreenRoute<T extends Route>() {
    return useRoute<ScreenProps<T>["route"]>()
}
