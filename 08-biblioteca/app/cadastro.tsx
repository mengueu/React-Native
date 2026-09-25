/**
 * ==============================================================================
 * TELA DE CADASTRO (CREATE)
 * ==============================================================================
 * CREATE (addDoc): Adiciona um novo documento a uma coleção. O próprio 
 * Firebase se encarrega de gerar um ID único e aleatório para esse novo item.
 * ==============================================================================
 */

import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useRouter } from 'expo-router';

export default function Cadastro() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const router = useRouter();

  // Função CREATE (Criar/Salvar)
  async function salvarLivro() {
    // Validação simples de campos vazios
    if (titulo === '' || autor === '') {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }

    // addDoc recebe 2 coisas:
    // 1. A coleção onde vai salvar (collection(db, 'livros'))
    // 2. O objeto com os dados que queremos salvar
    await addDoc(
      collection(db, 'livros'),
      {
        titulo: titulo,
        autor: autor
      }
    );

    Alert.alert('Sucesso', 'Livro cadastrado no Firebase!');

    // Volta para a tela inicial automaticamente
    router.back();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastrar Livro</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o título do livro"
        value={titulo}
        onChangeText={setTitulo}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do autor"
        value={autor}
        onChangeText={setAutor}
      />

      <Button title="Salvar Livro" onPress={salvarLivro} color="#22C55E" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#fff' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, marginBottom: 15, borderRadius: 5 }
});