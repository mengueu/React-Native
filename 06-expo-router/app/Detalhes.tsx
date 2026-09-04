/**
 * AULA 03: ROTA SECUNDÁRIA (app/detalhes.tsx)
 * ==============================================================================
 * CRIAÇÃO AUTOMÁTICA DE ROTAS:
 * Ao criar o arquivo 'detalhes.tsx' dentro de 'app/', o Expo Router disponibiliza 
 * automaticamente o caminho '/detalhes' sem precisar alterar arquivos de rotas.
 * 
 * COMPORTAMENTO EM PILHA (STACK):
 * Ao executar 'router.push('/detalhes')', esta tela é colocada em cima da tela 'index'.
 * O Stack Navigator adiciona automaticamente o botão de "Voltar" na barra superior 
 * para retiras esta tela da pilha e retornar à anterior.
 * ==============================================================================
 */

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Detalhes() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Detalhes</Text>
      <Text style={styles.description}>
        Esta tela foi aberta e empilhada sobre a Tela Inicial!
      </Text>

      <View style={styles.buttonGroup}>
        {/* Retorna para a tela raiz enviando para '/' */}
        <Button 
          title="Voltar para a Home (router.push)" 
          onPress={() => router.push('/')} 
          color="#10B981"
        />

        <View style={{ height: 10 }} />

        {/* Desempilha a tela atual do histórico usando router.back() */}
        <Button 
          title="Fechar Tela (router.back)" 
          onPress={() => router.back()} 
          color="#EF4444"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F1F5F9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: '#475569',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonGroup: {
    width: '100%',
    maxWidth: 300,
  },
});