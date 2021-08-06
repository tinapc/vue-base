import Vue from 'vue';
import Vuex from 'vuex';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import todoModule from './modules/todo';
import authModule from './modules/auth';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    todo: todoModule,
    auth: authModule,
  },
});

export default store;
