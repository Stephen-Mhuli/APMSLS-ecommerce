import { StyleSheet, Text, View } from 'react-native';
import ProductContainer from './app/components/ProductContainer';
import Header from './app/shared/Header';
import WelcomeSreen from './app/screens/WelcomeScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import SignInScreen from './app/screens/SignInScreen';
import { NativeBaseProvider } from 'native-base'

export default function App() {
  return (
    <NativeBaseProvider>
        <View style={styles.container}>
         {/* <WelcomeSreen /> */}
         {/* <SignInScreen /> */}
         <SignUpScreen />
        </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
