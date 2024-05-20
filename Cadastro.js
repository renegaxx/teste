import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons/'

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const navigation = useNavigation();

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
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.dentroTenda}>
                    <Image
                        source={require('./assets/logo-tenda.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.boxInputs}>
                    <Text style={styles.label}>Nome</Text>
                    <View style={styles.inputContainer}>
                        <Ionicons name="person-circle" size={30} style={styles.icon} />
                        <TextInput
                            placeholder="Digite seu Nome"
                            style={styles.input}
                            onChangeText={setNome}
                            value={nome}
                        />
                    </View>
                    <Text style={styles.label}>Telefone</Text>
                    <View style={styles.inputContainer}>
                        <Ionicons name="call" size={25} style={styles.icon} />
                        <TextInput
                            placeholder="Digite seu Telefone"
                            style={styles.input}
                            onChangeText={setTelefone}
                            value={telefone}
                        />
                    </View>
                    <Text style={styles.label}>Email</Text>
                    <View style={styles.inputContainer}>
                        <Ionicons name="mail" size={27} style={styles.icon} />
                        <TextInput
                            placeholder="Digite seu Email"
                            style={styles.input}
                            onChangeText={setEmail}
                            value={email}
                        />
                    </View>
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
                <TouchableOpacity onPress={handleCadastro} style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.buttonVoltar}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
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
        marginTop: 10
    },
    boxInputs: {
        margin: 40,
        marginBottom: 20
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E6E6E6',
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 10
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
    buttonVoltar: {
        backgroundColor: '#FF6347',
        padding: 10,
        alignItems: 'center',
        borderRadius: 25,
        width: 160,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        height: 50
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20,
        fontFamily: 'Raleway',
    },
});
