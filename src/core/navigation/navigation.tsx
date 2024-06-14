import { HomeScreen } from "@features/home/HomeScreen"
import { QuoteScreen } from "@features/quote/QuoteScreen"
import { SettingsScreen } from "@features/settings/SettingsScreen"
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { StackNavigationOptions, createStackNavigator } from "@react-navigation/stack"
import { Route, ScreenParamList } from "./config"

const Stack = createStackNavigator<ScreenParamList>()
const Tab = createBottomTabNavigator()

const stackScreenOptions: StackNavigationOptions = {
    animationTypeForReplace: "pop",
    animationEnabled: true,
    headerShown: false,
}

const tabsScreenOptions: BottomTabNavigationOptions = {
    headerShown: false,
}

export function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={stackScreenOptions} initialRouteName={Route.Home}>
            <Stack.Screen name={Route.Home} component={TabNavigator} />
            <Stack.Screen name={Route.Settings} component={SettingsScreen} />
            <Stack.Screen name={Route.Quote} component={QuoteScreen} />
        </Stack.Navigator>
    )
}

export function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName={Route.HomeTab}
            screenOptions={tabsScreenOptions}
            tabBar={() => {
                return null
            }}
        >
            <Tab.Screen name={Route.HomeTab} component={HomeScreen} />
            <Tab.Screen name={Route.SettingsTab} component={SettingsScreen} />
        </Tab.Navigator>
    )
}
