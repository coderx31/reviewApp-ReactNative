import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }){

    const pressHandler = () =>{
        //navigation.navigate('ReviewDetail'); // first method
        navigation.push('ReviewDetail'); // second method
    }

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}>Home Screen</Text>
            <Button title='go to review dets ' onPress={pressHandler}/>
        </View>
    );
}
