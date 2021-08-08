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
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { mapMutations, mapState } from 'vuex';

  export default {
    name: 'AddTodoFormModal',
    computed: {
      ...mapState({
        showAddTodoFormModal: (state) => state.showAddTodoFormModal
      })
    },
    methods: {
      ...mapMutations(['TOGGLE_MODAL']),
    }
  };
</script>

<style>
</style>
