import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FirstScreen from './components/FirstScreen';
import SecondScreen from './components/SecondScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="First Screen" component={FirstScreen} />
        <Stack.Screen name="Second Screen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
