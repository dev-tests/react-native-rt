import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

function Login({ navigation }) {
    const [login, onChangeLogin] = React.useState();
    const [senha, onChangeSenha] = React.useState();

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', width: 200, borderWidth: 1 }}
                onChangeText={text => onChangeLogin(text)}
                value={login}
                placeholder='login'
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', width: 200, borderWidth: 1 }}
                onChangeText={text => onChangeSenha(text)}
                value={senha}
                placeholder='senha'
                secureTextEntry={true}
                autoCompleteType='password'
                textContentType='password'
            />

                <TouchableOpacity
                    onPress={() => navigation.navigate('Logado')}
                    style={{
                        backgroundColor: '#000',
                        padding: 10,
                        borderColor: '#fff',
                        margin: 10,
                        width: '50%',
                    }}
                >
                    <Text style={{ color: '#fff', textAlign: 'center' }}>Logar</Text>
                </TouchableOpacity>
            
            <TouchableOpacity
                onPress={() => navigation.navigate('Cadastro')}
                style={{
                    alignContent: 'center',
                    backgroundColor: '#A0A0A0',
                    padding: 10,
                    margin: 10,
                    width: '50%'
                }}
            >
                <Text style={{ textAlign: 'center', color: '#fff' }}>Cadastro</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Login;