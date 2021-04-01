import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export default function SecondView(props, {navigation, route}) {
  return (
    <View>
      <Text>{route.params.sentMessage}</Text>
    </View>
  );
}
