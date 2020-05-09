/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from './src/screen/WelcomeScreen'
import ListDisplay from './src/screen/ListDisplay'
import SignInScreen from './src/screen/SignInScreen'
import DetailView from './src/screen/DetailView'
import { BlogProvider } from './src/context/BlogContext'

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signin: SignInScreen,
    Welcome: WelcomeScreen,
    List: ListDisplay,
    Detail: DetailView,

  }),
})

// export default createAppContainer(switchNavigator);
const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
}