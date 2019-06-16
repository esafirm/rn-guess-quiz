import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

type Props = {
    imageUrl: string
}

class QuizQuestion extends React.Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ width: 300, height: 180 }}
                    source={{ uri: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/3/18/103668/103668_cf2f8c09-1a21-44cc-82a5-601d7abb9c72_854_960.jpg' }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
        marginBottom: 24,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default QuizQuestion