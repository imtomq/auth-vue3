import { createApp } from 'vue';

import App from './App.vue';
import QButton from '@/components/QButton.vue';

import './main.css';
import router from './router';
import { plugin } from '@/services/http.js';

const app = createApp(App);

app.use(router);
app.use(plugin);

app.component('q-button', QButton);

app.mount('#app');
