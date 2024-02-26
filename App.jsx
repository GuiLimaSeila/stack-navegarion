import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//responsavel por criar as rotas
import { NavigationContainer } from '@react-navigation/native';

//responsavel por criar as rotas stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importar as telas
import Home from './src/screens/home';
import Contact from './src/screens/contact';
import Profile from './src/screens/profile';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
        <StatusBar style='auto'/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
