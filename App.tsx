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

import QuizStore from './src/stores/QuizStore'
import LevelStore from './src/stores/LevelStore';


const AppNavigator = createStackNavigator({
  Main: MainScreen,
  QuizList: QuizListScreen,
  Quiz: QuizScreen
}, {
    headerMode: 'none'
  })
const AppContainer = createAppContainer(AppNavigator)

const stores = {
  quiz: new QuizStore(),
  level: new LevelStore()
}

const App = () => (
  <Provider {...stores}>
    <AppContainer />
  </Provider>
)


export default App