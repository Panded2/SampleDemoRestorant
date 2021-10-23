import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RestorantList } from './src/components/restorantScreens/RestorantList';

import {MovieList} from './src/components/movies/MovieList';
function HomeScreen() {
  return (
    <RestorantList />
  );
}

function SettingsScreen() {
  return (
   <MovieList/>
  );
}

function ContactScreen() {

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text> This is Contact screen !</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function SampleTabs() {

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'grey',

      }}
    >

      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
        tabBarLabel: 'Restorants',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="glass-wine" color={'red'} size={26} />
        ),
      }} />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} options={{
        tabBarLabel: 'Movies',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="movie-roll" color={'magenta'} size={26} />
        ),
      }} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} options={{
        tabBarLabel: 'Contact',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="contacts" color={'red'} size={26} />
        ),
      }} />
    </Tab.Navigator>

  );
}
export default function App() {
  return (

    <NavigationContainer style={{ backgroundColor: 'red' }}>
      <SampleTabs />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
