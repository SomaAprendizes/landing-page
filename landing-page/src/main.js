// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa o router

createApp(App)
  .use(router) // Adiciona o router à aplicação
  .mount('#app');
