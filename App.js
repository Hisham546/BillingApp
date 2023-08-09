import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './src/dashboard';
import Final from './src/final';

const Stack = createNativeStackNavigator();

const App = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator>

            <Stack.Screen
               options={{ headerShown: false }}
               name="Dashboard"
               component={Dashboard} />
            <Stack.Screen
               options={{ headerShown: false }}
               name="Final"
               component={Final} />
         </Stack.Navigator>

      </NavigationContainer>
   );
};

export default App;