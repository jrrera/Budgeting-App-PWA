import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/budget',
      name: 'budget',
      component: () => import('./views/Budget.vue')
    },
    {
      path: '/transaction',
      name: 'transaction',
      component: () => import('./views/Transaction.vue')
    }
  ]
});
