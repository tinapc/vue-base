<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <v-btn text>CodeWorld</v-btn>
    <v-badge
      class="ml-4"
      color="green"
      :content="totalCompleted.length"
    >Completed</v-badge>
    <v-spacer></v-spacer>
    <v-btn text>Login</v-btn>
    <v-btn text>Registered</v-btn>
  </v-app-bar>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'NarBar',
    computed: {
      ...mapGetters({
        totalCompleted: 'todo/getTodoCompleted',
      })
    }
  };
</script>

<style>
</style>
