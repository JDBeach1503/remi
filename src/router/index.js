import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from '../views/WelcomePage.vue';
import DreamFactory from '../views/DreamFactory.vue';
import CustomTrackCreation from '../views/CustomTrackCreation.vue';
import PlaybackControls from '../views/PlaybackControls.vue';

const routes = [
  { path: '/', name: 'WelcomePage', component: WelcomePage },
  { path: '/dream-factory', name: 'DreamFactory', component: DreamFactory },
  { path: '/custom-track-creation', name: 'CustomTrackCreation', component: CustomTrackCreation },
  {
    path: '/playback-controls/:coverImage',
    name: 'PlaybackControls',
    component: PlaybackControls,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
