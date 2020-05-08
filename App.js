/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from './src/screen/WelcomeScreen'
import ListDisplay from './src/screen/ListDisplay'
import SignInScreen from './src/screen/SignInScreen'

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signin: SignInScreen,
    Welcome: WelcomeScreen,
    List: ListDisplay,
    // Signin: SigninScreen,
    

  }),
})

export default createAppContainer(switchNavigator);