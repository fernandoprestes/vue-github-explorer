import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';

import router from './router';
import AxiosAdapter from './infra/http/AxiosAdapter';
import '@unocss/reset/tailwind.css';
import 'uno.css';
import 'animate.css';

import UserGatewayHttp from './infra/gateway/UserGatewayHttp';

const pinia = createPinia();
const app = createApp(App);

const httpClient = new AxiosAdapter();
const userGateway = new UserGatewayHttp(httpClient);

app.provide('userGateway', userGateway);

app.use(pinia);
app.use(router);

app.mount('#app');
