import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons/'

SplashScreen.preventAutoHideAsync();

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                'Raleway': require('./assets/fonts/Raleway-VariableFont_wght.ttf'),
            });
            setFontsLoaded(true);
            await SplashScreen.hideAsync();
        }
        loadFonts();
    }, []);

    const handleLogin = async () => {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
            const user = JSON.parse(userData);
            if (user.usuario === usuario && user.senha === senha) {
                navigation.navigate('Home');
            } else {
                Alert.alert('Usuário ou senha incorretos.');
            }
        } else {
            Alert.alert('Usuário não encontrado. Por favor, cadastre-se.');
        }
    };

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View style={styles.dentroTenda}>
                    <Image
                        source={require('./assets/logo-tenda.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.separa}>
                    <Image
                        source={require('./assets/imagem1.png')}
                        style={styles.imagem1}
                    />
                    <View style={styles.boxInputs}>
                        <Text style={styles.label}>Usuário</Text>
                    <View style={styles.inputContainer}>
                        <Ionicons name="person" size={25} style={styles.icon} />
                        <TextInput
                            placeholder="Digite seu Usuário"
                            style={styles.input}
                            onChangeText={setUsuario}
                            value={usuario}
                        />
                    </View>
                    <Text style={styles.label}>Senha</Text>
                    <View style={styles.inputContainer}>
                        <Ionicons name="eye-off" size={25} style={styles.icon} />
                        <TextInput
                            placeholder="Digite sua Senha"
                            style={styles.input}
                            secureTextEntry
                            onChangeText={setSenha}
                            value={senha}
                        />
                    </View>
                    </View>
                    
                    <TouchableOpacity onPress={handleLogin} style={styles.button}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.link}>
                        <Text style={styles.linkText}>   Não possui uma conta? <Text style={styles.linkText[{ color: '#305BCC' }]}>Cadastre-se</Text></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#305BCC',
    },
    image: {
        width: 130,
        height: 130,
        marginTop: 50
    },
    imagem1: {
        width: 270,
        height: 270,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    dentroTenda: {
        alignItems: 'center',
        width: '100%',
        height: 130,
        backgroundColor: '#305BCC',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    },
    separa: {
        paddingTop: 10,
        marginTop: 50,
        backgroundColor: '#fff',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        height: 900,
    },
    label: {
        fontFamily: 'Raleway',
        fontWeight: '600',
        fontSize: 19,
        marginBottom: 8,
        marginTop: 10,
    },
    boxInputs: {
        margin: 40,
        marginTop: 0,
        marginBottom:20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E6E6E6',
        borderRadius: 20,
        marginBottom: 10,
        paddingHorizontal: 10,
        height: 60
    },
    icon: {
        marginRight: 10,
        color: '#F6282A',
    },
    input: {
        flex: 1,
        padding: 10,
        backgroundColor: '#E6E6E6',
        borderRadius: 10,
    },
    button: {
        backgroundColor: '#305BCC',
        padding: 10,
        alignItems: 'center',
        borderRadius: 25,
        width: 160,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        height: 50
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20,
        fontFamily: 'Raleway',
    },
    link: {
        marginTop: 10,
        alignItems: 'center',
    },
    linkText: {
        fontFamily: 'Raleway',
    },
});
