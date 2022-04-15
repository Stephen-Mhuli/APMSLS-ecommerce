import { createDrawerNavigator } from "@react-navigation/drawer";

import BottomTabsNavigator from "./TabNavigator";
import { OrderStackNavigator } from "./StackNavigator";
const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
    return (
      <Drawer.Navigator screenOptions={{
          headerShown: true
      }}>
        <Drawer.Screen name="Kilimo Bora" component={BottomTabsNavigator}/>
        <Drawer.Screen name="OrderStacks" component={OrderStackNavigator} />
      </Drawer.Navigator>
    );
  }
  
  export default DrawerNavigator;