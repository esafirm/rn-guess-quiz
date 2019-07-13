import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationScreenProps } from 'react-navigation';

import QuizChoice from '../../components/QuizChoice'
import Toolbar from '../../components/Toolbar';
import QuizQuestion from '../../components/QuizQuestion';
import { Quiz } from '../../stores/LevelStore';

interface QuizScreenProps extends NavigationScreenProps { }

class QuizScreen extends React.Component<QuizScreenProps> {
    render() {
        console.log('param', this.props.navigation.state)
        const questions = this.props.navigation.getParam('questions') as Array<Quiz>

        console.log('questions', questions)
        return (
            <View style={{ flex: 1 }}>
                <Toolbar />
                <QuizQuestion />
                <QuizChoice questions={questions[0]} />
            </View>
        )
    }
}

export default QuizScreen