import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const dados = ["Bruno", "Miguel", "Vinicius", "Neymar", "Gabigol", "Brazão"];

export default function App() {
  return (
    <SafeAreaView>
      <FlatList
        data={dados}
        numColumns={3}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <View style={styles.box}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    backgroundColor: '#ddd',
    margin: 4, 
    alignItems: 'center',
    justifyContent: 'center'
  },
});