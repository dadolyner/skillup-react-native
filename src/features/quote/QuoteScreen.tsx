import { Content, Header, Screen } from "@components/Layout"
import { TabBar } from "@components/TabBar"
import { Route } from "@core/navigation/config"
import { Text, View } from "@core/tailwind"
import React from "react"
import { useTranslation } from "react-i18next"

export function QuoteScreen() {
    const { t } = useTranslation()

    return (
        <>
            <Screen.Wrapper>
                <Header.Wrapper>
                    <Header.Empty />
                    <Header.Title title={t("template.quote")} />
                </Header.Wrapper>

                <Content.Wrapper>
                    <ScreenContent />
                </Content.Wrapper>
            </Screen.Wrapper>

            <TabBar tab={Route.QuotesTab} />
        </>
    )
}

function ScreenContent() {
    const { t } = useTranslation()

    return (
        <View>
            <View className="mb-4">
                <Text className="font-regular text-base text-black">{t("template.quote_screen")}</Text>
            </View>
        </View>
    )
}
