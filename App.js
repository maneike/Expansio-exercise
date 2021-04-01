import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FirstView from './components/FirstView';
import SecondView from './components/SecondView';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First View" component={FirstView} />
        <Stack.Screen name="Second View" component={SecondView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
