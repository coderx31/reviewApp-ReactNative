import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }){
    const [reviews, setReviews] = useState([
        {title: 'Zelda, breath of fresh air', rating: 5, body: 'lorem ipsum...', key: '1'},
        {title: 'Gotta catch them all (again)', rating: 4, body: 'lorem ipsum...', key: '2'},
        {title: 'Not so "Final" fantacy', rating: 3, body: 'lorem ipsum...', key: '3'}
    ]);


    return(
        <View style={globalStyles.container}>

            <Modal visible={true}>
                <View style={styles.modalContent}>
                    <Text>Hello From the modal</Text>
                </View>
            </Modal>

            <FlatList 
             data={reviews}
             renderItem={({ item }) => {
                 return(
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetail', item)}>
                        <Card >
                            <Text style={globalStyles.text}>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                 );
             }}
            />
           
        </View>
    );
}

const styles = StyleSheet.create({
    modalContent:{
        
    }
});
