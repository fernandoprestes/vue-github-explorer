import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import HomePage from '~/views/HomePage/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
