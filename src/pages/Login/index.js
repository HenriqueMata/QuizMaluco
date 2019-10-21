import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StatusBar } from 'react-native';
import InputImage from '../../components/InputImage';

import logo from '../../assets/images/login_logo.png';
import { white } from '../../assets/colors';

import styles from './styles';

function Login() {
  const [user, setUser] = useState('');

  function btnClick() {
    console.log('clicou');
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={white} barStyle='light-content' />
      <Image style={styles.loginLogo} source={logo} />
      <InputImage
        placeholder='Digite seu usuário'
        placeholderTextColor={white}
        style={styles.inputUser}
        onChangeText={text => setUser(text)}
        value={user}
      />
      <TouchableOpacity style={styles.btnLogin} onPress={btnClick}>
        <Text style={styles.txtBtnLogin}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
