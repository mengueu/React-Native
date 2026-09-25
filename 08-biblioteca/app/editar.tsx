/**
 * ==============================================================================
 * TELA DE EDIÇÃO (UPDATE)
 * ==============================================================================
 * READ ÚNICO (getDoc): Traz as informações de apenas UM documento específico.
 * UPDATE (updateDoc): Atualiza campos específicos de um documento existente, 
 * sem apagar o restante dos dados dele.
 * ==============================================================================
 */

import { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Editar() {
  // Capturamos o ID que foi passado pela rota lá na tela Index
  const { id } = useLocalSearchParams();

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const router = useRouter();

  // Função para pré-carregar os dados atuais do livro nos inputs
  async function buscarLivro() {
    // Pega a referência exata do documento baseado no ID
    const referenciaDoDocumento = doc(db, 'livros', id as string);
    const documento = await getDoc(referenciaDoDocumento);

    // Se o documento realmente existir no banco, preenchemos os states
    if (documento.exists()) {
      setTitulo(documento.data().titulo);
      setAutor(documento.data().autor);
    }
  }

  // Função UPDATE (Atualizar/Editar)
  async function atualizarLivro() {
    const referenciaDoDocumento = doc(db, 'livros', id as string);

    // updateDoc vai no documento específico e altera apenas os campos enviados
    await updateDoc(referenciaDoDocumento, {
      titulo: titulo,
      autor: autor
    });

    Alert.alert('Sucesso', 'Livro atualizado no Firebase!');
    router.back();
  }

  // Assim que abrir a tela de edição, busca os dados do livro para preencher os inputs
  useEffect(() => {
    buscarLivro();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Editar</Text>

      <TextInput
        style={styles.input}
        placeholder="Título"
        value={titulo}
        onChangeText={setTitulo}
      />

      <TextInput
        style={styles.input}
        placeholder="Autor"
        value={autor}
        onChangeText={setAutor}
      />

      <Button title="Salvar Alterações" onPress={atualizarLivro} color="#EAB308" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#fff' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, marginBottom: 15, borderRadius: 5 }
});