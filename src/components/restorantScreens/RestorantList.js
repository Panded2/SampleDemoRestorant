
import React from 'react';
import { StyleSheet, TextInput, Text, View, Dimensions, ImageBackground, StatusBar, FlatList, } from 'react-native';
import { RestorantCard } from '../RestorantCard';

export const RestorantList = () => {


    return (

        <View style={styles.styleSheetAndroid}>
            <TextInput
                placeholder="Search your favourite Restorant here...."
                style={styles.searchBar}
            />
            <FlatList style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}

                data={[{ name: "Wine & Dine", infodata: "Bangalore", location: "Hebbal", image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2017/10/Toit1.jpg' },

                { name: "Orange Orchid", infodata: "Bangalore", location: "Ramamurthy nagar", image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80' },

                {
                    name: "Picos", infodata: "Bangalore", location: "Indiranagar", image: 'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                }
                    , { name: "Paka shala", infodata: "Bangalore", location: "RR nagar", image: 'https://media.istockphoto.com/photos/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-picture-id1018141890?k=20&m=1018141890&s=612x612&w=0&h=uMDP00MMIhlwQE77EEcoelc2oSKBT_B6avaXqtxgiow=' }
                    , { name: "Udupi uphara", infodata: "Bangalore", location: "T C Palaya", image: 'https://media-cdn.tripadvisor.com/media/photo-s/15/9c/39/1f/niche.jpg' }
                    , { name: "Udaya Foods", infodata: "Bangalore", location: "Harohalli", image: 'https://media-cdn.tripadvisor.com/media/photo-s/14/96/fa/14/restaurant.jpg' }
                    , { name: "Rajadhani", infodata: "Bangalore", location: "Mathikeri", image: 'https://images.jdmagicbox.com/comp/bangalore/h2/080pxx80.xx80.150523172430.q8h2/catalogue/time-traveller-bommasandra-industrial-area-bangalore-restaurants-3icidfo.png?clr=#522014' }
                    , { name: "Eat and Drink", infodata: "Bangalore", location: "Koramangala", image: 'https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2017/10/The-Only-Place.jpg' }
                    , { name: "Guru Mess", infodata: "Bangalore", location: "Dodabelli", image: 'https://media.architecturaldigest.com/photos/590cc6c3b3064307ffee59a4/master/w_3000,h_2000,c_limit/Tallest%20Restaurants%20in%20the%20World%207.jpg' }

                ]}
                renderItem={({ item }) => <RestorantCard name={item.name} infodata={item.infodata} location={item.location} url={item.image} />}
                keyExtractor={item => item.name}
            />

        </View>

    )
};

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





