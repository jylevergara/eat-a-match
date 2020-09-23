import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ImageBackground, Text, View } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import Demo from './assets/data/demo';
import styles from './assets/styles';
import CardItem from './components/CardItem';
import City from './components/City';
import Filters from './components/Filters';
import Icon from './components/Icon';
import HomeScreen from './containers/Home';
import MatchesScreen from './containers/Matches';
import MessagesScreen from './containers/Messages';
import ProfileScreen from './containers/Profile';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      // tabBarOptions={{
      //   //showIcon: true,
      //   activeTintColor: '#7444C0',
      //   inactiveTintColor: '#363636',
      //   labelStyle: {
      //     fontSize: 14,
      //     textTransform: 'uppercase',
      //     paddingTop: 10,
      //   },
      //   style: {
      //     backgroundColor: '#FFF',
      //     borderTopWidth: 0,
      //     paddingVertical: 30,
      //     height: 60,
      //     marginBottom: 0,
      //     shadowOpacity: 0.05,
      //     shadowRadius: 10,
      //     shadowColor: '#000',
      //     shadowOffset: { height: 0, width: 0 },
      //   },
      // }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        // options={{
        //   tabBarIcon: ({ focused }) => {
        //     const iconFocused = focused ? '#7444C0' : '#363636';
        //     return (
        //       <Text style={[styles.iconMenu, { color: iconFocused }]}>
        //         <Icon name="explore" />
        //       </Text>
        //     );
        //   },
        // }}
      />
      <Tab.Screen
        name="Matches"
        component={MatchesScreen}
        // options={{
        //   tabBarIcon: ({ focused }) => {
        //     const iconFocused = focused ? '#7444C0' : '#363636';
        //     return (
        //       <Text style={[styles.iconMenu, { color: iconFocused }]}>
        //         <Icon name="explore" />
        //       </Text>
        //     );
        //   },
        // }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        // options={{
        //   tabBarIcon: ({ focused }) => {
        //     const iconFocused = focused ? '#7444C0' : '#363636';
        //     return (
        //       <Text style={[styles.iconMenu, { color: iconFocused }]}>
        //         <Icon name="explore" />
        //       </Text>
        //     );
        //   },
        // }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        // options={{
        //   tabBarIcon: ({ focused }) => {
        //     const iconFocused = focused ? '#7444C0' : '#363636';
        //     return (
        //       <Text style={[styles.iconMenu, { color: iconFocused }]}>
        //         <Icon name="explore" />
        //       </Text>
        //     );
        //   },
        // }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
