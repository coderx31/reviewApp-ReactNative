import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }){
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        {title: 'Zelda, breath of fresh air', rating: 5, body: 'lorem ipsum...', key: '1'},
        {title: 'Gotta catch them all (again)', rating: 4, body: 'lorem ipsum...', key: '2'},
        {title: 'Not so "Final" fantacy', rating: 3, body: 'lorem ipsum...', key: '3'}
    ]);


    return(
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType="slide">
                <View style={styles.modalContent}>
                <MaterialIcons 
                 name="close"
                 size= {24}
                 style={{...styles.modalToggle, ...styles.modalClose}}
                 onPress = {() => setModalOpen(false)}
                />
                <Text>Hello From the modal</Text>
                </View>
            </Modal>

            <MaterialIcons 
             name="add"
             size= {24}
             style={styles.modalToggle}
             onPress = {() => setModalOpen(true)}
            />

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
        flex: 1,
        
    },
    modalToggle:{
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    }
});
