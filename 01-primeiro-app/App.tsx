import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// A função "export default" significa que não precisa chamá-la posteriormente"
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <Text style={styles.text}>Primeiro App!</Text>
      <StatusBar style="auto" /> {/* Barra de status (Bateria, Horário) */}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, // Deixa a caixa flexível, ocupa espaço (Teste apagar).
    backgroundColor: '#0f0',
    alignItems: 'center', // Centralizando horizontalmente
    justifyContent: 'center', // Centralizando verticlamente
  },
  text: {
    fontSize: 20
  }
}); 