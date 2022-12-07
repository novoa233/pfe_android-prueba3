import  React,{useRef, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/login'
import Register from './src/screens/register'
import Dashboard from './src/screens/dashbord';
import {  Provider as PaperProvider } from 'react-native-paper';
const Stack = createNativeStackNavigator();

function App() {

  return (


      <PaperProvider >
        
          <NavigationContainer>
              <Stack.Navigator initialRouteName="Login">
                <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
                <Stack.Screen options={{headerShown: false}} name="Dashboard" component={Dashboard} />
                <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
              </Stack.Navigator>
          </NavigationContainer>


        </PaperProvider>



  );
}
export default App;
