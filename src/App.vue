<template>
  <v-app>
    <NarBar />

    <v-main>
      <router-view />
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

<style lang="scss">
@media only screen and (min-width: 960px) {
  .container {
    max-width: 1130px;
  }
}
</style>
