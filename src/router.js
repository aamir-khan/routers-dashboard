import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import RouterItem from './views/RouterItem.vue';
import TopologyView from './views/TopologyView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/topology',
      name: 'topology',
      component: TopologyView,
    },
    {
      path: '/:id',
      name: 'routeritem',
      component: RouterItem,
    },
  ],
});
