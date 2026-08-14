import { View, Text, StyleSheet } from 'react-native';

export default function Tela() {
  {/* O "return" não permite mais de uma "View" para retornar,
    por isso colocamos várias "Views" dentro da view pai */}
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