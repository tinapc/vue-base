<template>
  <div class="container mt-5">
    <div class="display-5">Home page</div>
    <ul>
      <li
        v-for="todo in getTodos"
        :key="todo.id"
      >
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'Home',
    computed: {
      ...mapGetters({
        getTodos: 'todo/getTodos'
      }),
    },
  };
</script>

<style>
</style>
