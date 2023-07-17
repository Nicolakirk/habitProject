import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'


import HomePage from '../screens/HomePage';
import HabitDetails from '../screens/HabitDetails';
import Header from '../shared/Header';
import LoginScreen from '../screens/LoginScreen';

const screens = {
   
Home: {
    screen: HomePage,
    navigationOptions:{
        headerTitle: ()=> <Header/>
       
    }
},
Habit:{
    screen: HabitDetails,
    navigationOptions:{
        title:'Habit Details',
     
    }
}

}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor:'#444',
        headerStyle: { backgroundColor:'#eee', height:100 }
    }
})


// export default createAppContainer(HomeStack);

const userAuthenticated = true; // Change this based on your authentication logic

let Navigator;

if (userAuthenticated) {
  // User is authenticated, show the home page
  Navigator = createAppContainer(HomeStack);
} else {
  // User is not authenticated, show the login screen
  Navigator = createAppContainer(LoginScreen);
}

export default Navigator;
