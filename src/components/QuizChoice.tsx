import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

//@ts-ignore
import AwesomeButton from "react-native-really-awesome-button/src/themes/blue";

type Props = {
    questions: Array<{
        id: number,
        name: string
    }>
}

class QuizChoice extends React.Component<Props> {
    render() {
        const { questions } = this.props
        return (
            <View style={styles.container}>
                {questions.map(question => {
                    return <AwesomeButton style={{ marginTop: 10 }} width={300} key={question.id}>{question.name}</AwesomeButton>
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20
    }
})

export default QuizChoice