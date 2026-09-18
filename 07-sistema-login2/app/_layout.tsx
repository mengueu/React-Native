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
      
      <Stack.Screen name="exercicio1" options={{ title: 'Exercício 1 - Lista' }} />
      <Stack.Screen name="exercicio2" options={{ title: 'Exercício 2 - Perfil' }} />
      <Stack.Screen name="exercicio3" options={{ title: 'Exercício 3 - Novo Post' }} />
    </Stack>
  );
}