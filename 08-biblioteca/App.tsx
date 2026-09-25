/**
 - Crie o arquivo "firebaseConfig.ts" na rota raiz do projeto.
 
 * Aqui nós inicializamos a conexão com o banco de dados.
 * ATENÇÃO: Substitua os valores de 'firebaseConfig' pelas chaves reais que 
 * você copiou do Console do Firebase (Configurações do Projeto -> Seus Aplicativos).
 

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

// 1. Inicializa o aplicativo Firebase com as suas credenciais
const app = initializeApp(firebaseConfig);

// 2. Exporta a conexão do Firestore (nosso banco de dados) 
// Usaremos essa variável 'db' em todas as telas que precisarem acessar os dados.
export const db = getFirestore(app);

*/