import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetail from '../screens/reviewDetail';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Home:{
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title = 'GameZone' />,
            }
        }
        
    },
    ReviewDetail:{
        screen: ReviewDetail,
        navigationOptions: {
            title: 'Review Details',
        }
    }
}


const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 100, }
    }
});

export default HomeStack;