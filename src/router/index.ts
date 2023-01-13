import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import HomePage from '~/views/HomePage/index.vue';
import FavoritesPage from '~/views/FavoritesPage/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/favorites',
    name: 'FavoritesPage',
    component: FavoritesPage,
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
