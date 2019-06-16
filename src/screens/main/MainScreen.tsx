import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

//@ts-ignore
import AwesomeButton from 'react-native-really-awesome-button/src/themes/blue'

class MainScreen extends React.Component<{}> {
    render() {
        return (
            <View style={[StyleSheet.absoluteFill, { alignItems: 'center', paddingTop: 80 }]}>
                <Image style={{ width: 200, height: 200 }}
                    source={{ uri: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/3/18/103668/103668_cf2f8c09-1a21-44cc-82a5-601d7abb9c72_854_960.jpg' }} />
                <AwesomeButton style={{ marginTop: 24 }} width={200} textSize={20}>Play</AwesomeButton>
            </View>
        )
    }
}

export default MainScreen