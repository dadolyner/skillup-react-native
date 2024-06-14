import { Content, Header, Screen } from "@components/Layout"
import { TabBar } from "@components/TabBar"
import { Route } from "@core/navigation/config"
import { Text, View } from "@core/tailwind"
import React from "react"
import { useTranslation } from "react-i18next"

export function HomeScreen() {
    return (
        <>
            <Screen.Wrapper>
                <Header.Wrapper>
                    <Header.Empty />
                    <Header.Title title="Home" />
                </Header.Wrapper>

                <Content.Wrapper>
                    <ScreenContent />
                </Content.Wrapper>
            </Screen.Wrapper>

            <TabBar tab={Route.HomeTab} />
        </>
    )
}

function ScreenContent() {
    const { t } = useTranslation()

    return (
        <View>
            <View className="mb-4">
                <Text className="font-regular text-base text-black">{t("template.home_screen")}</Text>
            </View>
        </View>
    )
}
