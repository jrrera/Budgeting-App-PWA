import Vue from 'vue';
import { init, captureMessage } from '@sentry/browser';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

// Set up error monitoring.
init({
  dsn: 'https://7086662d093e486abb6317bf33e630cd@sentry.io/1398069'
});

captureMessage('Hello, world!');

throw new Error('this is a test for Sentry!');
