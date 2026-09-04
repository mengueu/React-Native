import { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function App() {

  interface Tarefa {
    id: string;
    titulo: string;
  }

  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  function adicionarTarefa() {
    if (novaTarefa.trim() === '') return; // não adiciona se estiver vazio
    
    const tarefa = {
      id: Date.now().toString(), // id único simples
      titulo: novaTarefa,
    };

    setTarefas([...tarefas, tarefa]);
    setNovaTarefa(''); // limpa o TextInput depois de adicionar
  }

  function removerTarefa(index: number) {
    const novaLista = [...tarefas];
    novaLista.splice(index, 1);
    setTarefas(novaLista);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Tarefas</Text>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma nova tarefa"
          value={novaTarefa}
          onChangeText={setNovaTarefa}
        />
        <Button title="Adicionar" onPress={adicionarTarefa} />
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.tarefaItem}>
            <Text style={styles.tarefaTexto}>{item.titulo}{item.id}</Text>
            <Button title="Remover" onPress={() => removerTarefa(index)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputArea: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  tarefaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tarefaTexto: {
    fontSize: 16,
  },
});
