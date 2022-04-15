import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OrderScreen from '../screens/OrderScreen';
import OrderDetailScreen from '../screens/OrderDetailScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import ProductScreen from '../screens/ProductScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import CartScreen from '../screens/CartScreen';
import CheckOutScreen from '../screens/CheckOutScreen'


const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
         }}>
           <Stack.Screen name="productscreen" component={ProductScreen} />
           <Stack.Screen name="productDetails" component={ProductDetailScreen} />
         </Stack.Navigator>
    )
}

 const AuthStackNavigator = () => {
     return (
         <Stack.Navigator screenOptions={{
            headerShown: false
         }}>
             <Stack.Screen name="Welcome" component={WelcomeScreen} />
             <Stack.Screen name="SignIn" component={SignInScreen} />
             <Stack.Screen name="SignUp" component={SignUpScreen} />
         </Stack.Navigator>
     )
 }

 const OrderStackNavigator = () => {
     return (
         <Stack.Navigator screenOptions={{
            headerShown: false
         }}>
             <Stack.Screen name='OrdersList' component={OrderScreen}/>
             <Stack.Screen name='OrderDetails' component={OrderDetailScreen}/>
         </Stack.Navigator>
     )
 }
 const ProfileStackNavigator = () => {
     return (
         <Stack.Navigator screenOptions={{
            headerShown: false
         }}>
             <Stack.Screen name='userProfile' component={ProfileScreen}/>
             <Stack.Screen name='editProfile' component={EditProfileScreen}/>
         </Stack.Navigator>
     )
 }

 const CartStackNavigator = () => {
     return (
         <Stack.Navigator screenOptions={{
            headerShown: false
         }}>
             <Stack.Screen name='CartScreen' component={CartScreen} options={{title: 'Cart'}}/>
             <Stack.Screen name='CheckOut' component={CheckOutScreen} options={{title: 'CheckOut'}}/>
         </Stack.Navigator>
     )
 }

export {MainStackNavigator, AuthStackNavigator, OrderStackNavigator, CartStackNavigator, ProfileStackNavigator};