export default {
  namespaced: true,
  state: () => ({
    todos: [
      { id: 1, title: 'This is post 1', completed: true },
      { id: 2, title: 'This is post 2', completed: false },
      { id: 3, title: 'This is post 3', completed: false },
      { id: 4, title: 'This is post 4', completed: false },
    ],
  }),

  getters: {
    getTodos: (state) => state.todos,
    getTodoCompleted: (state) => state.todos.filter((todo) => todo.completed),
  },

  actions: {
    toggleTodo({ commit }, todoId) {
      commit('MARK_COMPLETE', todoId);
    },
    deleteTodo({ commit }, todoId) {
      commit('DELETE_TODO', todoId);
    },
  },

  mutations: {
    MARK_COMPLETE(state, todoId) {
      state.todos.map((todo) => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      });
    },

    DELETE_TODO(state, todoId) {
      const newTodos = state.todos.filter((todo) => todo.id !== todoId);
      state.todos = newTodos;
    },
  },
};
