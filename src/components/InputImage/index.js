import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const InputImage = props => {
  const { style } = props;
  console.log(props);
  return (
    <React.Fragment>
      <TextInput style={[styles.inputUser, style]} />
    </React.Fragment>
  );
};

export default InputImage;
