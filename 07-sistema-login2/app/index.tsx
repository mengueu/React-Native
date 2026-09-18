/**
 * ==============================================================================
 * AULA 05 - CONSUMINDO APIs REST (PARTE 1: TEORIA E LOGIN)
 * ==============================================================================
 * 1. O QUE É UMA API?
 * API (Application Programming Interface / Interface de Programação de Aplicações)
 * permite que diferentes sistemas se comuniquem. O seu app não precisa ter o 
 * banco de dados de clima dentro dele; ele pede isso para uma API.
 * Fluxo: Aplicativo -> API -> Banco de Dados (e o caminho reverso com a resposta).
 * 
 * 2. O QUE É REST?
 * REST (Representational State Transfer / Transferência de Estado Representacional).
 * É uma arquitetura para criar sistemas que se comunicam via internet, normalmente
 * usando o protocolo HTTP.
 * Fluxo: App React Native -> Requisição HTTP -> API -> Resposta HTTP -> App.
 * 
 * 3. RECURSOS EM UMA API REST
 * Uma API trabalha com "recursos" (informações do sistema).
 * Ex: /users (usuários), /products (produtos). 
 * Podemos acessar um específico: /users/10 (Quero o usuário 10).
 * 
 * 4. MÉTODOS HTTP E STATUS
 * GET: Buscar informação | POST: Criar informação | PUT: Atualizar informação
 * PATCH: Atualizar parte da informação | DELETE: Excluir informação.
 * Status: 200 (Sucesso), 201 (Criado), 400 (Erro do cliente), 401 (Não autorizado), 
 * 404 (Não encontrado), 500 (Erro no servidor).
 * 
 * 5. REST x RESTful
 * REST: É a arquitetura (a teoria).
 * RESTful: É a API que segue essa arquitetura (a prática).
 * 
 * 6. O FORMATO JSON (JavaScript Object Notation)
 * É o formato padrão para enviar e receber dados. Ex: { "id": 1, "nome": "João" }
 * ==============================================================================
 */

import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  /**
   * 14. API DE LOGIN & 15. DUMMYJSON
   * Fluxo: Usuário digita dados -> fetch(POST) -> API verifica -> Retorna resposta
   * Para testar no emulador, use os dados reais do DummyJSON:
   * Usuário: emilys
   * Senha: emilyspass
   */
  async function entrar() {
    try {
      // 16. PREPARANDO A TELA DE LOGIN (O fetch com POST)
      const resposta = await fetch(
        'https://dummyjson.com/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: usuario,
            password: senha,
          }),
        }
      );

      // Converte a resposta recebida em formato JSON para um objeto JavaScript
      const dados = await resposta.json();

      // 17. VERIFICANDO SE O LOGIN DEU CERTO
      if (resposta.ok) {
        // resposta.ok é true se o status for 200 a 299
        router.push({
          pathname: '/home',
          params: {
            usuario: dados.username,
            token: dados.accessToken,
          },
        });
      } else {
        Alert.alert('Erro', 'Usuário ou senha inválidos.');
      }
    } catch (erro) {
      Alert.alert('Erro', 'Não foi possível conectar com a API.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login (DummyJSON)</Text>
      
      <Text style={styles.dica}>Dica para teste: user: emilys | pass: emilyspass</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <Button title="Entrar" onPress={entrar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  titulo: { fontSize: 30, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  dica: { fontSize: 14, color: '#666', marginBottom: 30, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#999', padding: 10, marginBottom: 15, borderRadius: 5 },
});