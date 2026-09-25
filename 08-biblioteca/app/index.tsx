/**
 * ==============================================================================
 * TELA INICIAL (READ & DELETE)
 * ==============================================================================
 * READ (getDocs): Busca todos os documentos dentro de uma "coleção".
 * DELETE (deleteDoc): Apaga um documento específico baseado no seu ID.
 * ==============================================================================
 */

import { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert } from 'react-native';
// Importando as funções específicas do Firestore que precisamos aqui:
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Nossa conexão com o banco!
import { useRouter } from 'expo-router';

// Tipagem do nosso Livro
interface Livro {
  id: string;
  titulo: string;
  autor: string;
}

export default function Index() {
  const [livros, setLivros] = useState<Livro[]>([]);
  const router = useRouter();

  // Função READ (Ler/Buscar)
  async function buscarLivros() {
    // getDocs vai na coleção 'livros' do nosso banco 'db' e traz tudo
    const resultado = await getDocs(collection(db, 'livros'));

    const lista: Livro[] = [];

    // O Firebase retorna um formato especial, precisamos fazer um loop (forEach)
    // para extrair os dados e colocar no nosso array 'lista'
    resultado.forEach((documento) => {
      const livro = {
        id: documento.id, // O ID único gerado pelo Firebase
        titulo: documento.data().titulo, // .data() extrai os campos que salvamos
        autor: documento.data().autor
      };
      lista.push(livro);
    });

    setLivros(lista); // Atualiza a tela com os livros encontrados
  }

  // Função DELETE (Excluir)
  async function removerLivro(id: string) {
    // doc() aponta para um item específico: banco 'db', coleção 'livros', id 'X'
    // deleteDoc() vai lá e apaga esse item
    await deleteDoc(doc(db, 'livros', id));

    Alert.alert('Sucesso', 'Livro excluído!');
    
    // Após excluir, chamamos buscarLivros() para atualizar a lista na tela
    buscarLivros();
  }

  // Navega para a tela de edição, passando o ID do livro pela URL
  function editarLivro(id: string) {
    router.push({
      pathname: '/editar',
      params: { id: id }
    });
  }

  // useEffect faz com que buscarLivros() seja executada automaticamente 
  // assim que o aplicativo abre essa tela.
  useEffect(() => {
    buscarLivros();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Biblioteca</Text>

      <Button
        title="Adicionar Novo Livro"
        onPress={() => router.push('/cadastro')}
      />

      <FlatList
        data={livros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.livro}>
            <Text style={styles.textoForte}>Título: {item.titulo}</Text>
            <Text>Autor: {item.autor}</Text>

            <View style={styles.botoesAcao}>
              <Button title="Editar" color="#EAB308" onPress={() => editarLivro(item.id)} />
              <View style={{ width: 10 }} />
              <Button title="Excluir" color="#EF4444" onPress={() => removerLivro(item.id)} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#fff' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  livro: { padding: 15, marginTop: 15, backgroundColor: '#f3f4f6', borderRadius: 8, borderWidth: 1, borderColor: '#e5e7eb' },
  textoForte: { fontWeight: 'bold', fontSize: 16, marginBottom: 4 },
  botoesAcao: { flexDirection: 'row', marginTop: 10 }
});