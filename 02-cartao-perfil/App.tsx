import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, StatusBar,} from 'react-native';

export default function App() {
  // Função disparada ao clicar no botão "Seguir"
  const handleFollow = () => {
    Alert.alert(
      'Sucesso!',                                  // título do alerta
      'Você está seguindo Miguel🎉',          // mensagem
      [{ text: 'OK' }]                              // botões do alerta
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1E3A5F" />

      <View style={styles.header}>
        <Text style={styles.headerText}>Cartão Perfil</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://media.licdn.com/dms/image/v2/D5603AQEki9p2Kl3liQ/profile-displayphoto-scale_200_200/B56Z_t6rurKoAc-/0/1786403013139?e=1788393600&v=beta&t=v6AbvizWHQOK_HFvw0RSBeqHAZ7uUx3HM1eprEhyfOE' }}
            style={styles.avatar}
          />

          <Text style={styles.name}>Miguel</Text>

          <Text style={styles.bio}>
            Estudante de Desenvolvimento de Sistemas e integrante da
            equipe de robótica SESI MEGASNAKES.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={handleFollow}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Seguir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },
  header: {
    backgroundColor: '#1E3A5F',
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,          // sombra no Android
    shadowColor: '#000',   // sombra no iOS (4 props abaixo)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,      // metade da largura/altura = círculo perfeito
    borderWidth: 3,
    borderColor: '#1E3A5F',
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1E2A38',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#5A6472',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#1E3A5F',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 24,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});