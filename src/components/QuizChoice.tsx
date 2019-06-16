import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import SimpleButton from '../components/SimpleButton'

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
            <View style={{ flex: 1 }}>
                {questions.map(question => {
                    return <SimpleButton key={question.id}>{question.name}</SimpleButton>
                })}
            </View>
        )
    }
}

export default QuizChoice