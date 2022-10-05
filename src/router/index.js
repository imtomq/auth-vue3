import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import News from '../views/News.vue';

import NotFound from '../views/NotFound.vue';
import Forbidden from '../views/Forbidden.vue';

import Login from '../views/Login.vue';

const SUB_PATH = process.env.NODE_ENV === 'production' ? '/' : 'development';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/news',
    name: 'News',
    component: News,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/403',
    name: 'Forbidden',
    component: Forbidden,
    meta: {
      requiresAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(SUB_PATH),
  routes,
});

router.beforeEach(async (to, from, next) => {
  console.log('to: ', to, 'from: ', from);
  if (to.meta.requiresAuth) next('/403');
  else next();
});

export default router;
