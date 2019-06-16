import React from 'react'
import { View, FlatList } from 'react-native'
import Toolbar from '../../components/Toolbar'
import QuizListItem from './QuizListItem';

class QuizListScreen extends React.Component<{}> {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Toolbar />
                <FlatList
                    data={[1, 2, 3, 4]}
                    keyExtractor={item => item.toString()}
                    renderItem={(item) => <QuizListItem />}
                />
            </View>
        )
    }
}

export default QuizListScreen