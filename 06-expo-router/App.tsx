/*
  # 1. Criação do projeto limpo com TypeScript (template blank)
  npx create-expo-app@latest 06-expo-router --template blank-typescript

  # 2. Entrar na pasta do projeto
  cd 06-expo-router

  # 3. Instalação do Expo Router e dependências essenciais
  npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

  # 4. Apagar o arquivo App.tsx padrão da raiz (o Expo Router gerencia a entrada)
  # No Windows: del App.tsx | No Mac/Linux: rm App.tsx

  # 5. Iniciar limpando o cache para registrar as novas configurações
  npx expo start --clear
*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
2. Configuração de Arquivos de Sistema (package.json e app.json)

## Substitua as propriedades indicadas nos seus arquivos 
de configuração da raiz do projeto: 

package.json:
{
  "main": "expo-router/entry",
}
  CONCEITO: PONTO DE ENTRADA (main)
    Por padrão, o Expo executa o 'App.tsx'. Ao usar Expo Router, alteramos o 'main'
    para 'expo-router/entry'. Isso avisa ao motor do aplicativo que a biblioteca de 
    navegação deve assumir o controle total da inicialização.

    
app.json:
{
  "scheme": "06-expo-router"
}
  CONCEITO: SCHEME (Deep Linking)
      Identificador único para abrir o app via links externos no navegador ou e-mail 
      (ex: 06-expo-router://detalhes).
{
  "typedRoutes": true
}
  CONCEITO: TYPED ROUTES
      Faz o TypeScript validar automaticamente os caminhos do router (ex: router.push('/detalhes')),
      gerando erro de compilação caso você tente navegar para uma rota inexistente.
*/