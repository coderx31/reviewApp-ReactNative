import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetail from '../screens/reviewDetail';

const screens = {
    Home:{
        screen: Home,
        navigationOptions: {
            title: 'GameZone',
            //headerStyle: { backgroundColor: '#eee' }
        }
        
    },
    ReviewDetail:{
        screen: ReviewDetail,
        navigationOptions: {
            title: 'Review Details',
            //headerStyle: { backgroundColor: '#eee' }
        }
    }
}


const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 80 }
    }
});

export default HomeStack;