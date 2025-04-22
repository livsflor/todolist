import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import _tarefa from '../types/tarefa';
import Tarefa from '../components/Tarefa';

export default function ToDoScreen({navigation}){
    const [novaTarefa, setNovaTarefa] = useState<string>();
    const [tarefas, setTarefas] = useState<_tarefa[]>([]);

    function adicionarTarefa()
    {
        if(novaTarefa == undefined)
        {
        alert("Insira um texto");
        return;
        }

        let tarefa : _tarefa = 
        {
        id : tarefas.length+1,
        texto : novaTarefa
        };

        setTarefas([...tarefas, tarefa]);
    }

    function mostrarTarefas(){
        let saida = tarefas.map(t => <Tarefa dados={t} handleDeletePress={excluir}/>);
        return saida;
    }

    function excluir(id :number)
    {
        let achou = tarefas.filter(t => t.id != id);
        setTarefas(achou);

        navigation.navigate('teste');
    }

    return (
        <View style={styles.container} key="main">
        <TextInput style={styles.input} value={novaTarefa} onChangeText={setNovaTarefa}/>
        <Button color="pink" title='Adicionar tarefa' onPress={adicionarTarefa}/>
        {mostrarTarefas()}
        <br></br>
        <Button color="pink" title='Buscar Cep' onPress={() => navigation.navigate('busca')}/>
        </View>
    );
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
  
    input: {
      width: '80%',
      padding: 10,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: 'darkblue',
      fontSize: 16,
      backgroundColor: '#fff',
      color: '#333',
    },
  
    button: {
      padding: 10,
      backgroundColor: 'pink',
      borderRadius: 5,
      width: '80%',
    },
  
    tarefaText: {
      fontSize: 18,
      color: '#333',
    },
  
    deleteButton: {
      backgroundColor: 'aquamarine',
      padding: 5,
      borderRadius: 5,
      color: 'white',
    },
  });