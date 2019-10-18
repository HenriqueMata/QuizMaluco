import React, { useState } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import logo from '../../assets/images/login_logo.png';
import styles from './styles';

function Login() {
  const [user, setUser] = useState('');

  function btnClick() {
    console.log('clicou');
  }
  return (
    <View style={styles.container}>
      <Image style={styles.loginLogo} source={logo} />
      <TextInput
        placeholder='Digite seu usuário'
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
