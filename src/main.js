import { createApp } from 'vue';

import router from './router';
import './main.css';

import App from './App.vue';
import QButton from '@/components/QButton.vue';

const app = createApp(App);

app.use(router);
app.component('q-button', QButton);
app.mount('#app');

// createApp(App).use(router).mount('#app');
