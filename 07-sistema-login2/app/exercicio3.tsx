/**
 * EXERCÍCIO 3 - CONCEITO CHAVE:
 * Para enviar dados ao servidor:
 * 1. Definimos method: 'POST'
 * 2. Adicionamos os headers avisando que o formato é JSON ('Content-Type': 'application/json')
 * 3. Convertemos o objeto JS em string texto usando JSON.stringify()
 */

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';

export default function Exercicio3() {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [enviando, setEnviando] = useState(false);

  async function criarPost() {
    if (titulo.trim() === '' || conteudo.trim() === '') {
      Alert.alert('Atenção', 'Preencha o título e o conteúdo antes de enviar.');
      return;
    }

    setEnviando(true);

    try {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: titulo,
          body: conteudo,
          userId: 1,
        }),
      });

      const dados = await resposta.json();

      Alert.alert(
        'Post Criado com Sucesso!',
        `A API respondeu com o novo ID: ${dados.id}\nTítulo: ${dados.title}`
      );

      // Limpar formulário
      setTitulo('');
      setConteudo('');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível enviar o post.');
    } finally {
      setEnviando(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício 3: Novo Post</Text>

      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o título do post"
        value={titulo}
        onChangeText={setTitulo}
      />

      <Text style={styles.label}>Conteúdo</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Digite o conteúdo da publicação..."
        value={conteudo}
        onChangeText={setConteudo}
        multiline
        numberOfLines={4}
      />

      {enviando ? (
        <ActivityIndicator size="large" color="#8B5CF6" />
      ) : (
        <Button title="CRIAR POST" onPress={criarPost} color="#8B5CF6" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFF' },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#1E293B' },
  label: { fontSize: 14, fontWeight: '600', color: '#475569', marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#CBD5E1', borderRadius: 8, padding: 12, marginBottom: 15, fontSize: 16 },
  textArea: { height: 100, textAlignVertical: 'top' },
});