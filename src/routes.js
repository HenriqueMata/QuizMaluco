import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from './pages/Login';
import Quiz from './pages/Quiz';

const AppNavigator = createSwitchNavigator(
  {
    Login,
    Quiz,
  },
  {}
);

export default createAppContainer(AppNavigator);
