/**
 * ==============================================================================
 * TELA HOME (app/home.tsx)
 * ==============================================================================
 * TEORIA & CONCEITOS:
 * 1. LENDO PARÂMETROS (useLocalSearchParams):
 *    Utilizamos o hook 'useLocalSearchParams()' para extrair os dados repassados
 *    pela rota anterior (ex: const { email, senha } = useLocalSearchParams()).
 * 
 * 2. REGRA DE OURO DO ROTEAMENTO: TUDO CHEGA COMO STRING!
 *    Como a navegação do Expo Router é baseada em URLs internas, QUALQUER parâmetro
 *    enviado (números, booleanos) será recebido como string.
 *    Exemplo: 
 *    const { idade } = useLocalSearchParams(); // "25" (string)
 *    Para usar como número: const idadeNum = Number(idade);
 * ==============================================================================
 */

import { View, Text, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Home() {
  // Captura os parâmetros enviados via rota
  const params = useLocalSearchParams();
  const router = useRouter();

  // Tratamento caso o usuário tenha vindo da tela de cadastro ou de login
  const email = params.email as string;
  const senha = params.senha as string;
  const nome = params.nome as string;

  // DESAFIO 2: Função para mascarar a senha com asteriscos (***)
  const ocultarSenha = (textoSenha: string) => {
    return textoSenha ? '*'.repeat(textoSenha.length) : '';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo{nome ? `, ${nome}` : ''}!</Text>
      
      <View style={styles.card}>
        <Text style={styles.texto}><Text style={styles.bold}>E-mail:</Text> {email}</Text>
        {/* Exibindo a senha mascarada por motivos de segurança */}
        <Text style={styles.texto}>
          <Text style={styles.bold}>Senha:</Text> {ocultarSenha(senha)}
        </Text>
      </View>

      {/* DESAFIO 3: Botão Voltar utilizando router.back() */}
      <View style={styles.buttonContainer}>
        <Button 
          title="Voltar / Sair" 
          color="#EF4444" 
          onPress={() => router.back()} 
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
    backgroundColor: '#fff',
    padding: 24,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#111827',
  },
  card: {
    backgroundColor: '#F3F4F6',
    padding: 20,
    borderRadius: 8,
    width: '100%',
    marginBottom: 20,
  },
  texto: {
    fontSize: 16,
    marginBottom: 8,
    color: '#374151',
  },
  bold: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
  },
});