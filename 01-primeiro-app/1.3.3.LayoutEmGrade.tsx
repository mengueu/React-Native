import { StyleSheet, Text, View, FlatList } from 'react-native';

const dados = [1, 2, 3, 4, 5, 6];

export default function App() {
  return (
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
  );
}

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    backgroundColor: '#ddd',
    margin: 4 
  },
});