/**
 * EXERCÍCIO 2 - CONCEITO CHAVE:
 * Quando consultamos um recurso específico de um id (/users/1), a API NÃO devolve 
 * uma lista, mas sim um OBJETO individual {}. Por isso, não precisamos de FlatList.
 */

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, Alert } from 'react-native';

interface UsuarioUnico {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
  address: {
    city: string;
  };
}

export default function Exercicio2() {
  const [usuario, setUsuario] = useState<UsuarioUnico | null>(null);
  const [carregando, setCarregando] = useState(false);

  async function buscarUsuario1() {
    setCarregando(true);
    try {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const dados = await resposta.json();
      setUsuario(dados);
    } catch (error) {
      Alert.alert('Erro', 'Falha ao buscar detalhes do usuário 1.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício 2: Detalhes do Usuário #1</Text>
      
      <Button title="Carregar Perfil do ID 1" onPress={buscarUsuario1} color="#10B981" />

      {carregando && <ActivityIndicator size="large" color="#10B981" style={{ marginTop: 20 }} />}

      {usuario && (
        <View style={styles.cartaoPerfil}>
          <Text style={styles.nome}>{usuario.name}</Text>
          <Text style={styles.dado}>E-mail: {usuario.email}</Text>
          <Text style={styles.dado}>Telefone: {usuario.phone}</Text>
          <Text style={styles.dado}>Website: {usuario.website}</Text>
          <Text style={styles.dado}>Empresa: {usuario.company.name}</Text>
          <Text style={styles.dado}>Cidade: {usuario.address.city}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F1F5F9', alignItems: 'center' },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
  cartaoPerfil: { backgroundColor: '#FFF', padding: 20, borderRadius: 12, width: '100%', marginTop: 20, borderWidth: 1, borderColor: '#CBD5E1', elevation: 3 },
  nome: { fontSize: 22, fontWeight: 'bold', color: '#0F172A', marginBottom: 10 },
  dado: { fontSize: 15, color: '#334155', marginBottom: 6 },
});