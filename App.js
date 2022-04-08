import 'react-native-gesture-handler';

import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import ProductContainer from './app/components/ProductContainer';
import Header from './app/shared/Header';
import WelcomeScreen from './app/screens/WelcomeScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import SignInScreen from './app/screens/SignInScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

const Stack = createNativeStackNavigator();
// style={styles.container}
export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  if(!isLoading){
    return(
      <View style={styles.activity}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
  return (
      <NavigationContainer>
        {/* <Stack.Navigator screenOptions={{
          // headerShown: false
        }}>
          <Stack.Screen options={{headerShown: false}} name="Home" component={WelcomeScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          
        </Stack.Navigator> */}

        {/* <View style={styles.container}>
         {/* <WelcomeSreen /> */}
         {/* <SignInScreen /> */}
         {/* <SignUpScreen /> */}
        {/* </View> */} 
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
