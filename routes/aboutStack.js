import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';


const screens = {
    About:{
        screen: About,
        navigationOptions: {
            title: ' about GameZone',
    
        }
        
    },
   
}


const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 80 }
    }
});

export default AboutStack;