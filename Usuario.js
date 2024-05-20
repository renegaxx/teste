import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Usuario() {
  const [user, setUser] = useState({ email: '', usuario: '' });
  const navigation = useNavigation();
  const route = useRoute();
  const isGuest = route.params?.isGuest || false;

  useEffect(() => {
    if (!isGuest) {
      const getUser = async () => {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          setUser(JSON.parse(userData));
        }
      };
      getUser();
    }
  }, [isGuest]);

  return (
    <View style={styles.container}>
      <View style={styles.imageUser}></View>
      {isGuest ? (
        <Text style={styles.info}>Você está logado como convidado.</Text>
      ) : (
        <>
          <View style={styles.infoPega}>
            <Text style={styles.info}>{user.email}</Text>
            <Text style={styles.info}>{user.usuario}</Text>
          </View></>
      )}
      <View style={styles.conteudo}>


        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.buttonVoltar}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#305BCC',
    padding: 16,
  },
  imageUser: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#FF6347',
    marginTop: 60
  },
  infoPega: {
    paddingTop: 10
  },
  info: {
    fontSize: 18,
    marginBottom: 8,
    fontFamily: 'Raleway',
  },
  conteudo: {
    paddingTop: 10,
    marginTop: 40,
    backgroundColor: '#fff',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    height: 900,
    width: '100%',
  },
  buttonVoltar: {
    backgroundColor: '#FF6347',
    padding: 10,
    alignItems: 'center',
    borderRadius: 25,
    width: 160,
    marginTop: 20,
    height: 50,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    fontFamily: 'Raleway',
  },
});
