import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { getAvailableRoutes } from '../../Example';
import { cadastrar } from './cadastro.service';

function Cadastro({ navigation }) {
    const [login, onChangeLogin] = React.useState();
    const [senha, onChangeSenha] = React.useState();
    const [nome, onChangeNome] = React.useState();
    const [sobrenome, onChangeSobrenome] = React.useState();
    const [endereco, onChangeEndereco] = React.useState();

    return (
        <View style={styles.container}>
            <Text>Cadastro</Text>
            <TextInput
                style={{ height: 40, width: '90%', borderColor: 'gray', borderWidth: 1 }}
                maxLength={40}
                onChangeText={text => onChangeLogin(text)}
                placeholder='login'
                value={login}
                textContentType='username'
            />
            <TextInput
                style={{ height: 40, width: '90%', borderColor: 'gray', borderWidth: 1 }}
                maxLength={40}
                onChangeText={text => onChangeNome(text)}
                value={nome}
                placeholder='nome'
            />
            <TextInput
                style={{ height: 40, width: '90%', borderColor: 'gray', borderWidth: 1 }}
                maxLength={40}
                onChangeText={text => onChangeSobrenome(text)}
                value={sobrenome}
                placeholder='sobrenome'
            />
            <TextInput
                style={{ height: 40, width: '90%', borderColor: 'gray', borderWidth: 1 }}
                maxLength={40}
                onChangeText={text => onChangeSenha(text)}
                placeholder='senha'
                value={senha}
                secureTextEntry={true}
                autoCompleteType='password'
                textContentType='password'
            />
            <TextInput
                style={{ height: 40, width: '90%', padding: 2, borderColor: 'gray', borderWidth: 1 }}
                maxLength={40}
                onChangeText={text => onChangeEndereco(text)}
                placeholder='endereco'
                textContentType='location'
                value={endereco}
                />
            <TouchableOpacity
                onPress={() => { 
                    navigation.navigate('Logado')
                    cadastrar({ login, senha, sobrenome, endereco, nome })
                }}
                style={{
                    backgroundColor: '#A0A0A0',
                    padding: 10,
                    margin: 10,
                    width: '50%'
                }}
            >
                <Text style={{color: '#fff', textAlign: 'center'}}>Cadastrar</Text>
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

export default Cadastro;