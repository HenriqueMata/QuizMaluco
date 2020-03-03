import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StatusBar } from 'react-native';
import InputImage from '../../components/InputImage';

import logo from '../../assets/images/login_logo.png';
import { white, primaryDark } from '../../assets/colors';

import styles from './styles';
import { translate } from '../../locales';

function Login({ navigation }) {
  const [user, setUser] = useState('');

  function btnClick() {
    navigation.navigate('Quiz');
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={white} barStyle='light-content' />
      <Image style={styles.loginLogo} source={logo} />
      <InputImage
        placeholder={translate('placeholderTxt')}
        placeholderTextColor={primaryDark}
        style={styles.inputUser}
        onChangeText={text => setUser(text)}
        value={user}
      />
      <TouchableOpacity style={styles.btnLogin} onPress={btnClick}>
        <Text style={styles.txtBtnLogin}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
