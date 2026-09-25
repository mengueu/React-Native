/**
 * ==============================================================================
 * ARQUIVO DE LAYOUT GLOBAL (app/_layout.tsx)
 * ==============================================================================
 * O Expo Router utiliza este arquivo para definir a estrutura de navegação
 * principal do aplicativo. 
 * 
 * Ao utilizar o componente <Stack />, o Expo Router cria uma navegação em pilha
 * (uma tela por cima da outra) e gera automaticamente o cabeçalho no topo com 
 * o botão de "Voltar" nativo nas telas secundárias (Cadastro e Edição).
 * ==============================================================================
 */

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        // Define o estilo padrão do cabeçalho para TODAS as telas
        headerStyle: {
          backgroundColor: '#1E293B', // Cor de fundo do cabeçalho (Escuro / Slate)
        },
        headerTintColor: '#FFFFFF', // Cor dos textos e do botão de voltar
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
        headerTitleAlign: 'center', // Centraliza os títulos no Android
      }}
    >
      {/* 1. Tela Inicial (Lista de Livros) */}
      <Stack.Screen
        name="index"
        options={{
          title: 'Biblioteca',
        }}
      />

      {/* 2. Tela de Cadastro de Livros */}
      <Stack.Screen
        name="cadastro"
        options={{
          title: 'Cadastrar Novo Livro',
        }}
      />

      {/* 3. Tela de Edição de Livros */}
      <Stack.Screen
        name="editar"
        options={{
          title: 'Editar Livro',
        }}
      />
    </Stack>
  );
}