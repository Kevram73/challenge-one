import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import Search from '../Screens/others/search';
import Main from '../Screens/others/main';
import Account from '../Screens/others/account';
import AddFeed from '../Screens/others/add';
import Profile from '../Screens/profile';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Search' component={Search} />
        <Stack.Screen name='BottomTabs' component={BottomTabNavigation} />
        <Stack.Screen name='Main' component={Main} />
        <Stack.Screen name='Account' component={Account} />
        <Stack.Screen name='AddFeed' component={AddFeed} />
        <Stack.Screen name='Profile' component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation