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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import FirstView from './components/FirstView';
import SecondView from './components/SecondView';

export default function App() {
  return (
    <>
      <FirstView />
      <SecondView />
    </>
  );
}
