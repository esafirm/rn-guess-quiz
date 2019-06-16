import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Config from 'src/Config'

class Toolbar extends React.Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.indicator}>
                    1/15
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Config.color.blue
    },
    indicator: {
        backgroundColor: '#0006',
        borderRadius: 8,
        padding: 8,
        color: '#FFF'
    }
})

export default Toolbar