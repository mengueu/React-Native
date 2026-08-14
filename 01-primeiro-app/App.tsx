/* 
Ao desenvolver para dispositivos móveis modernos, nos deparamos 
com telas que possuem cantos arredondados, entalhes de câmera e 
barras de navegação por gestos. Se não tratarmos esses elementos, nosso 
aplicativo pode ter conteúdos "escondidos" atrás dessas áreas.

Para resolver isso, utilizamos o conceito de Área Segura (Safe Area).

Atenção:** O componente `SafeAreaView` nativo do React Native foi 
descontinuado/depreciado por não oferecer suporte completo ao Android. 
A comunidade e a documentação oficial do Expo/React Native recomendam 
o uso da biblioteca **`react-native-safe-area-context`**.

Instalação para projetos Expo: npx expo install react-native-safe-area-context
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Importação da biblioteca
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tela() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Meu App</Text>
      </View>

      <View style={styles.conteudo}>
        <Text>Conteúdo principal</Text>
      </View>

      <View style={styles.rodape}>
        <Text>Rodapé - O conteúdo aqui (e no cabeçalho) nunca ficará coberto pela barra de status!</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  cabecalho: { height: 60, backgroundColor: '#4A90D9' },
  conteudo: { flex: 1, padding: 16 },
  rodape: { height: 50, backgroundColor: '#eee' },
  titulo: { color: '#fff', fontSize: 18, padding: 16 },
});