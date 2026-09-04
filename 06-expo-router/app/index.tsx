/**
 * AULA 03: ROTA RAIZ (app/index.tsx)
 * ==============================================================================
 * ROTEAMENTO BASEADO EM ARQUIVOS (File-based Routing):
 * No Expo Router, NÃO existe um arquivo central para registrar rotas manualmente.
 * Cada arquivo criado dentro da pasta 'app/' torna-se automaticamente uma rota!
 * O arquivo 'index.tsx' é especial e representa a rota principal ou inicial ('/').
 * 
 * DEPENDÊNCIAS USADAS INTERNAMENTE PELO EXPO ROUTER:
 * - expo-router: Biblioteca principal responsável pela navegação por arquivos.
 * - react-native-screens & react-native-safe-area-context: Otimizam a renderização 
 *   nativa no Android/iOS e protegem o conteúdo de passar por baixo do notch ou barra de status.
 * - expo-linking: Permite ler e responder a URLs externas (Deep Links).
 * - expo-constants & expo-status-bar: Utilitários para controlar a barra de status.
 * ==============================================================================
 */

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function Home() {
  // Hook de navegação programática
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aula 03 - Tela Inicial</Text>
      <Text style={styles.subtitle}>Bem-vindo ao Expo Router!</Text>

      {/* 
        OPÇÃO 1: NAVEGAÇÃO COM <Link>
        - Quando usar: Ideal para interações simples estilo "link de texto" ou navegação direta.
        - Funcionamento: Funciona de forma declarativa, sem necessidade de funções JS extras.
      */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Opção 1: Usando componente &lt;Link&gt;</Text>
        <Link href="/detalhes" style={styles.linkText}>
          Ir para Detalhes (via Link)
        </Link>
      </View>

      {/* 
        OPÇÃO 2: NAVEGAÇÃO COM useRouter()
        - Quando usar: Ideal para navegação programática/condicional (ex: acionada após 
          validar formulário, realizar login ou processar dados).
        - Funcionamento: Dispara o método router.push('/rota') via evento no botão.
      */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Opção 2: Usando Hook useRouter()</Text>
        <Button 
          title="Ir para Detalhes (via useRouter)" 
          onPress={() => {
            // Exemplo de lógica antes de navegar:
            console.log("Executando verificação antes da navegação...");
            router.push('/detalhes');
          }} 
          color="#3B82F6"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F8FAFC',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748B',
    marginBottom: 30,
  },
  section: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 15,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#475569',
    marginBottom: 10,
  },
  linkText: {
    fontSize: 16,
    color: '#2563EB',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});