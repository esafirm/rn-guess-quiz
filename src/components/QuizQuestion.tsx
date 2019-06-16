import React from 'react'
import { View, Text, Image } from 'react-native'

type Props = {
    imageUrl: string
}

class QuizQuestion extends React.Component<{}> {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={{ uri: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/3/18/103668/103668_cf2f8c09-1a21-44cc-82a5-601d7abb9c72_854_960.jpg' }} />
            </View>
        )
    }
}

export default QuizQuestion