import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import _tarefa from './types/tarefa';
import Tarefa from './components/Tarefa';

export default function App() {
  const [novaTarefa, setNovaTarefa] = useState<string>('');
  const [tarefas, setTarefas] = useState<_tarefa[]>([]);

  function adicionarTarefa(){
    if(novaTarefa == ''){
      alert("Insira um texto");
      return;
    }
    let tarefa : _tarefa = {
      id : tarefas.length+1,
      texto : novaTarefa
    };
    setTarefas([...tarefas, tarefa]);
  }

  function mostrarTarefas(){
    let saida = tarefas.map(t => <Tarefa key={t.id} dados={t} handleDeletePress={excluir} />);
    return saida;
  }

  function excluir(id :number){
    let f = tarefas.filter(t => t.id != id);
    setTarefas(f);
  }

  return (
    <View style={styles.container} key="main">
      <TextInput style={styles.input} value={novaTarefa} onChangeText={setNovaTarefa}/>
      <Button title='Adicionar tarefa' onPress={adicionarTarefa}/>
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
    padding: 12,
    backgroundColor: '#FF6347', 
    borderRadius: 30, 
    width: '80%',
    alignItems: 'center', 
    justifyContent: 'center', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5, 
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
