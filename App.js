import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/drawer';


/* error occurred */ // error fixed
const getFonts = () => Font.loadAsync({
  'Poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'Poppins-bold': require('./assets/fonts/Poppins-Bold.ttf')
});



export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);
  if(!fontsLoaded){
    return (
      
      // when using Async method it gives an error
      <AppLoading     
       startAsync={getFonts}
       onFinish={()=> setFontsLoaded(true)}
       onError={() => console.warn}
      /> 
    );
  }else{
    return(
      <Navigator />
    );
  }
  
}


