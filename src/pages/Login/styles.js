import { StyleSheet } from 'react-native';
import { primaryDark, primary } from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: primary,
    padding: 16,
  },
  loginLogo: {
    width: 300,
    height: 300,
    marginTop: 16,
    marginBottom: 16,
  },
  inputUser: {
    width: '100%',
    height: 60,
  },
  btnLogin: {
    width: '70%',
    height: 55,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: primaryDark,
    marginTop: 32,
  },
  txtBtnLogin: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
});

export default styles;
