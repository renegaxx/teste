import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function Cadastro() {
    let [fontsLoaded] = useFonts({
        'Raleway': require('./assets/fonts/Raleway-VariableFont_wght.ttf'),
    });

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const navigation = useNavigation();

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const handleCadastro = async () => {
        if (nome && telefone && email && usuario && senha) {
            const user = { nome, telefone, email, usuario, senha };
            await AsyncStorage.setItem('user', JSON.stringify(user));
            Alert.alert('Cadastro realizado com sucesso!');
            navigation.navigate('Login');
        } else {
            Alert.alert('Por favor, preencha todos os campos.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.dentroTenda}>
                <Image
                    source={require('./assets/logo-tenda.png')}
                    style={styles.image}
                />
            </View>
            <Text style={styles.label}>Nome</Text>
            <TextInput
                placeholder="Digite seu Nome"
                style={styles.input}
                onChangeText={setNome}
                value={nome}
            />
            <Text style={styles.label}>Telefone</Text>
            <TextInput
                placeholder="Digite seu Telefone"
                style={styles.input}
                onChangeText={setTelefone}
                value={telefone}
            />
            <Text style={styles.label}>Email</Text>
            <TextInput
                placeholder="Digite seu Email"
                style={styles.input}
                onChangeText={setEmail}
                value={email}
            />
            <Text style={styles.label}>Usuário</Text>
            <TextInput
                placeholder="Digite seu Usuário"
                style={styles.input}
                onChangeText={setUsuario}
                value={usuario}
            />
            <Text style={styles.label}>Senha</Text>
            <TextInput
                placeholder="Digite sua Senha"
                style={styles.input}
                secureTextEntry
                onChangeText={setSenha}
                value={senha}
            />
            <TouchableOpacity onPress={handleCadastro} style={styles.button}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 16,
    },
    dentroTenda: {
        alignItems: 'center',
        width: '100%',
        height: 130,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        backgroundColor: '#305BCC',
    },
    image: {
        width: 140,
        height: 140,
        resizeMode: 'contain',
    },
    label: {
        fontFamily: 'Raleway',
        fontWeight: '600',
        fontSize: 19,
        marginBottom: 8,
        marginLeft: 40,
        marginTop: 10,
    },
    input: {
        height: 40,
        width: '80%',
        backgroundColor: '#E6E6E6',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderColor: '#ddd',
        marginBottom: 12,
        paddingHorizontal: 10,
        borderRadius: 10,
        fontFamily: 'Raleway',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#305BCC',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Raleway',
    },
});
