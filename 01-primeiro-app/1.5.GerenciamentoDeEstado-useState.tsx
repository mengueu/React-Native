/*
    1.5. Gerenciamento de Estado com `useState`

Até agora, nossas telas foram estáticas ou apenas exibiram informações fixas. 
Os aplicativos reais reagem às ações do usuário: contadores mudam, formulários 
recebem texto, listas ganham novos itens e menus abrem e fecham.

Para criar componentes interativos que "lembram" de informações e **atualizam** 
a tela quando essas informações mudam, utilizamos o **`useState`** (um *Hook* do React).

    O que é Estado (State)?
No React Native, o **estado** é a memória do componente.
Se você usar uma variável comum em JavaScript (`let contador = 0`), 
quando o valor mudar, o React **não saberá** que precisa redesenhar 
a tela. Já com o `useState`, sempre que o valor do estado é alterado, 
o React **re-renderiza** o componente para exibir a informação atualizada ao usuário.

*/

/* 
    Sintaxe Básica:

A sintaxe do useState utiliza a desestruturação de um array em duas partes:

    const [valor, setValor] = useState(valorInicial);

1. **`valor`**: A variável que guarda o valor atual.
2. **`setValor`**: A função especial responsável por **atualizar** o valor e acionar o redesenho da tela.
3. **`valorInicial`**: O valor com o qual a variável vai começar.

### Exemplo Prático: Alterando Texto ao Clicar no Botão

Abaixo temos um exemplo simples que altera uma mensagem na tela quando o usuário pressiona o botão:

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
    Tipagem com TypeScript no `useState`

Na maioria dos casos (como `strings`, `booleans` ou `numbers`), o TypeScript consegue 
**inferir** o tipo do estado automaticamente a partir do valor inicial:

    const [contador, setContador] = useState(0); // O TS entende que é number
    const [ativo, setAtivo] = useState(true);   // O TS entende que é boolean

Porém, para arrays, objetos ou valores que começam como nulos, precisamos declarar a tipagem 
explicitamente entre <>:

    // Array de Strings
    const [tarefas, setTarefas] = useState<string[]>([]);

    // Objeto ou nulo
    type Usuario = { nome: string; idade: number };
    const [usuario, setUsuario] = useState<Usuario | null>(null);

    Regra de Ouro do `useState`

- Nunca altere o estado diretamente!

Escrever `contador = contador + 1` ou `tarefas.push('Estudar')` 
**não funcionará** e não atualizará a tela.

- Sempre utilize a função atualizadora (`set...`):

Escreva `setContador(contador + 1)` ou `setTarefas([...tarefas, 'Estudar'])`.

*/