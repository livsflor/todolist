import { Text, StyleSheet, View, Button } from "react-native";
import _tarefa from "../types/tarefa";

type _tarefaProps={
    dados: _tarefa,
    handleDeletePress: any
}

export default function Tarefa(props:_tarefaProps){
    return <View style={styles.view}>
                <Text>{props.dados.texto}</Text>;
                <Button title="Excluir" color="red" 
                onPress={()=> { props.handleDeletePress(props.dados.id) }} />
            </View>;
}

const styles = StyleSheet.create({
    view:{
        borderWidth: 1
    }
})