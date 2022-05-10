import React from 'react';
import { View } from 'react-native'
import { StatusBar } from 'react-native'
import Colors from './src/styles/Colors'
import Styles from './src/styles/Styles';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ScreenOne from './src/components/screenOne/screen_one';
import ScreenTwo from './src/components/screenTwo/screen_two';

const App = () => {

  return (
    <View style={Styles.root}>
      <StatusBar backgroundColor={Colors.black} />
      <NavigationContainer >
        <LoginScreens />
      </NavigationContainer>
    </View>
  )
}

const LoginStack = createStackNavigator()
const LoginScreens = () => {
  return (
    <LoginStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginStack.Screen name='screenOne' component={ScreenOne} />
      <LoginStack.Screen name='screenTwo' component={ScreenTwo} />
    </LoginStack.Navigator>
  )
}

export default App;