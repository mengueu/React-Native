/**
 * ==============================================================================
 * ESTRUTURA DE PASTAS E LAYOUT MESTRE (app/_layout.tsx)
 * ==============================================================================
 * A pasta app/ é o coração do projeto. O arquivo _layout.tsx define como as
 * telas filhas serão empilhadas na navegação.
 * 
 * ESTRUTURA CRIADA:
 * app/
 * ├── _layout.tsx  -> Configura a navegação Stack (pilha de telas)
 * ├── index.tsx    -> Tela de Login (rota raiz /)
 * ├── cadastro.tsx -> Tela de Criar Conta (rota /cadastro)
 * └── home.tsx     -> Tela Principal (rota /home) que recebe os parâmetros
 */

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#1E293B' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Login' }} />
      <Stack.Screen name="cadastro" options={{ title: 'Criar Conta' }} />
      <Stack.Screen name="home" options={{ title: 'Início', headerLeft: () => null }} />
    </Stack>
  );
}