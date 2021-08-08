import Vue from 'vue';
import Vuex from 'vuex';

import todoModule from './modules/todo';
import authModule from './modules/auth';

import state from './states';
import * as mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  modules: {
    todo: todoModule,
    auth: authModule,
  },
});

export default store;
