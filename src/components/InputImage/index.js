import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const InputImage = ({
  style,
  placeholder,
  placeholderTextColor,
  onChangeText,
  value,
}) => {
  return (
    <React.Fragment>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={[styles.inputImage, style]}
        onChangeText={onChangeText}
        value={value}
      />
    </React.Fragment>
  );
};

export default InputImage;
