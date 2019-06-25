import React from 'react'
import { View, FlatList, Text } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { observer, inject } from 'mobx-react';

import Toolbar from '../../components/Toolbar'
import QuizListItem from './QuizListItem';
import QuizStore from '../../stores/QuizStore';

interface QuizListScreenProps extends NavigationScreenProps {
    quiz: QuizStore
}

class QuizListScreen extends React.Component<QuizListScreenProps> {
    render() {
        const onNavigate = () => this.props.navigation.navigate('Quiz')
        return (
            <View style={{ flex: 1 }}>
                <Toolbar />
                <FlatList
                    data={this.props.quiz.quizList}
                    keyExtractor={item => item.toString()}
                    renderItem={(item) => <QuizListItem onNavigate={onNavigate} />}
                />
            </View>
        )
    }
}

export default inject('quiz')(
    observer(QuizListScreen)
)
