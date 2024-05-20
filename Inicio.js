import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useCallback, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';

export default function Inicio() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const navigation = useNavigation();

    const loadFonts = async () => {
        await Font.loadAsync({
            'Raleway': require('./assets/fonts/Raleway-VariableFont_wght.ttf'),
        });
        setFontsLoaded(true);
    };

    useEffect(() => {
        async function prepare() {
            try {
                await SplashScreen.preventAutoHideAsync();
                await loadFonts();
            } catch (e) {
                console.warn(e);
            } finally {
                setFontsLoaded(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ScrollView>
            <View style={styles.container} onLayout={onLayoutRootView}>
                <View style={styles.dentroTenda}>
                    <Image
                        source={require('./assets/logo-tenda.png')}
                        style={styles.image}
                    />
                </View>
                <Image  
                source={require('./assets/imagem1.png')}
                style={styles.image1}
                />
                <Text style={styles.texto}>
                Suas <Text style={styles.textoMercado}>compras</Text> feitas de forma rápida e fácil
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.botao}>Começar</Text>
                </TouchableOpacity>
                <Text style={styles.texto1}>
                Entrar como <TouchableOpacity style={styles.textoConvida} onPress={() => navigation.navigate('Usuario')}>Convidado</TouchableOpacity>
                </Text>
                <StatusBar style="auto" />
            </View>
        </ScrollView>
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
        width: 130,
        height: 130,
        resizeMode: 'contain',
        marginTop: 60,
    },
    image1 : {
        width: 330,
        height: 330,
        alignItems: 'center',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    texto: {
        textAlign: 'center',
        fontSize: 21,
        marginTop: 20,
        width: 320,
        fontFamily: 'Raleway',
        fontWeight: 'bold',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    textoMercado: {
        color: '#305BCC'
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
        fontWeight: 'bold'
    }
});
