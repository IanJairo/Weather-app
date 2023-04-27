import React, { Component } from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import * as auth from '../services/auth'

export default class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      initialRouteName: '',
      email: '',
      password: '',
      name: '',
      age: '',
    });
  }

  handleSingUp = async () => {
    const obj = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
      password: this.state.password
    }
    const resp = await auth.Signup(obj);
    if (!resp) return false;
    this.props.navigation.navigate('Login');

  }

  render() {

    return (





      <View style={styles.container} >
        <StatusBar style="auto" />

        <TextInput
          style={styles.input}
          placeholder="Insira seu nome"
          value={this.state.name}
          onChangeText={(texto) => this.setState({ name: texto })}
          autoCapitalize="none"
          autoCorrect={false}
        ></TextInput>

        <TextInput
          style={styles.input}
          placeholder="Insira sua idade"
          value={this.state.age}
          onChangeText={(texto) => this.setState({ age: texto })}
          autoCapitalize="none"
          autoCorrect={false}
        ></TextInput>


        <TextInput
          style={styles.input}
          placeholder="Insira seu e-mail"
          value={this.state.email}
          onChangeText={(texto) => this.setState({ email: texto })}
          autoCapitalize="none"
          autoCorrect={false}
        ></TextInput>

        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={this.state.password}
          onChangeText={(password) => this.setState({ password: password })}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        ></TextInput>



        <TouchableOpacity style={styles.button} onPress={this.handleSingUp}>
          <Text style={styles.textButton}>Criar Conta</Text>
        </TouchableOpacity>

      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#494CA1',

  },

  input: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: '#666BD0',
    marginBottom: 15,
    fontSize: 16,
    color: '#fff',
  },


  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#FDC738',
  },


  textButton: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: '#505153',
  },


});


