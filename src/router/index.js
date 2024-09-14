import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from '../views/WelcomePage.vue';
import DreamFactory from '../views/DreamFactory.vue';
import CustomTrackCreation from '../views/CustomTrackCreation.vue';

const routes = [
  { path: '/', name: 'WelcomePage', component: WelcomePage },
  { path: '/dream-factory', name: 'DreamFactory', component: DreamFactory },
  { path: '/custom-track-creation', name: 'CustomTrackCreation', component: CustomTrackCreation },
  // Other routes
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
