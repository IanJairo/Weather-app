import React from 'react';
import { View, StyleSheet, FlatList, Icon } from 'react-native';
import LottieView from 'lottie-react-native';
import { Text } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons'


export default function WeatherCard({ city, country, temperature, weather, sunset, sunrise, visibility, main }) {
    console.log('main', main + 'country: ', country)
    let animation = require('../../assets/animation/sol.json');

    if (main === 'Rain') {
        animation = require('../../assets/animation/rain.json');
    } else if (main === 'Clouds') {
        animation = require('../../assets/animation/clouds.json');
    }

    return (
        <View style={styles.card}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <View>
                            <Text style={styles.title}>{city}</Text>
                            <Text style={styles.subtitle}>{country}</Text>
                        </View>

                        <View style={styles.weather}>
                            <Text style={styles.temperature}>{temperature}°C</Text>
                            <Text style={styles.weatherText}>{weather}</Text>
                        </View>
                    </View>

                    <View >
                        <View style={styles.animation}>
                            <LottieView source={animation} autoPlay loop />
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <View style={styles.textIconContainer}>
                        <Ionicons name="sunny" size={20} color="#FDC738" />
                        <Text style={styles.textIcon}>{sunrise}</Text>
                    </View>

                    <View style={styles.textIconContainer}>
                        <Ionicons name="moon" size={20} color="#FDC738" />
                        <Text style={styles.textIcon}>{sunset}</Text>
                    </View>

                    <View style={styles.textIconContainer}>
                        <Ionicons name="eye" size={20} color="#FDC738" />
                        <Text style={styles.textIcon}>{visibility}m</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

// const data = [
//     { id: '1', city: 'New York', country: 'USA', temperature: '14', weather: 'Rain' },
//     { id: '2', city: 'London', country: 'UK', temperature: '10', weather: 'Clouds' },
//     { id: '3', city: 'Paris', country: 'France', temperature: '18', weather: 'Sunny' },
// ];

// const Teste = () => {
//     const renderItem = ({ item }) => (
//         <WeatherCard city={item.city} country={item.country} temperature={item.temperature} weather={item.weather}
//             sunset={item.sunset} sunrise={item.sunrise} visibility={item.visibility}
//         />
//     );

//     return (
//         <FlatList
//             data={data}
//             keyExtractor={(item) => item.id}
//             renderItem={renderItem}
//             style={styles.container}
//         />
//     );
// };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#666BD0',

    },
    card: {
        backgroundColor: '#494CA1',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#FDC738',
    },
    weather: {
        marginTop: 20,
        alignItems: 'flex-start',
        flex: 1,
    },
    temperature: {
        fontSize: 30,
        color: '#FDC738',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    weatherText: {
        fontSize: 16,
        color: '#fff',
    },
    animation: {
        width: 100,
        height: 100,
    },

    textIconContainer: {
        flex: 1, flexDirection: 'row', justifyContent: 'flex-start', color: "#fff"
    },

    textIcon: {
        marginStart: 5,
        fontSize: 16,
        color: '#fff'
    }
});

