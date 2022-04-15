import { createDrawerNavigator } from "@react-navigation/drawer";

//import { MainStackNavigator } from "./StackNavigator";
import BottomTabsNavigator from "./TabNavigator";
import { OrderStackNavigator } from "./StackNavigator";
const Drawer = createDrawerNavigator();
import CartScreen from '../screens/CartScreen'

const DrawerNavigator = () => {
    return (
      <Drawer.Navigator screenOptions={{
          headerShown: false,
          // drawerPosition: "right",
      }}>
        <Drawer.Screen name="Kilimo Bora" component={BottomTabsNavigator}/>
        <Drawer.Screen name="OrderStacks" component={OrderStackNavigator} />
      </Drawer.Navigator>
    );
  }
  
  export default DrawerNavigator;