/**
 * ==============================================================================
 * AULA 05 - CONSUMINDO APIs REST (PARTE 2: GET, POST E ASYNC/AWAIT)
 * ==============================================================================
 * 7. FAZENDO NOSSA PRIMEIRA REQUISIÇÃO (JSONPlaceholder)
 * JSONPlaceholder é uma API de testes com dados fictícios.
 * Possui recursos como: /posts, /comments, /users, etc.
 * 
 * 9. ENTENDENDO O FETCH()
 * const resposta = await fetch('URL');
 * O fetch() é a função nativa do JavaScript para fazer requisições de rede.
 * 
 * 10. O QUE SIGNIFICA ASYNC E AWAIT?
 * Uma comunicação com uma API demora. 
 * 'async' avisa que a função tem operações demoradas.
 * 'await' diz: "Pare aqui e espere o servidor responder antes de ir para a próxima linha".
 * 
 * 11. FAZENDO UM POST & 12. O QUE MUDOU NO POST?
 * No POST precisamos de um objeto de configuração no fetch:
 * - method: 'POST' (define a ação).
 * - headers: 'Content-Type': 'application/json' (avisa a API que estamos mandando JSON).
 * - body: JSON.stringify(dados) (transforma nosso objeto JavaScript em texto JSON).
 * 
 * 13. PUT, PATCH E DELETE
 * Funcionam igual ao POST, mudando apenas a propriedade 'method'. 
 * Lembre-se: No JSONPlaceholder, criações/edições são simuladas, não salvam de verdade.
 * ==============================================================================
 */

import { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Home() {
  // RECEBENDO O TOKEN NA HOME
  const { usuario, token } = useLocalSearchParams();
  
  // Estado para armazenar o Post recebido da API
  const [post, setPost] = useState<any>(null);

  // TESTANDO UMA API NO HOME (Método GET)
  async function buscarPost() {
    try {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/2');
      const dados = await resposta.json();
      setPost(dados);
    } catch (error) {
      Alert.alert("Erro", "Falha ao buscar post");
    }
  }

  // 11. FAZENDO UM POST (Método POST)
  async function criarPost() {
    try {
      const resposta = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: 'Meu primeiro post',
            body: 'Estou aprendendo React Native',
            userId: 1,
          }),
        }
      );
      const dados = await resposta.json();
      console.log('Post Criado (Simulado):', dados);
      Alert.alert('Sucesso!', `Post criado com ID: ${dados.id} (Veja o console)`);
    } catch (error) {
      Alert.alert("Erro", "Falha ao criar post");
    }
  }

  // Renderização condicional do resultado do GET
  let resultado;
  if (post) {
    resultado = (
      <View style={styles.resultado}>
        <Text style={styles.negrito}>ID: {post.id}</Text>
        <Text style={styles.negrito}>Título: {post.title}</Text>
        <Text>{post.body}</Text>
      </View>
    );
  } else {
    resultado = <Text style={styles.vazio}>Nenhum post carregado.</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Bem-vindo, {usuario}!</Text>
      <Text style={styles.tokenBox}>Token: {token}</Text>

      <View style={styles.divisor} />

      <Text style={styles.subtitulo}>Testando a API (JSONPlaceholder)</Text>
      
      <View style={styles.botoesContainer}>
        <Button title="Buscar Post (GET)" onPress={buscarPost} />
        <View style={{ width: 10 }} />
        <Button title="Criar Post (POST)" onPress={criarPost} color="#10B981" />
      </View>

      {resultado}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#fff', alignItems: 'center' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginTop: 20 },
  tokenBox: { backgroundColor: '#f0f0f0', padding: 10, marginTop: 10, borderRadius: 5, fontSize: 12, color: '#333' },
  divisor: { height: 1, backgroundColor: '#ccc', width: '100%', marginVertical: 25 },
  subtitulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  botoesContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20 },
  resultado: { marginTop: 10, padding: 15, backgroundColor: '#E2E8F0', borderRadius: 8, width: '100%' },
  negrito: { fontWeight: 'bold', marginBottom: 5 },
  vazio: { marginTop: 10, color: '#666', fontStyle: 'italic' },
  tituloExercicios: { fontSize: 20, fontWeight: 'bold', color: '#6200EE', marginBottom: 10 },
  textoExercicio: { fontSize: 14, color: '#333', lineHeight: 22 },
  dicaExercicio: { marginTop: 15, fontSize: 13, color: '#D97706', backgroundColor: '#FEF3C7', padding: 10, borderRadius: 5 }
});