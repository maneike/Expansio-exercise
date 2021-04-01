import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './Styles/Styles';
import {StyledButton} from './StyledButton';

export default function SecondView({navigation, route}) {
  const handleBack = () => {
    navigation.navigate('First Screen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.prettyCounter}>
        <Text>{route.params.count}</Text>
      </View>
      <View style={styles.messageBox}>
        <Text>{route.params.message || 'Brak wiadomości'}</Text>
      </View>
      <StyledButton title="Wstecz" onPress={handleBack} />
    </View>
  );
}
