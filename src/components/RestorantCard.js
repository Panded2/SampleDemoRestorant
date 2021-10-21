
import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image } from 'react-native';


export const RestorantCard = (data) => {

    const imagerestorant = require('../images/restorant1.png');
    const ratingImage = require('../images/star.png');
    return (

        <View style={styles.styleCardView}>
            <ImageBackground style={styles.styleCardViews} imageStyle={{ borderRadius: 16 }} source={{ uri: data.url }} >
            </ImageBackground>
            <Text style={styles.restorantText}> {data.name}</Text>
            <View style={{ flexDirection: 'row', flex: 1 }}>
                <View style={{ flexDirection: 'column', flex: 1, marginLeft: 20, justifyContent: 'space-evenly' }}>

                    <Text style={styles.restorantaddressText}> Location : {data.infodata}</Text>
                    <Text style={styles.restorantaddressText}>  area :{data.location}</Text>
                </View>
                <View style={{ padding: 20, flexDirection: 'row', flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                    <Image style={{ width: 60, height: 20 }} source={ratingImage} />
                    <Image style={{ marginLeft: 10, width: 30, height: 30 }} source={imagerestorant} />

                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({

    styleCardView: {
        alignItems: 'center', backgroundColor: '#FEF5ED', borderRadius: 30, elevation: 20, width: Dimensions.get('window').width - 20, height: 220, margin: 10, justifyContent: 'center'

    },
    styleCardViews: {
        alignItems: 'center', borderRadius: 10, elevation: 20, width: 280, height: 120, margin: 10, justifyContent: 'center'

    },
    restorantText: { color: 'orange', fontStyle: 'italic', fontSize: 18 },
    restorantaddressText: { color: 'green', fontStyle: 'normal', fontSize: 12 }
});





