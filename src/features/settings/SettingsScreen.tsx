import { Content, Header, Screen } from "@components/Layout"
import { TabBar } from "@components/TabBar"
import { Route } from "@core/navigation/config"
import { Text, View } from "@core/tailwind"
import React from "react"
import { useTranslation } from "react-i18next"

export function SettingsScreen() {
    const { t } = useTranslation()

    return (
        <>
            <Screen.Wrapper>
                <Header.Wrapper>
                    <Header.Empty />
                    <Header.Title title={t("template.settings")} />
                </Header.Wrapper>

                <Content.Wrapper>
                    <ScreenContent />
                </Content.Wrapper>
            </Screen.Wrapper>

            <TabBar tab={Route.SettingsTab} />
        </>
    )
}

function ScreenContent() {
    const { t } = useTranslation()

    return (
        <View>
            <Text className="font-regular text-base text-black">{t("template.settings_screen")}</Text>
        </View>
    )
}
