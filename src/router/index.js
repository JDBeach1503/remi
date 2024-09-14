import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from '../views/WelcomePage.vue';
import DreamFactory from '../views/DreamFactory.vue';

const routes = [
  { path: '/', name: 'WelcomePage', component: WelcomePage },
  { path: '/dream-factory', name: 'DreamFactory', component: DreamFactory },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
