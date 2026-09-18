/**
 * EXERCÍCIO 1 - CONCEITO CHAVE:
 * Quando uma API retorna uma LISTA de itens (Array []), usamos o componente <FlatList>.
 * Para acessar dados aninhados no JSON (como a cidade dentro do objeto address), 
 * usamos a notação de ponto: item.address.city
 */

import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, ActivityIndicator, Alert } from 'react-native';

interface Usuario {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}

export default function Exercicio1() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [carregando, setCarregando] = useState(false);

  async function carregarUsuarios() {
    setCarregando(true);
    try {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
      const dados = await resposta.json();
      setUsuarios(dados);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar a lista de usuários.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício 1: Todos os Usuários</Text>
      
      <Button title="Buscar Usuários (GET)" onPress={carregarUsuarios} color="#3B82F6" />

      {carregando && <ActivityIndicator size="large" color="#3B82F6" style={{ marginTop: 20 }} />}

      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingVertical: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.name}</Text>
            <Text style={styles.info}>✉️ E-mail: {item.email}</Text>
            {/* Acessando propriedade aninhada no JSON */}
            <Text style={styles.info}>🏙️ Cidade: {item.address.city}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F1F5F9' },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
  card: { backgroundColor: '#FFF', padding: 15, borderRadius: 8, marginBottom: 10, borderWidth: 1, borderColor: '#E2E8F0' },
  nome: { fontSize: 18, fontWeight: 'bold', color: '#1E293B', marginBottom: 4 },
  info: { fontSize: 14, color: '#475569', marginTop: 2 },
});