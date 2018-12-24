import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import RouterItem from './views/RouterItem.vue';
import TopologyView from './views/TopologyView.vue';
import Login from './components/Login.vue';
import store from './store.js';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/topology',
      name: 'topology',
      component: TopologyView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/:id',
      name: 'routeritem',
      component: RouterItem,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next('/login');
  } else {
    next();
  }
});

export default router;
