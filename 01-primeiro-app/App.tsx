import { View, Text, Image, TextInput, Button, Switch, ScrollView } from 'react-native';
import { useState } from 'react';

export default function ComponentesDemo() {
  const [texto, setTexto] = useState('');
  const [ativo, setAtivo] = useState(false);

  return (
    <ScrollView style={{ padding: 16 }}> {/* Uma seção de Scroll, para rolar a tela */}
    {/* "ScrollView" = <div> (uma div que scrola)  */}
      
      <Text style={{ fontSize: 18 }}>Texto simples</Text>

      {/* Adicionando uma Imagem e estilizando */}
      <Image 
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 100, height: 100 }}
      /> 

      {/* Adicionando um input */}
      <TextInput 
        placeholder="Digite algo"
        value={texto}
        onChangeText={setTexto}
        style={{ borderWidth: 1, padding: 8, marginVertical: 8 }}
      />

      {/* Adicionando um botão tradicional com alert */}
      <Button title="Confirmar" onPress={() => alert("Texto digitado: " + texto)} /> 

      <Switch value={ativo} onValueChange={setAtivo} />
    </ScrollView>
  );
}