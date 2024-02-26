import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//responsavel por criar as rotas
import { NavigationContainer } from '@react-navigation/native';

//responsavel por criar as rotas stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importar as telas
import Home from './src/screens/Home';
import Contact from './src/screens/Contact';
import Profile from './src/screens/Profile';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} 
          options={
            {title: 'Tela Inicial',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center'
          }
          
          }/>
          <Stack.Screen name="Contact" component={Contact} options={
            {title: 'Tela de Contato',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            headerShown: false
          }
          
          }/>
          <Stack.Screen name="Profile" component={Profile} options={
            {title: 'Tela de Perfil',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            headerShown: false
          }
          
          
          }/>
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
