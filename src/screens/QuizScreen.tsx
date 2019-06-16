import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import QuizChoice from '../components/QuizChoice'
import Toolbar from '../components/Toolbar';
import QuizQuestion from '../components/QuizQuestion';

class QuizScreen extends React.Component<{}> {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Toolbar />
                <QuizQuestion />
                <QuizChoice questions={[
                    {
                        id: 1,
                        name: "This is a question"
                    }
                ]} />
            </View>
        )
    }
}

export default QuizScreen