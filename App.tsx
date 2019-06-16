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
import MainScreen from './src/screens/main/MainScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import QuizListScreen from './src/screens/list/QuizListScreen';
import QuizScreen from './src/screens/QuizScreen';

const AppNavigator = createStackNavigator({
  Main: MainScreen,
  QuizList: QuizListScreen,
  Quiz: QuizScreen
}, {
    headerMode: 'none'
  })

export default createAppContainer(AppNavigator)