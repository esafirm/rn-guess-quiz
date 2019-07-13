/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React from 'react';
import { Provider } from 'mobx-react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import MainScreen from './src/screens/main/MainScreen';
import QuizListScreen from './src/screens/list/LevelScreen';
import QuizScreen from './src/screens/quiz/QuizScreen';

import LevelStore from './src/stores/LevelStore';


const AppNavigator = createStackNavigator({
  QuizList: QuizListScreen,
  Quiz: QuizScreen,
  Main: MainScreen,
}, {
    headerMode: 'none'
  })
const AppContainer = createAppContainer(AppNavigator)

const stores = {
  level: new LevelStore()
}

const App = () => (
  <Provider {...stores}>
    <AppContainer />
  </Provider>
)


export default App