import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AddFeed from '../Screens/others/add';
import Search from '../Screens/others/search';
import Main from '../Screens/others/main';
import Account from '../Screens/others/account';
import Profile from '../Screens/profile';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({
        headerShown: false,
        tabBarStyle: { height: '7.5%', paddingBottom: '1.5%'},
        tabBarIcon: ({ focused, color, size }) => {
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel:false, 
      })}i
    >
      <Tab.Screen
        name="Accueil"
        component={Main}
        options={{
          tabBarLabel: 'Accueil',
          tabBarLabelStyle: { fontFamily: 'Inter_700Bold', fontSize: 12 },
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name="home" size={28} color={color} />;
          },
        }} />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarLabelStyle: { fontFamily: 'Inter_700Bold', fontSize: 12 },
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name="search" size={28} color={color} />;
          },
        }} />
        <Tab.Screen
        name="AddFeed"
        component={AddFeed}
        options={{
          tabBarLabel: 'AddFeed',
          tabBarLabelStyle: { fontFamily: 'Inter_700Bold', fontSize: 12 },
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name="add" size={28} color={color} />;
          },
        }} />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          // tabBarBadge: 2,
          tabBarLabel: 'Account',
          tabBarLabelStyle: { fontFamily: 'Inter_700Bold', fontSize: 12 },
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name="account" size={28} color={color} />;
          },
        }} />
        <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          // tabBarBadge: 2,
          tabBarLabel: 'Profile',
          tabBarLabelStyle: { fontFamily: 'Inter_700Bold', fontSize: 12 },
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name="profile" size={28} color={color} />;
          },
        }} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation