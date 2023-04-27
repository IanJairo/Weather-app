import { Linking, SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import React, { useState, useRef, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Avatar, Card, Button } from 'react-native-paper';
import LottieView from 'lottie-react-native';


export default function Contact() {
    const StopWatch = props => <Avatar.Image   {...props} source={require("./../../assets/profile.png")} />
 


    return (
        <SafeAreaView style={styles.container}>

            <StatusBar style="dark" />




            <View style={styles.cards}>


                <View style={styles.card}>
                    <Card>
                        <Card.Title title="Informações de Contato" subtitle="Obrigado pela atenção!" subtitleStyle={{color: '#494CA1'}} left={StopWatch} />
                        <Card.Content>
                            <Text style={{ textAlign: 'justify' }} variant="bodySmall">
                                Gostaria de agradecer a sua visita ao meu portfólio. Espero que tenha gostado de meus trabalhos. Caso tenha interesse em me contratar, entre em contato comigo através dos meios abaixo:
                            </Text>
                        </Card.Content>

                        <Card.Actions>

                            <View style={{
                                textAlign: 'center',
                                justifyContent: "space-between",
                                flexDirection: "row",
                            }}>

                                <TouchableOpacity onPress={() => Linking.openURL('https://www.github.com/IanJairo')}>
                                    <LottieView
                                        source={require('./../../assets/github.json')}
                                        autoPlay={true}
                                        loop={true}
                                        style={{ width: 50, height: 50 }}
                                        resizeMode="cover"
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/iantorrez/')}>
                                    <LottieView
                                        source={require('./../../assets/linkedin.json')}
                                        autoPlay={true}
                                        loop={true}
                                        style={{ width: 60, height: 60 }}
                                        resizeMode="cover"
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/_ianjairo/')}>
                                    <LottieView
                                        source={require('./../../assets/instagram.json')}
                                        autoPlay={true}
                                        loop={true}
                                        style={{ width: 50, height: 50 }}
                                        resizeMode="cover"
                                    />
                                </TouchableOpacity>
                            </View>

                        </Card.Actions>
                    </Card>
                </View>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
        backgroundColor: '#494CA1',

    },


    card_title: {
        color: '#0077b6',
        padding: 20,
    },

    card: {
        padding: 20,
    },

});