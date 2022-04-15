import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {MainStackNavigator, OrderStackNavigator, ProfileStackNavigator, CartStackNavigator} from './StackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
             name="Home" 
             component={MainStackNavigator}
             options={{
                 headerShown: false,
                 tabBarActiveTintColor: '#FF6347',
                 tabBarIcon: ({color, size}) => (
                  <Ionicons name="home" color={color} size={size} 
                   />)}}/>
            <Tab.Screen
              name="Cart" 
              component={CartStackNavigator} 
              options={{
                  headerShown: false,
                  tabBarActiveTintColor: '#FF6347',
                  tabBarIcon: ({color, size}) => (
                     <Ionicons name="cart" color={color} size={size} 
                 />)
                  }}/>
            <Tab.Screen
             name="Orders" 
             component={OrderStackNavigator} 
             options={{
                 headerShown: false,
                 tabBarActiveTintColor: '#FF6347',
                  tabBarIcon: ({color, size}) => (
                     <Ionicons name="reorder-four" color={color} size={size} 
                 />)}}/>
            <Tab.Screen 
              name="Profile"
              component={ProfileStackNavigator} 
              options={{
                  headerShown: false,
                  tabBarActiveTintColor: '#FF6347',
                  tabBarIcon: ({color, size}) => (
                     <Ionicons name="person-outline" color={color} size={size} 
                 />)}}/>
        </Tab.Navigator>
    )
}

export default BottomTabsNavigator;