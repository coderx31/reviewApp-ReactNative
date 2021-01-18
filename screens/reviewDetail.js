import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetail({ navigation }){
    const onPressHandler = () =>{
        navigation.goBack();
    }
    return(
        <View style={globalStyles.container}>
            <Text>ReviewDetail Screen</Text>
            <Button title='back to home screen' onPress={onPressHandler}/>
        </View>
    )
}

