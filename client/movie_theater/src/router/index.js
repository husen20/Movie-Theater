import { createRouter, createWebHistory } from 'vue-router';
import Detail from '../views/Detail.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Dashboard from '../views/Dashboard.vue';
import Populer from '../views/Populer.vue';
import TvShow from '../views/TvShow.vue';
import TopAiring from '../views/TopAiring.vue';
import ForKids from '../views/ForKids.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },

    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/',
      name: 'home',
      component: Dashboard,
    },
    {
      path: '/populer',
      name: 'populer',
      component: Populer,
    },
    {
      path: '/tvshow',
      name: 'tvshow',
      component: TvShow,
    },
    {
      path: '/topairing',
      name: 'topairing',
      component: TopAiring,
    },
    {
      path: '/forkids',
      name: 'forkids',
      component: ForKids,
    },
  ],
});

router.beforeEach((to, from) => {
  if (localStorage.access_token) {
    if (to.name === 'login' || to.name === 'register') {
      return { name: 'home' };
    }
  } else {
    if (to.name === 'detail') {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Not Allowed please login first!',
        showConfirmButton: false,
        timer: 2000,
      });
      return { name: 'home' };
    }
  }
});

export default router;
