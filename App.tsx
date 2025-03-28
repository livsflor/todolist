import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import _tarefa from './types/tarefa';
import Tarefa from './components/Tarefa';

export default function App() {
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
    let saida = tarefas.map(t => <Tarefa dados={t} handleDeletePress/>);
    return saida;
  }

  function excluir(id :number)
  {
    let achou = tarefas.find(t => t.id == id);
    if(achou == undefined){
      alert("Nao encontrado");
      return;
    }
    let temp = tarefas;
    let i = temp.indexOf(achou);
    temp.splice(i, 1);
    setTarefas(temp);
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={novaTarefa} onChangeText={setNovaTarefa}/>
      <Button color="pink" title='Adicionar tarefa' onPress={adicionarTarefa}/>
      {mostrarTarefas()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
    borderWidth: 1,
    borderColor: 'darkblue'
  }
});
