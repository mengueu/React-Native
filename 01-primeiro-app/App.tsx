import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: '#FF5733' }]} />
      <View style={[styles.box, { backgroundColor: '#33FF57' }]} />
      <View style={[styles.box, { backgroundColor: '#3357FF' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                    // Ocupa 100% da altura da tela
    flexDirection: 'column',    // Direção dos itens: 'column' (padrão) ou 'row'
    justifyContent: 'center',   // Alinhamento no eixo PRINCIPAL
    alignItems: 'center',       // Alinhamento no eixo CRUZADO
    backgroundColor: '#F5F5F5',
  },
  box: {
    width: 60,
    height: 60,
    margin: 8,
    borderRadius: 8,
  },
});