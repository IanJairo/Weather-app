
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, } from 'react-native'
import React, { Component } from 'react';

import * as auth from '../services/auth'
import axios from 'axios';
import LottieView from 'lottie-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import WeatherCard from '../components/WeatherCard';

import { Button, Dialog, FAB, Portal, Provider, Card } from 'react-native-paper';




export default class Home extends Component {

    constructor(props) {
        super(props);
        this.weatherAnimation;
        this.state = ({
            wheater: {},
            visible: false,
            weatherAnimation: '',
            cidade: '',
            cidades: [],
            id: 1
        });

    }


    getTemp = async () => {

        const API_KEY = "46419c15224949cd4ee428a1f0f39d05"
        const cidade = this.state.cidade;
        const link = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&lang=pt_br`


        await axios.get(link).then((response) => {
            const reqObj = response.data;
            const main = reqObj['weather'][0]['main']
            //timeStamp para hora e minuto do brasileiro
            const amanhecer = new Date(reqObj['sys']['sunrise'] * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
            const anoitecer = new Date(reqObj['sys']['sunset'] * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
            const temperatura = (reqObj['main']['temp'] - 273.15).toFixed(0)

            let cont = this.state.id + 1;
            const obj = {
                'id': cont,
                'weather': reqObj['weather'][0]['description'],
                'temperature': temperatura,
                'sunrise': amanhecer,
                'sunset': anoitecer,
                'visibility': reqObj['visibility'],
                'city': reqObj['name'],
                'country': reqObj['sys']['country'],
                'main': main
            }
            this.setState({ cidades: [...this.state.cidades, obj], id: cont, cidade: '' })
        });

    }

    showDialog = () => {
        this.setState({ visible: true })
    }

    hideDialog = async () => {

        const resp = await this.getTemp();

        this.setState({ visible: false });
    }


    componentDidMount() {
    }

    renderItem = ({ item }) => (
        <WeatherCard {...item} />
    )

    handleLogout() {
        let newThis = this
        auth.Logout();
        newThis.props.navigation.navigate("Login");

    }

    handleContact() {

   let newThis = this
        newThis.props.navigation.navigate("Contact");
    }



    render() {

        return (


            <Provider>

                <SafeAreaView style={styles.container}>
                    <StatusBar animated={true} style="light" />

                    <View>
                        <Portal>
                            <Dialog visible={this.state.visible} onDismiss={this.hideDialog}>
                                <Dialog.Title>Adicionar uma nova cidade</Dialog.Title>
                                <Dialog.Content>
                                    <TextInput style={{ borderBottomColor: 'red' }} value={this.state.cidade} onChangeText={(text) => this.setState({ cidade: text })} placeholder="Inserir cidade" ></TextInput>
                                </Dialog.Content>
                                <Dialog.Actions>
                                    <Button onPress={this.hideDialog}>Adicionar</Button>
                                </Dialog.Actions>
                            </Dialog>
                        </Portal>
                    </View>

                    <View style={{
                        paddingTop: 30,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingBottom: 20
                    }}>


                        <Button style={{ flex: 1, backgroundColor: 'red', margin: 10 }} icon="logout" mode="contained" onPress={() => this.handleLogout()}>
                            Sair
                        </Button>

                        <Button style={{ margin: 10 }} icon="account-box-outline" mode="contained" onPress={() => this.handleContact()}>
                            Contato
                        </Button>

                        <Button style={{ flex: 3, backgroundColor: '#FDC738', margin: 10 }} icon="plus-circle-outline" mode="contained" textColor='black' onPress={() => this.showDialog()}>
                            Nova cidade
                        </Button>

                    </View>

                    <FlatList
                        data={this.state.cidades}
                        keyExtractor={(item) => item.id}
                        renderItem={this.renderItem}
                        style={styles.lista}
                    />
                </SafeAreaView >
            </Provider>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#494CA1',
    },

    lista: {
        flexDirection: 'column',
        flex: 1,
        padding: 20,
        backgroundColor: '#666BD0',
    },

    weatherAnimation: {
        width: 100,
        height: 200,
        marginBottom: 10,
    },

    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },

    description: {
        fontSize: 20,
        color: '#555',
        textAlign: 'center',
    },
    temperaturaContainer: {
        margin: 20,
    },
    temperatura: {
        fontSize: 80,
        fontWeight: 'bold',
    },
    cardsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: '30%',
        opacity: 0.8,
    },
    cardTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardValue: {
        fontSize: 14,
        color: '#555',
    },
});


{/* <View style={styles.temperaturaContainer}>
                        <Text style={styles.temperatura}>{this.state.wheater.temperatura}°C</Text>
                        <Text style={styles.description}>{this.state.wheater.descricao}</Text>
                    </View>
                    <View style={styles.cardsContainer}>
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Amanhecer</Text>
                            <Text style={styles.cardValue}>{this.state.wheater.amanhecer}</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Anoitecer</Text>
                            <Text style={styles.cardValue}>{this.state.wheater.anoitecer}</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Visibilidade</Text>
                            <Text style={styles.cardValue}>{this.state.wheater.visibilidade} m</Text>
                        </View>
                    </View> */}