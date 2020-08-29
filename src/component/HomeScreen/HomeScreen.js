import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Dashboard from '../Dashboard/Dashboard';
import QRCodeScanner from '../Dashboard/qrCodeScanner';
export default function Main() {
  return (
    <NavigationContainer>
      <MyStacks />
    </NavigationContainer>
  );
}
const Stack = createStackNavigator();

function MyStacks() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Dashboard} />
      <Stack.Screen name="QRCodeScanner" component={QRCodeScanner} />
    </Stack.Navigator>
  );
}
