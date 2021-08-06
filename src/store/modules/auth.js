export default {
  namespaced: true,
  state: () => ({
    user: {
      id: 1,
      name: 'Hung Nguyen',
      age: 40,
    },
    isAuthenticated: false,
  }),

  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    user: (state) => state.user,
  },

  actions: {
    toggleAuth({ commit }, authStatus) {
      commit('SET_AUTH', authStatus);
    },
  },

  mutations: {
    SET_AUTH(state, authStatus) {
      state.isAuthenticated = authStatus;
    },
  },
};
