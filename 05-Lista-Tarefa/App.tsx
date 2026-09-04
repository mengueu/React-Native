/* Desafio:
- Adicionar uma mensagem de erro visível (`Text` ou `Alert.alert`) quando o usuário tentar adicionar uma tarefa vazia, em vez de o clique simplesmente não fazer nada
- Impedir tarefas duplicadas
- Exibir a quantidade total de tarefas no topo da tela (ex: "Você tem 3 tarefas")
- Adicionar uma confirmação antes de remover uma tarefa
*/

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
// Ctrl + Espaço: Importar função
interface Tarefa {
  id: string;
  titulo: string;
}

export default function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  function adicionarTarefa() {
    const tituloFormatado = novaTarefa.trim();

    // 1. Mensagem de erro para tarefa vazia
    if (tituloFormatado === '') {
      Alert.alert('Campo Vazio', 'Por favor, digite o nome de uma tarefa antes de adicionar.');
      return;
    }

    // 2. Impedir tarefas duplicadas (Compara sem diferenciar maiúsculas/minúsculas)
    const tarefaExiste = tarefas.some(
      (item) => item.titulo.trim().toLowerCase() === tituloFormatado.toLowerCase()
    );

    if (tarefaExiste) {
      Alert.alert(
        'Tarefa Duplicada', 
        'Esta tarefa já foi adicionada à sua lista!'
      );
      return;
    }

    const tarefa: Tarefa = {
      id: Date.now().toString(),
      titulo: tituloFormatado,
    };

    setTarefas([...tarefas, tarefa]);
    setNovaTarefa(''); // Limpa o campo
  }

  // 4. Confirmação antes de remover
  function confirmarRemocao(index: number, titulo: string) {
    Alert.alert(
      'Confirmar Exclusão',
      `Tem certeza que deseja remover a tarefa "${titulo}"?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel', // Botão padrão de cancelamento
        },
        {
          text: 'Remover',
          style: 'destructive', // Deixa em destaque/vermelho no iOS
          onPress: () => removerTarefa(index),
        },
      ]
    );
  }

  function removerTarefa(index: number) {
    const novaLista = [...tarefas];
    novaLista.splice(index, 1);
    setTarefas(novaLista);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Tarefas</Text>

      {/* 3. Exibir total de tarefas */}
      <Text style={styles.contador}>
        {tarefas.length === 0
          ? 'Você não possui nenhuma tarefa'
          : `Você tem ${tarefas.length} ${tarefas.length === 1 ? 'tarefa' : 'tarefas'}`}
      </Text>

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
            <Text style={styles.tarefaTexto}>{item.titulo}</Text>
            {/* Chama a confirmação antes de apagar */}
            <Button 
              title="Remover" 
              color="#EF4444" 
              onPress={() => confirmarRemocao(index, item.titulo)} 
            />
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
    backgroundColor: '#F8FAFC',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 4,
  },
  contador: {
    fontSize: 16,
    color: '#64748B',
    marginBottom: 20,
  },
  inputArea: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    backgroundColor: '#FFFFFF',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  tarefaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  tarefaTexto: {
    fontSize: 16,
    color: '#334155',
    flex: 1, // Impede que o texto empurre o botão para fora da tela caso seja muito grande
    marginRight: 10,
  },
});