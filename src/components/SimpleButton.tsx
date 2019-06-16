import React from 'react'
import { TouchableOpacity, Text, StyleProp, ViewProps, TextStyle, ViewStyle, StyleSheet } from 'react-native'

type Props = {
    key?: any,
    children: String,
    style?: StyleProp<ViewStyle>,
    textStyle?: StyleProp<TextStyle>
}

class SimpleButton extends React.Component<Props> {
    render() {
        return (
            <TouchableOpacity
                {...this.props}
                style={[styles.button, this.props.style]} >
                <Text>{this.props.children}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        padding: 10,
        backgroundColor: 'blue',
        justifyContent: 'center'
    }
})

export default SimpleButton