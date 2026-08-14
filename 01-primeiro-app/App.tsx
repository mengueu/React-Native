/*
Até agora, nossas telas foram estáticas ou apenas exibiram informações
 fixas. Os aplicativos reais reagem às ações do usuário: contadores 
 mudam, formulários recebem texto, listas ganham novos itens e menus
  abrem e fecham.

Para criar componentes interativos que "lembram" de informações e
 **atualizam** a tela quando essas informações mudam, utilizamos o 
 **`useState`** (um *Hook* do React).

 ### O que é Estado (State)?

No React Native, o **estado** é a memória do componente.

Se você usar uma variável comum em JavaScript (`let contador = 0`), 
quando o valor mudar, o React **não saberá** que precisa redesenhar a 
tela. Já com o `useState`, sempre que o valor do estado é alterado, o 
React **re-renderiza** o componente para exibir a informação atualizada
ao usuário.
*/


import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  // Criamos o estado com o valor inicial "Hello World"
  const [texto, setTexto] = useState('Hello World');

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{texto}</Text>
      
      <Button 
        title="Clique Aqui" 
        onPress={() => setTexto('Botão Clicado!')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    fontSize: 20,
    marginBottom: 10
  },
});

/* 
  ### Regra de Ouro do `useState`
Nunca altere o estado diretamente!: Escrever `contador = contador + 1` ou `tarefas.push('Estudar')` **não funcionará** e não atualizará a tela.
Sempre utilize a função atualizadora (`set...`): Escreva `setContador(contador + 1)` ou `setTarefas([...tarefas, 'Estudar'])`.
*/