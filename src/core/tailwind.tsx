import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { styled } from "nativewind"
import {
    Animated as BaseAnimated,
    Image as BaseImage,
    Modal as BaseModal,
    ScrollView as BaseScrollView,
    Switch as BaseSwitch,
    Text as BaseText,
    TextInput as BaseTextInput,
    TouchableOpacity as BaseTouchableOpacity,
    View as BaseView,
} from "react-native"

export const View = styled(BaseView)
export const Image = styled(BaseImage)
export const Text = styled(BaseText)
export const TextInput = styled(BaseTextInput)
export const ScrollView = styled(BaseScrollView)
export const TouchableOpacity = styled(BaseTouchableOpacity)
export const Icon = styled(FontAwesomeIcon)
export const Modal = styled(BaseModal)
export const Switch = styled(BaseSwitch)
export const AnimatedView = styled(BaseAnimated.View)
