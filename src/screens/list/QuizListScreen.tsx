import React from 'react'
import { View, FlatList } from 'react-native'
import Toolbar from '../../components/Toolbar'
import QuizListItem from './QuizListItem';

import { NavigationScreenProps } from 'react-navigation'

class QuizListScreen extends React.Component<NavigationScreenProps> {
    render() {
        const onNavigate = () => this.props.navigation.navigate('Quiz')
        return (
            <View style={{ flex: 1 }}>
                <Toolbar />
                <FlatList
                    data={[1, 2, 3, 4]}
                    keyExtractor={item => item.toString()}
                    renderItem={(item) => <QuizListItem onNavigate={onNavigate} />}
                />
            </View>
        )
    }
}

export default QuizListScreen