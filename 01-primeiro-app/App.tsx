import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Importação da biblioteca
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tela() {
  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'column' }}>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
        <Text>Item 3</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
        <Text>Item 3</Text>
      </View>
    </SafeAreaView>
  );
}