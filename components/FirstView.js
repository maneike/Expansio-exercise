import React, {useState} from 'react';
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
  TextInput,
  TouchableOpacity,
} from 'react-native';

import useFetch from '../helpers/useFetch';

const StyledButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.StyledButtonContainer}>
    <Text style={styles.StyledButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default function FirstView() {
  const [count, setCount] = useState(0);
  const {data, loading} = useFetch('https://api.randomuser.me');
  const [message, setMessage] = useState('hey');
  const handleSubmit = () => {
    alert(message);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {!data && loading ? (
          <Text style={styles.userInfo}>...ładowanie</Text>
        ) : (
          <View style={styles.userInfo}>
            <Image
              style={styles.thumbnail}
              source={{uri: data.picture.large}}
            />
            <Text>
              {data.name.first} {data.name.last}
            </Text>
          </View>
        )}

        <View style={styles.counter}>
          <StyledButton
            title="-"
            color={styles.button.color}
            style={styles.button}
            onPress={() => setCount(count - 1)}
          />
          <Text>{count}</Text>
          <StyledButton
            title="+"
            color={styles.button.color}
            style={styles.button}
            onPress={() => setCount(count + 1)}
          />
        </View>
        <View>
          <TextInput
            onChange={e => setMessage(e.target.value)}
            style={styles.input}
            value={null}
            placeholder="Tutaj wpisz tekst..."
          />
        </View>
        <View>
          <StyledButton title="Dalej" onPress={handleSubmit} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  button: {
    width: 20,
    height: 20,
    color: 'lime',
    backgroundColor: 'red',
  },
  userInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 50,
  },
  thumbnail: {
    width: 125,
    height: 125,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: 'blue',
  },
  input: {
    height: 40,
    width: 200,
    margin: 50,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 10,
    padding: 5,
    alignSelf: 'center',
  },
  counter: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 50,
  },
  StyledButtonContainer: {
    elevation: 8,
    margin: 20,
    backgroundColor: 'green',
    borderRadius: 50,
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  StyledButtonText: {
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center',
  },
});
