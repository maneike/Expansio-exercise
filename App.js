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

import useFetch from './helpers/useFetch';

function App() {
  const {data, loading} = useFetch('https://api.randomuser.me');
  return (
    <SafeAreaView>
      <View styles={styles.container}>
        <View style="styles.userInfo">
          {!data && loading ? (
            <Text>...loading</Text>
          ) : (
            <View>
              <Image
                style={{width: 50, height: 50, borderRadius: 37.5}}
                source={{uri: data.picture.thumbnail}}
              />
              <Text>
                {data.name.first} {data.name.last}
              </Text>
            </View>
          )}
        </View>
        <View>
          <Button title="hello"></Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
