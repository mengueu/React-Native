/**
 * ==============================================================================
 * AULA 05 - CONSUMINDO APIs REST (TELA HOME COMPLETA + TEORIA + EXERCÍCIOS)
 * ==============================================================================
 * 7. FAZENDO NOSSA PRIMEIRA REQUISIÇÃO (JSONPlaceholder)
 * O JSONPlaceholder é uma API criada para testes e estudos com dados fictícios.
 * 
 * 9. ENTENDENDO O FETCH()
 * const resposta = await fetch('URL');
 * O fetch() é a função nativa do JavaScript para fazer requisições HTTP na rede.
 * 
 * 10. O QUE SIGNIFICA ASYNC E AWAIT?
 * A comunicação com uma API é assíncrona (pode demorar).
 * 'async' avisa ao JS que a função contém operações demoradas.
 * 'await' faz o código esperar a resposta do servidor chegar antes de ir para a próxima linha.
 * 
 * 11. FAZENDO UM POST & 12. O QUE MUDOU NO POST?
 * No POST enviamos dados para o servidor usando um objeto de configuração:
 * - method: 'POST' -> Informa a intenção de criar um recurso.
 * - headers: { 'Content-Type': 'application/json' } -> Avisa que o corpo é um JSON.
 * - body: JSON.stringify(...) -> Converte o objeto JavaScript em uma string JSON.
 * 
 * 13. PUT, PATCH E DELETE
 * Mudam apenas a propriedade 'method' no fetch. (São simulados no JSONPlaceholder).
 * ==============================================================================
 */

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Home() {
  // 18. RECEBENDO O TOKEN E USUÁRIO DA TELA DE LOGIN
  const { usuario, token } = useLocalSearchParams();
  const router = useRouter();

  // Estado para armazenar o Post recebido da API no teste de GET
  const [post, setPost] = useState<any>(null);

  // 8. TESTANDO UMA API NO HOME (Método GET)
  async function buscarPost() {
    try {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/2');
      const dados = await resposta.json();
      setPost(dados);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível conectar à API.');
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
            body: 'Estou aprendendo React Native!',
            userId: 1,
          }),
        }
      );

      const dados = await resposta.json();
      console.log('Dados do POST:', dados);
      Alert.alert('Sucesso (POST)', `Post criado no servidor com o ID: ${dados.id}`);
    } catch (error) {
      Alert.alert('Erro', 'Falha ao enviar requisição POST.');
    }
  }

  // Renderização condicional do resultado do teste GET
  let resultado;
  if (post) {
    resultado = (
      <View style={styles.resultadoCard}>
        <Text style={styles.resultadoInfo}><Text style={styles.bold}>ID:</Text> {post.id}</Text>
        <Text style={styles.resultadoInfo}><Text style={styles.bold}>Título:</Text> {post.title}</Text>
        <Text style={styles.bodyTexto}>{post.body}</Text>
      </View>
    );
  } else {
    resultado = <Text style={styles.vazioText}>Nenhum post carregado na memória.</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 1. CABEÇALHO COM DADOS DO LOGIN */}
      <Text style={styles.titulo}>Painel de Testes API</Text>
      <Text style={styles.boasVindas}>Bem-vindo, {usuario || 'Desenvolvedor'}!</Text>
      {token && <Text style={styles.tokenBox}>Token Recebido: {token}</Text>}

      <View style={styles.divisor} />

      {/* 2. DEMONSTRAÇÃO PRÁTICA DA APOSTILA (GET & POST) */}
      <Text style={styles.secaoTitulo}>Testes de Requisições</Text>
      <Text style={styles.descricaoTeorica}>
        Pressione os botões abaixo para disparar as funções de exemplo explicadas nos comentários do código:
      </Text>

      <View style={styles.botoesLinha}>
        <Button title="Buscar Post (GET)" onPress={buscarPost} color="#2563EB" />
        <Button title="Criar Post (POST)" onPress={criarPost} color="#059669" />
      </View>

      {resultado}

      <View style={styles.divisor} />

      {/* 3. CARDS DE ACESSO AOS EXERCÍCIOS PRÁTICOS */}
      <Text style={styles.secaoTitulo}>Exercícios da Aula 05</Text>
      <Text style={styles.descricaoTeorica}>
        Clique no botão de cada card para navegar até as telas dos exercícios resolvidos:
      </Text>

      {/* CARD EXERCÍCIO 1 */}
      <View style={styles.exerciseCard}>
        <Text style={styles.exerciseTitle}>Exercício 1: Lista de Usuários</Text>
        <Text style={styles.exerciseDesc}>
          Faz uma requisição GET para /users e exibe Nome, E-mail e Cidade em uma FlatList.
        </Text>
        <Button 
          title="Abrir Exercício 1" 
          onPress={() => router.push('/exercicio1')} 
          color="#3B82F6" 
        />
      </View>

      {/* CARD EXERCÍCIO 2 */}
      <View style={styles.exerciseCard}>
        <Text style={styles.exerciseTitle}>Exercício 2: Detalhes do Usuário #1</Text>
        <Text style={styles.exerciseDesc}>
          Consome o endpoint /users/1 e exibe as informações específicas do objeto retornado.
        </Text>
        <Button 
          title="Abrir Exercício 2" 
          onPress={() => router.push('/exercicio2')} 
          color="#10B981" 
        />
      </View>

      {/* CARD EXERCÍCIO 3 */}
      <View style={styles.exerciseCard}>
        <Text style={styles.exerciseTitle}>Exercício 3: Formulário de Novo Post</Text>
        <Text style={styles.exerciseDesc}>
          Captura os dados preenchidos em campos de texto e realiza um disparo POST para o servidor.
        </Text>
        <Button 
          title="Abrir Exercício 3" 
          onPress={() => router.push('/exercicio3')} 
          color="#8B5CF6" 
        />
      </View>

      <View style={{ height: 20 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#F8FAFC', flexGrow: 1 },
  titulo: { fontSize: 26, fontWeight: 'bold', color: '#0F172A', textAlign: 'center' },
  boasVindas: { fontSize: 16, color: '#475569', textAlign: 'center', marginTop: 4 },
  tokenBox: { backgroundColor: '#E2E8F0', padding: 8, borderRadius: 6, fontSize: 11, color: '#334155', marginTop: 8, textAlign: 'center' },
  divisor: { height: 1, backgroundColor: '#CBD5E1', marginVertical: 20 },
  secaoTitulo: { fontSize: 18, fontWeight: 'bold', color: '#1E293B', marginBottom: 6 },
  descricaoTeorica: { fontSize: 14, color: '#64748B', marginBottom: 15 },
  botoesLinha: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 15 },
  resultadoCard: { backgroundColor: '#FFFFFF', padding: 15, borderRadius: 8, borderWidth: 1, borderColor: '#CBD5E1', marginTop: 10 },
  resultadoInfo: { fontSize: 14, color: '#1E293B', marginBottom: 4 },
  bold: { fontWeight: 'bold' },
  bodyTexto: { fontSize: 14, color: '#475569', marginTop: 5, fontStyle: 'italic' },
  vazioText: { color: '#94A3B8', fontStyle: 'italic', textAlign: 'center', marginVertical: 10 },
  exerciseCard: { backgroundColor: '#FFFFFF', padding: 16, borderRadius: 10, borderWidth: 1, borderColor: '#E2E8F0', marginBottom: 15, elevation: 2 },
  exerciseTitle: { fontSize: 16, fontWeight: 'bold', color: '#0F172A', marginBottom: 4 },
  exerciseDesc: { fontSize: 13, color: '#64748B', marginBottom: 12 },
});