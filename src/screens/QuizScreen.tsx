import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import QuizChoice from '../components/QuizChoice'
import Toolbar from '../components/Toolbar';
import QuizQuestion from '../components/QuizQuestion';

const questions = [
    {
        id: 1,
        name: 'Singa'
    },
    {
        id: 2,
        name: 'Gajah'
    },
    {
        id: 3,
        name: 'Singa'
    },
    {
        id: 4,
        name: 'Gajah'
    }
]

class QuizScreen extends React.Component<{}> {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Toolbar />
                <QuizQuestion />
                <QuizChoice questions={questions} />
            </View>
        )
    }
}

export default QuizScreen