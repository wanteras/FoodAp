import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer,DefaultTheme, DarkTheme} from "@react-navigation/native"
import Tabs from './navigation/tabs'
import {Restaurant, OrderDelivery, Home, User } from './screens';
import {COLORS, icons} from "../constants";
import {useColorScheme} from 'react-native';

const Stack = createStackNavigator();

const App = () => {

  const scheme = useColorScheme();

return (

  <NavigationContainer theme = {scheme === 'dark' ? DarkTheme : DefaultTheme}>
     <Stack.Navigator screenOptions = {{ 
        headerMode: 'none'
      }}
    
     initialRouteName = {"Home"}>
        <Stack.Screen name = "Home" component = {Tabs}/>
        <Stack.Screen name = "Restaurant" component = {Restaurant}/>
        <Stack.Screen name = "OrderDelivery" component = {OrderDelivery}/>
        <Stack.Screen name = "User"  component = {User} />
    </Stack.Navigator>
  </NavigationContainer>


);


}

export default  App;