import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './src/Navigation/Navigation';
import Detalles from './src/Screens/Detalles';
import Inicio from './src/Navigation/Navigation';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Detalles" component={Detalles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
