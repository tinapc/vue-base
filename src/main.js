import Vue from 'vue';

import VueRoute from 'vue-router';
import { routes } from './routes';

import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.use(VueRoute);

const router = new VueRoute({
  mode: 'history',
  routes,
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  vuetify,
  router
}).$mount('#app');
