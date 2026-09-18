/**
 * ==============================================================================
 * TELA DE CADASTRO (app/cadastro.tsx)
 * ==============================================================================
 * TEORIA & CONCEITOS:
 * Assim como a tela de Login, a tela de cadastro coleta informações dos campos
 * de entrada e, ao clicar em "Cadastrar", navega para a tela Home enviando
 * os dados através do objeto 'params'.
 * ==============================================================================
 */

import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const router = useRouter();

  // DESAFIO 4: Funcionalidade ao botão "Cadastrar" enviando os dados para a Home
  function cadastrar() {
    if (nome.trim() === '' || email.trim() === '' || senha.trim() === '') {
      Alert.alert('Atenção', 'Preencha todos os campos para se cadastrar.');
      return;
    }

    // Navega enviando os parâmetros para a Home
    router.push({
      pathname: '/home',
      params: { nome, email, senha },
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Criar Conta</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Nome" 
        value={nome}
        onChangeText={setNome}
      />
      <TextInput 
        style={styles.input} 
        placeholder="E-mail" 
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        secureTextEntry 
        value={senha}
        onChangeText={setSenha}
      />

      <Button title="Cadastrar" onPress={cadastrar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
});