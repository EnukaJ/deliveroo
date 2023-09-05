import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import HomeScreen from './screens/HomeScreen';
import 'react-native-gesture-handler';

const Stack= createNativeStackNavigator();

function App(): JSX.Element {
   return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen}/>
        </Stack.Navigator>        
      </TailwindProvider>
    </NavigationContainer>
    
  );
}



export default App;
