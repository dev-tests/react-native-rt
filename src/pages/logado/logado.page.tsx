import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default function Logado({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text>Logado</Text>
            <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={{
                        backgroundColor: '#000',
                        padding: 10,
                        borderColor: '#fff',
                        margin: 10,
                        width: '50%',
                    }}
                >
                    <Text style={{ color: '#fff', textAlign: 'center' }}>Voltar</Text>
                </TouchableOpacity>
        </View>
    )
}