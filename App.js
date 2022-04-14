import {  StyleSheet, View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import SignInScreen from './app/screens/SignInScreen';
import ProductScreen from './app/screens/ProductScreen';
import SettingsScreen from './app/screens/SettingsScreen';
import HomeScreen from './app/screens/HomeScreen';
import CartScreen from './app/screens/CartScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OrderScreen from './app/screens/OrderScreen';

Ionicons.loadFont();
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function App() {

  const [isLoading, setIsLoading] = useState(false);
  //const [userToken, setUserToken] = useState(null);
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(true);
    },500)
  },[]);

  if(!isLoading){
    return(
      <View style={styles.activity}>
        <ActivityIndicator size="large" color="#FF6347" />
      </View>
    );
  }
  //BottomTabs navigator
  function HomeTabsStack() {
    return (
      <Tab.Navigator initialRouteName="ProductScreen">
      <Tab.Screen
        name="Home"
        component={ProductScreen}
        options={{
          //headerShown: false,
          tabBarActiveTintColor: '#FF6347',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} 
                   />)
        }}  />
         <Tab.Screen
        name="Orders"
        component={OrderScreen}
        options={{
          tabBarActiveTintColor: '#FF6347',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="reorder-four-outline" color={color} size={size} 
                   />)
        }} />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarActiveTintColor: '#FF6347',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="cart" color={color} size={size} 
                   />)
        }} />
     
      {/* <Tab.Screen
       name="Settings" 
       component={SettingsScreen}
       options={{
         tabBarActiveTintColor: '#FF6347',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="settings" color={color} size={size} 
                 />)
      }} /> */}
      <Tab.Screen
       name="Profile" 
       component={ProfileScreen}
       options={{
        tabBarActiveTintColor: '#FF6347',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="person-outline" color={color} size={size} 
                 />)
      }} />
    </Tab.Navigator>
    )
  }
//Main Stack navigator in which BottomTabs navigator is included
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
           headerShown: false
        }}>
          <Stack.Screen name="HomeStack" component={HomeTabsStack} options={{ headerShown: false }}/>
          <Stack.Screen name="welcome" component={WelcomeScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          
          
        </Stack.Navigator>
      </NavigationContainer>  
      
  );
}

const styles = StyleSheet.create({
  activity: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
