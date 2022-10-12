import { createApp } from 'vue';
import { createPinia } from 'pinia'

import App from './App.vue';
import QButton from '@/components/QButton.vue';

import './main.css';
import router from './router';
import { httpPlugin } from '@/services/http.js';

const app = createApp(App);
const pinia = createPinia()

app.use(pinia)
app.use(router);
app.use(httpPlugin);

app.component('q-button', QButton);

app.mount('#app');
