import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomePage from '../screens/HomePage';
import HabitDetails from '../screens/HabitDetails';
import Header from '../shared/Header';
import LoginScreen from '../screens/LoginScreen';

const screens = {
    Login: {
        screen: LoginScreen,
        navigationOptions: {
          title: 'Log-in',
        },
      },
  Home: {
    screen: HomePage,
    navigationOptions: {
      headerTitle: () => <Header />,
    },
  },
  Habit: {
    screen: HabitDetails,
    navigationOptions: {
      title: 'Habit Details',
    },
  },
 
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 100 },
  },
});

const userAuthenticated = false; // Change this based on your authentication logic

let Navigator= createAppContainer(HomeStack)

// if (userAuthenticated) {
//   // User is authenticated, show the home page
//   Navigator = createAppContainer(HomeStack);
// } else {
//   // User is not authenticated, show the login screen
//   const LoginStack = createStackNavigator({ Login: LoginScreen });
//   Navigator = createAppContainer(LoginStack);


export default Navigator;

