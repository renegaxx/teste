import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function Inicio() {
    let [fontsLoaded] = useFonts({
        'Raleway': require('./assets/fonts/Raleway-VariableFont_wght.ttf'),
    });

    const navigation = useNavigation();

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.container}>
            <View style={styles.dentroTenda}>
                <Image
                    source={require('./assets/logo-tenda.png')}
                    style={styles.image}
                />
            </View>
            <Text style={styles.texto}>
                Entre em nosso mercado e gaste seu dinheiro conscientemente
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.botao}>Entrar</Text>
            </TouchableOpacity>
            <Text style={styles.texto1}>
                Entrar como <TouchableOpacity style={styles.textoConvida} onPress={() => navigation.navigate('ProximaPagina')}>Convidado</TouchableOpacity>
            </Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    dentroTenda: {
        alignItems: 'center',
        height: 200,
        backgroundColor: '#305BCC',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    texto: {
        textAlign: 'center',
        fontSize: 21,
        marginTop: 120,
        fontFamily: 'Raleway',
        fontWeight: 'bold',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    botao: {
        width: 150,
        height: 40,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#305BCC',
        alignItems: 'center',
        marginTop: 40,
        fontWeight: 'bold',
        color: 'white',
        borderRadius: 20,
        fontFamily: 'Raleway',
        marginRight: 'auto',
        marginLeft: 'auto',
        fontSize: 24,
    },
    texto1: {
        textAlign: 'center',
        fontFamily: 'Raleway',
        marginTop: 25,
    },
    textoConvida: {
        color: '#305BCC',
        fontWeight: 'bold' // Alterado para 'bold'
    }
});
