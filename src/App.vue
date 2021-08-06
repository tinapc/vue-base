<template>
  <div id="app">
    <Narbar />
    <router-view></router-view>
  </div>
</template>

<script>
  import Narbar from './components/Narbar';

  export default {
    name: 'App',
    components: { Narbar },
  };
</script>

<style></style>
