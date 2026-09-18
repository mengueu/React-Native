/*
# AULA 04 - SISTEMA DE LOGIN E PASSAGEM DE PARÂMETROS

# 1. CONFIGURANDO O EXPO ROUTER DO ZERO

- Passo 1.1: Criar o projeto com template TypeScript limpo
npx create-expo-app@latest 07-sistema-login --template blank-typescript

- Entrar na pasta do projeto recém-criado
cd 07-sistema-login

- Passo 1.2: Instalar o Expo Router e dependências essenciais
# O trecho "-- --legacy-peer-deps" garante compatibilidade de dependências
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar -- --legacy-peer-deps

- Passo 1.5: Remover o App.tsx padrão (o Expo Router assume a entrada do app)
# No Windows: del App.tsx | Mac/Linux: rm App.tsx

- Passo 1.6: Iniciar o projeto limpando o cache acumulado
npx expo start --clear
*/

/*
# Configurações de Sistema (package.json e app.json):

package.json:
- Alteramos o "main" para "expo-router/entry". 
Com isso, o arquivo App.tsx deixa de ser o inicializador e o 
Expo Router assume o controle da navegação.

app.json:

"scheme": "07-sistema-login",
"experiments": {"typedRoutes": true},

- scheme: Identificador único para Deep Linking (abrir o app via links como 07-sistema-login://).
- typedRoutes: Ativa validações automáticas do TypeScript para rotas registradas.
*/