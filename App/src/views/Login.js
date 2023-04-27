import React, { Component } from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import * as auth from '../services/auth'
import { Button } from 'react-native-paper';
export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            initialRouteName: '',
            email: '',
            password: '',

        });
    }

    async componentDidMount() {
        {/* EXECUTA QUANDO ENTRA */ }
        const userDetails = await auth.isAuthenticated();
        const route = userDetails ? 'Home' : 'Login';
        this.props.navigation.navigate(route);

    }

    handleSingUp = () => {
        this.props.navigation.navigate('Signup');

    }


    handleLogin = async (email, password) => {
        const res = await auth.Login(email, password)
        console.log('res: ', res)
        if (!res) return false;
        this.props.navigation.navigate('Home');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
      }
    
    
    render() {

        return (
            <View style={styles.container} >
                <StatusBar style="auto" />
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

                <TouchableOpacity style={{ paddingBottom: 10 }} onPress={this.handleSingUp}>
                    <Text style={styles.textSignUp}>Ainda não possui conta? Cadastre-se</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => this.handleLogin(this.state.email, this.state.password)}>
                    <Text style={styles.textButton}>Entrar</Text>
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

    textSignUp: {
        fontSize: 12,
        lineHeight: 21,
        textAlign: 'right',
        color: '#FDC738',
    }
});


