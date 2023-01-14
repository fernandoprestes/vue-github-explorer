import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import Home from '~/views/Home/index.vue';
import Favorites from '~/views/Favorites/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites,
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
