import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from './pages/Login';

const AppNavigator = createSwitchNavigator(
  {
    Login: {
      screen: Login,
    },
  },
  {}
);

export default createAppContainer(AppNavigator);
