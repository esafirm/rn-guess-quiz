import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

//@ts-ignore
import AwesomeButton from 'react-native-really-awesome-button/src/themes/blue'
import { Level } from '../../stores/LevelStore';

type Props = {
    onNavigate: () => void
    level: Level
}

class QuizListItem extends React.Component<Props> {

    renderFirsRow() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 20, fontWeight: "600" }}>{this.props.level.name}</Text>
                <AwesomeButton height={35} width={100} onPress={this.props.onNavigate}>Start</AwesomeButton>
            </View>
        )
    }

    renderSecondRow() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Items: {this.props.level.questionCount}</Text>
                <Text>15 Items Left</Text>
            </View>
        )
    }

    renderLine() {
        return (
            <View style={{ height: 2, backgroundColor: 'black' }} />
        )
    }

    renderContent() {
        return (
            <View style={{ flex: 1, marginLeft: 12, justifyContent: 'space-between' }}>
                {this.renderFirsRow()}
                {this.renderSecondRow()}
                {this.renderLine()}
            </View>
        )
    }

    renderImage(imageUrl: string) {
        return (
            <Image style={{
                width: 40,
                height: 40
            }}
                source={{ uri: imageUrl }}
            />
        )
    }

    renderImages() {
        return (
            <View style={{ borderRadius: 8, backgroundColor: '#000A', padding: 2 }}>
                <View style={{ flexDirection: 'row' }}>
                    {this.renderImage('https://ecs7.tokopedia.net/img/cache/700/product-1/2019/3/18/103668/103668_cf2f8c09-1a21-44cc-82a5-601d7abb9c72_854_960.jpg')}
                    {this.renderImage('https://ecs7.tokopedia.net/img/cache/700/product-1/2019/3/18/103668/103668_cf2f8c09-1a21-44cc-82a5-601d7abb9c72_854_960.jpg')}
                </View>
                <View style={{ flexDirection: 'row' }}>
                    {this.renderImage('https://ecs7.tokopedia.net/img/cache/700/product-1/2019/3/18/103668/103668_cf2f8c09-1a21-44cc-82a5-601d7abb9c72_854_960.jpg')}
                    {this.renderImage('https://ecs7.tokopedia.net/img/cache/700/product-1/2019/3/18/103668/103668_cf2f8c09-1a21-44cc-82a5-601d7abb9c72_854_960.jpg')}
                </View>

            </View>
        )
    }

    render() {
        return (
            <View {...this.props} style={styles.contaienr}>
                {this.renderImages()}
                {this.renderContent()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contaienr: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 16,
        paddingTop: 16
    }
})

export default QuizListItem