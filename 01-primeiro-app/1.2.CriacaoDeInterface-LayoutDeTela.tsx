/*
    ### 1.2. Criação de Interface - Leiaute de Tela

Toda tela em React Native é montada a partir de uma hierarquia de 
componentes, onde o `View` funciona como contêiner (equivalente a 
uma `div` na web).

*/

import { View, Text, StyleSheet } from 'react-native';

export default function Tela() {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Meu App</Text>
      </View>
      <View style={styles.conteudo}>
        <Text>Conteúdo principal</Text>
      </View>
      <View style={styles.rodape}>
        <Text>Rodapé</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  cabecalho: { height: 60, backgroundColor: '#4A90D9' },
  conteudo: { flex: 1, padding: 16 },
  rodape: { height: 50, backgroundColor: '#eee' },
  titulo: { color: '#fff', fontSize: 18, padding: 16 },
});

/*
    Ponto de discussão: cada View é um "nó" dentro de uma árvore. 
    Assim como HTML tem um DOM, o React Native monta uma árvore de 
    componentes nativos por trás dos panos.
*/