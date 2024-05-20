import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }).start();

        const timer = setTimeout(() => {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 1500,
                useNativeDriver: true,
            }).start(() => {
                navigation.navigate('Usuario');
            });
        }, 1500);

        return () => clearTimeout(timer);
    }, [fadeAnim, navigation]);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.imagemTenda, { opacity: fadeAnim }]}>
                <Image
                    source={require('./assets/logo-tenda.png')}
                    style={styles.image}
                />
                {/* Texto envolvido em um componente Text */}
                <Text style={styles.text}>Bem-Vindo cliente</Text>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#305BCC',
    },
    text: {
        fontSize: 20,
        fontFamily: 'Raleway',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    imagemTenda: {
        width: 130,
        height: 130
    }
});
