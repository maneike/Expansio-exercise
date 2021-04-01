import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {buttonstyle} from './Styles/Styles';

export const StyledButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={buttonstyle.StyledButtonContainer}>
    <Text style={buttonstyle.StyledButtonText}>{title}</Text>
  </TouchableOpacity>
);
