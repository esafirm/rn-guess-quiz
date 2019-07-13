import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

//@ts-ignore
import AwesomeButton from "react-native-really-awesome-button/src/themes/blue";
import { Quiz } from '../stores/LevelStore';

type Props = {
    questions: Quiz
}

class QuizChoice extends React.Component<Props> {
    render() {
        const { questions } = this.props
        return (
            <View style={styles.container}>
                {questions.answers.map(question => {
                    return <AwesomeButton
                        style={{ marginTop: 10 }}
                        width={300}
                        key={question}>
                        {question}
                    </AwesomeButton>
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