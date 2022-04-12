import {  StyleSheet, Text, View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import SignInScreen from './app/screens/SignInScreen';
import ProductScreen from './app/screens/ProductScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native-paper';



const Stack = createNativeStackNavigator();

export default function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(true);
    },500)
  },[]);

  if(!isLoading){
    return(
      <View style={styles.activity}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
           headerShown: false
        }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="Productscreen" component={ProductScreen} />
          
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
