import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ScannerScreen from './ScannerScreen';
import ScanResultScreen from './ScanResultScreen';
import DashboardScreen from './DashboardScreen';
import SupplementTrackerScreen from './SupplementTrackerScreen';
import SupplementBrowserScreen from './SupplementBrowserScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scanner" component={ScannerScreen} />
        <Stack.Screen name="ScanResult" component={ScanResultScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="SupplementTracker" component={SupplementTrackerScreen} />
        <Stack.Screen name="SupplementBrowser" component={SupplementBrowserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
