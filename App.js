import 'react-native-gesture-handler';
import {  StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DrawerNavigator from './app/routing/DrawerNavigator';

Ionicons.loadFont();

const Tab = createBottomTabNavigator();

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
 
  return (
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>  
      
  );
}

const styles = StyleSheet.create({
  activity: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
