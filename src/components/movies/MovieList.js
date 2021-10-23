import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Text, View, Dimensions, ImageBackground, StatusBar, FlatList, } from 'react-native';

import { RestorantCard } from '../RestorantCard';


export const MovieList = () => {
    const [data, setData] = useState([]);
    const getMovieList = async () => {

        const movieList = await fetch('https://reactnative.dev/movies.json');
        const movieJson = await movieList.json();
        setData(movieJson.movies);

    }
    useEffect(() => {
        getMovieList();
    });

    return (

        <View style={styles.styleSheetAndroid}>

            <FlatList data={data}

                renderItem={({ item }) => (<RestorantCard name={item.title} infodata={item.releaseYear} location={item.id} url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw27754U4k650j4l-T1yQLH4wWOwRR0JUbHw&usqp=CAU' />)} />
        </View>

    );
}

const styles = StyleSheet.create({

    styleSheetAndroid: {
        paddingTop: StatusBar.currentHeight + 50, flex: 1, backgroundColor: '#B85C38', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-evenly'

    },
    searchBar: {
        fontSize: 14,
        margin: 10,
        padding: 3,
        width: '90%',
        height: 50,
        borderRadius: 20,
        backgroundColor: '#FEF1E6',
    },

});