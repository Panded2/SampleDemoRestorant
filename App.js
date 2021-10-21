import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RestorantList } from './src/components/restorantScreens/RestorantList';
function HomeScreen() {
  return (
    <RestorantList />
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
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
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} options={{
        tabBarLabel: 'settings',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="phone-settings" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} options={{
        tabBarLabel: 'Contact',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="face-profile-woman" color={color} size={26} />
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
