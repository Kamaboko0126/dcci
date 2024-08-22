import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/HomePage.vue'),
  },
  {
    path:'/journals',
    name: 'journals',
    component: () => import('@/components/JournalsPage/'),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
