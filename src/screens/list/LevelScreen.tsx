import React from 'react'
import { View, FlatList, Text } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { observer, inject } from 'mobx-react';

import Toolbar from '../../components/Toolbar'
import LevelItem from './LevelItem';
import LevelStore from '../../stores/LevelStore';

interface LevelScreenProps extends NavigationScreenProps {
    level: LevelStore
}

class LevelScreen extends React.Component<LevelScreenProps> {

    componentDidMount() {
        this.props.level.fetchLevels()
    }

    render() {
        const onNavigate = () => this.props.navigation.navigate('Quiz')
        return (
            <View style={{ flex: 1 }}>
                <Toolbar />
                <FlatList
                    data={this.props.level.levelList}
                    keyExtractor={item => item.name}
                    renderItem={(renderInfo) => <LevelItem level={renderInfo.item} onNavigate={onNavigate} />}
                />
            </View>
        )
    }
}

export default inject('level')(
    observer(LevelScreen)
)
