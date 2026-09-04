/**
 * AULA 03: CONCEITOS DE NAVEGAÇÃO MOBILE & EXPO ROUTER
 * ==============================================================================
 * POR QUE NAVEGAÇÃO MOBILE É DIFERENTE DA WEB?
 * Em sites, o navegador web lida nativamente com a URL e o botão "Voltar".
 * No Mobile, não existe navegador padrão integrado. Precisamos de uma biblioteca
 * para gerenciar a transição entre telas, animações e o histórico de navegação.
 * 
 * ANALOGIA DO TRÂNSITO:
 * A biblioteca de navegação é o "sistema de trânsito" do aplicativo: ela define 
 * como o usuário chega de um ponto A a um ponto B, o que acontece quando clica 
 * em voltar e o que fica guardado na memória (pilha de telas).
 * 
 * O PAPEL DO ARQUIVO _layout.tsx:
 * Este arquivo é OBRIGATÓRIO. Ele atua como o "invólucro" (wrapper) de todas as
 * telas da pasta. Ao retornar o <Stack />, definimos que a navegação padrão será
 * em formato de PILHA (uma tela é empilhada em cima da outra).
 * ==============================================================================
 */

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#1E293B' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      {/* 
        O <Stack /> renderizará automaticamente todas as rotas criadas dentro
        da pasta app/ (index, detalhes, etc.) com animações nativas de transição.
      */}
    </Stack>
  );
}