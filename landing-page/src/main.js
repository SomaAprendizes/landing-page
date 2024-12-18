import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css';

createApp(App)
  .use(router) // Adiciona o router à aplicação
  .mount('#app');
