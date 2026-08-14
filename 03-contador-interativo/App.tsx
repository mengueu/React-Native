import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StyleSheet, Text, View, TouchableOpacity, Alert, StatusBar, Platform } from 'react-native';

export default function App() {
  // Criamos o estado do contador iniciando em 0
  const [count, setCount] = useState(0);

  // Função para incrementar (+1)
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Função para decrementar (-1) com validação
  const handleDecrement = () => {
    if (count <= 0) {
      Alert.alert(
        "Atenção!",
        "O contador não pode ter um valor menor que zero."
      );
    } else {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>

      {/* 1. Estrutura Base: Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Contador de Pessoas</Text>
      </View>

      <View style={styles.container}>
        
        {/* 2. Display de Valor */}
        <Text style={styles.label}>Pessoas no local</Text>
        <Text style={styles.counterText}>{count}</Text>

        {/* 3. Botões de Ação em Linha */}
        <View style={styles.buttonContainer}>
          
          {/* Botão de Subtrair */}
          <TouchableOpacity 
            style={[styles.button, styles.decrementButton]} 
            onPress={handleDecrement}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>

          {/* Botão de Somar */}
          <TouchableOpacity 
            style={[styles.button, styles.incrementButton]} 
            onPress={handleIncrement}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    backgroundColor: '#1E293B',
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    color: '#64748B',
    marginBottom: 10,
    fontWeight: '500',
  },
  counterText: {
    fontSize: 80, // Fonte grande e destacada
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 40,
  },
  // Container dos botões configurado para alinhar em linha
  buttonContainer: {
    flexDirection: 'row', // Posiciona os elementos lado a lado
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20, // Espaçamento entre os botões
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35, // Torna o botão perfeitamente circular
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  incrementButton: {
    backgroundColor: '#10B981', // Verde
  },
  decrementButton: {
    backgroundColor: '#EF4444', // Vermelho
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: -2, // Ajuste fino para alinhar verticalmente os caracteres '+' e '-'
  },
});