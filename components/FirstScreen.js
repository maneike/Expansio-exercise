import React, {useState} from 'react';
import {Image, SafeAreaView, Text, View, TextInput} from 'react-native';

import useFetch from '../helpers/useFetch';
import {styles} from './Styles/Styles';
import {StyledButton} from './StyledButton';

export default function FirstView({navigation}) {
  const [count, setCount] = useState(0);
  const {data, loading} = useFetch('https://api.randomuser.me');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    setMessage('');
    navigation.navigate('Second Screen', {message: message, count: count});
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
            <Text style={styles.userName}>
              {data.name.first} {data.name.last}
            </Text>
          </View>
        )}
        <View style={styles.counter}>
          <StyledButton title="-" onPress={() => setCount(count - 1)} />
          <Text>{count}</Text>
          <StyledButton title="+" onPress={() => setCount(count + 1)} />
        </View>
        <View>
          <TextInput
            onChangeText={message => setMessage(message)}
            style={styles.input}
            defaultValue={message}
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
