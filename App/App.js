
import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/views/Login';
import Signup from './src/views/Signup';
import Home from './src/views/Home';
import Teste from './src/components/WeatherCard';
import Contact  from './src/views/Contact';
import * as auth from './src/services/auth'

const Stack = createNativeStackNavigator();
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      initialRouteName: ''
    });
  }
  async componentDidMount() {
    {/* EXECUTA QUANDO ENTRA */ }
    const userDetails = await auth.isAuthenticated();
    console.log('userDetails: ', userDetails)
    const route = !userDetails ? 'Login' : 'Home';
    this.setState({
      initialRouteName: route
    });
    console.log('componentDidMount')
  }

  getStatusLogin = async () => {
    console.log('getStatusLogin')
    const userDetails = await auth.isAuthenticated();
    console.log('userDetails: ', userDetails)
    const route = !userDetails ? 'Login' : 'Home';
    this.setState({
      initialRouteName: route
    });
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerMode: 'screen',
            headerTintColor: '#505153',
            headerStyle: { backgroundColor: '#FDC738' },
          }}        >

          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Login', headerBackVisible: false, headerLeft: () => null }}

          />

          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />



          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ title: 'SignUp' }}
          />

          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{ title: 'Contato' }}
          />
          {/* <Stack.Screen
            name="Teste"
            component={Teste}
            options={{ headerShown: false  }}
          /> */}

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


