import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function BuscaCep({navigation}){
    const [cep, setCep] = useState(''); // string
    const [end, setEnd] = useState({
        logradouro: "",
        bairro: "",
        localidade: "",
        uf: "",
        estado: "",
        regiao: "",
        ibge: "",
        gia: "",
        ddd: "",
        siafi: ""
    }); // objeto vazio

    async function buscarCEP() {
        let r = await fetch("https://viacep.com.br/ws/"+cep+"/json/");
        let dados = await r.json();
        setEnd(dados);
    }

    return (
        <View style={styles.container}>
        <Text>Consulte seu CEP!</Text>
        <TextInput
            style={styles.textInput}
            value={cep}
            onChangeText = {setCep}
        />
        <Text>{cep}</Text>
        <Button
            title="Buscar"
            onPress={buscarCEP}
        />
        <Text>{end.logradouro}</Text>
        <Text>{end.bairro}</Text>
        <Text>{end.localidade}</Text>
        <Text>{end.uf}</Text>
        <Text>{end.estado}</Text>
        <Text>{end.regiao}</Text>
        <Text>{end.ibge}</Text>
        <Text>{end.gia}</Text>
        <Text>{end.ddd}</Text>
        <Text>{end.siafi}</Text>
        <StatusBar style="auto" />
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
    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: '7px',
    },
    });