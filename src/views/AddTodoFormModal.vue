<template>
  <v-dialog
    v-model="showAddTodoFormModal"
    persistent
    max-width="600px"
  >
    <v-card>
      <v-card-title>
        <span class="text-h5">Add Todo</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="todo.title"
                label="Name"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue darken-1"
          text
          @click="TOGGLE_MODAL('showAddTodoFormModal')"
        >
          Close
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="saveTodo"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { mapMutations, mapState } from 'vuex';
  import uniquid from 'uniquid';
  import _clone from 'lodash/clone';

  export default {
    name: 'AddTodoFormModal',
    data () {
      return {
        todo: { title: '', completed: false }
      };
    },
    computed: {
      ...mapState({
        showAddTodoFormModal: (state) => state.showAddTodoFormModal
      })
    },
    methods: {
      ...mapMutations(['TOGGLE_MODAL']),
      saveTodo () {
        const cloneTodo = _clone(this.todo);
        cloneTodo.id = uniquid();
        this.$store.dispatch('todo/addTodo', cloneTodo);
        this.todo.title = '';
      }
    }
  };
</script>

<style>
</style>
