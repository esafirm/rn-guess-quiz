import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Toolbar extends React.Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is the toolbar</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'red'
    }
})

export default Toolbar