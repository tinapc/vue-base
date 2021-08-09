<template>
  <v-container>
    <h1 class="text-lg-h4 pt-15 mb-8">My ToDo List</h1>
    <v-btn
      class="mb-6"
      color="primary"
      dark
      @click.stop="TOGGLE_MODAL('showAddTodoFormModal')"
    >
      Add Todo
    </v-btn>
    <v-row>
      <v-col
        v-for="todo in getTodos"
        :key="todo.id"
        md="4"
        xs="12"
      >
        <v-card
          class="pa-6"
          :class="todo.completed ? 'red lighten-4' : ''"
        >
          <v-card-text>{{ todo.title }}</v-card-text>
          <v-card-actions>
            <v-checkbox
              :input-value="todo.completed"
              @change="toggleTodo(todo.id)"
            ></v-checkbox>
            <v-btn
              fab
              small
              class="text-capitalize"
              text
              @click="deleteTodo(todo.id)"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <AddTodoFormModal />
  </v-container>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex';
  import AddTodoFormModal from '../views/AddTodoFormModal';

  export default {
    name: 'Home',
    components: { AddTodoFormModal },
    data () {
      return {
        addTodoFormModal: false,
      };
    },
    computed: {
      ...mapGetters({
        getTodos: 'todo/getTodos'
      }),
    },
    methods: {
      ...mapMutations(['TOGGLE_MODAL']),
      ...mapActions({
        toggleTodo: 'todo/toggleTodo',
        deleteTodo: 'todo/deleteTodo'
      })
    },
  };
</script>

<style>
</style>
