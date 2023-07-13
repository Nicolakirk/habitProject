import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'


import HomePage from '../screens/HomePage';
import HabitDetails from '../screens/HabitDetails';
import Header from '../shared/Header';

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


export default createAppContainer(HomeStack);

