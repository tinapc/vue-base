<template>
  <v-app>
    <NarBar />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
  import NarBar from './components/Narbar.vue';

  export default {
    name: 'App',
    components: { NarBar },
    data: () => ({
      //
    }),
  };
</script>
