/**
 * ==============================================================================
 * TELA DE LOGIN (app/index.tsx)
 * ==============================================================================
 * TEORIA & CONCEITOS:
 * 1. GERENCIAMENTO DE ESTADO (useState):
 *    Guardamos o que é digitado nos componentes <TextInput> nas variáveis 
 *    'email' e 'senha'.
 * 
 * 2. NAVEGAÇÃO COM PARÂMETROS (router.push):
 *    Passamos um objeto para router.push() contendo:
 *    - pathname: '/home' -> rota de destino.
 *    - params: { email, senha } -> dados enviados para a próxima tela.
 * 
 * 3. SINTAXE REDUZIDA DO ES6 (Shorthand Property):
 *    Em JS, escrever { email: email, senha: senha } pode ser abreviado para
 *    { email, senha } quando o nome da propriedade e da variável forem iguais.
 * ==============================================================================
 */

import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter, Link } from 'expo-router';

export default function Login() {
  // Gerenciamento de estado para armazenar as entradas do usuário
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  // Instanciamos o hook de navegação
  const router = useRouter();

  function entrar() {
    // DESAFIO 1: Validação para garantir que os campos não estejam vazios
    if (email.trim() === '' || senha.trim() === '') {
      Alert.alert('Erro de Validação', 'Por favor, preencha o e-mail e a senha.');
      return;
    }

    // Redireciona para a rota /home enviando o objeto de parâmetros
    router.push({
      pathname: '/home',
      params: { email, senha }, // Sintaxe reduzida para { email: email, senha: senha }
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>

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
        secureTextEntry // Esconde a senha digitada
        value={senha}
        onChangeText={setSenha}
      />

      <Button title="Entrar" onPress={entrar} />

      {/* Navegação declarativa simples via Link */}
      <Link href="/cadastro" style={styles.link}>
        Não tem conta? Cadastre-se
      </Link>
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
  link: {
    marginTop: 16,
    textAlign: 'center',
    color: '#4A90D9',
  },
});