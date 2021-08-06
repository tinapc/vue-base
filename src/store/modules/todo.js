export default {
  namespaced: true,
  state: () => ({
    todos: [
      { id: 1, title: 'This is post 1' },
      { id: 2, title: 'This is post 2' },
      { id: 3, title: 'This is post 3' },
    ],
  }),

  getters: {
    getTodos: (state) => state.todos,
  },

  actions: {},

  mutations: {},
};
