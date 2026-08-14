/* Criando um projeto:
    -> npx create-expo-app@latest --template
    -> Nomear projeto
    -> Blank (TypeScript)
    
    Abrindo o projeto:
    -> npx expo start 
*/

/* 
    1. Recursos e Interfaces

Uma interface mobile bem projetada precisa considerar:

- Tamanho de tela variável
- Orientação (retrato/paisagem)
- Densidade de pixels
- Toque como principal forma de interação (diferente do mouse na web)

No React Native, isso se reflete em componentes que já vêm preparados para toque
(`TouchableOpacity`, `Pressable`) e em unidades de medida que não usam pixels fixos
como na web, e sim números que o RN converte automaticamente para a densidade do dispositivo.

*/

// ### 1.1. Componentes de Tela

import { View, Text, Image, TextInput, Button, Switch, ScrollView } from 'react-native';
import { useState } from 'react';

export default function ComponentesDemo() {
  const [texto, setTexto] = useState('');
  const [ativo, setAtivo] = useState(false);

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 18 }}>Texto simples</Text>

      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 50, height: 50 }}
      />

      <TextInput
        placeholder="Digite algo"
        value={texto}
        onChangeText={setTexto}
        style={{ borderWidth: 1, padding: 8, marginVertical: 8 }}
      />

      <Button title="Confirmar" onPress={() => alert('Clicado!')} />

      <Switch value={ativo} onValueChange={setAtivo} />
    </ScrollView>
  );
}

/* 
    Cada um desses componentes é renderizado como um componente **nativo real** 
da plataforma Android ou iOS, não é HTML "fingindo" ser nativo.

    > Nota: O componente `<Button/>` nativo possui suporte muito limitado a estilos 
(aceita basicamente apenas a cor do texto/fundo). Para criar botões totalmente customizados,
com bordas arredondadas e sombras, na prática usamos componentes como `<TouchableOpacity>` ou `<Pressable>`.

*/