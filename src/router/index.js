import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import WorksPage from '../pages/WorksPage.vue';
import AboutPage from '../pages/AboutPage.vue';
import FuturePage from '../pages/FuturePage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/works',
    name: 'works',
    component: WorksPage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
  {
    path: '/future',
    name: 'future',
    component: FuturePage,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
