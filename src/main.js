import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueRoute from 'vue-router';
import { routes } from './routes';
import App from './App.vue';
import store from './store';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRoute);

const router = new VueRoute({
  mode: 'history',
  routes,
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app');
