// Isso é muito usado para botões flutuantes, notificação, etc.

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tela() {
  return (
      <SafeAreaView style={ styles.container }>
        <Text> Tela com um Botão Flutuante</Text>
        <View style={ styles.botao_flutuante }>
          <Text style={ styles.texto }>+</Text>
        </View>
      </SafeAreaView>    
  );
}

const styles = StyleSheet.create({
	container: { 
		flex: 1
	},
	botao_flutuante: {
	  position: 'absolute',
	  bottom: 20,
	  right: 20,
	  backgroundColor: '#4A90D9',
	  borderRadius: 30,
	  padding: 16,
	},
	texto: {
		color: '#fff'
	}
});