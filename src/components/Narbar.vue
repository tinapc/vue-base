<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
    >
      <div class="container">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse
          id="nav-collapse"
          is-nav
        >
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about-me">About Me</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="d-flex justify-content-end flex-grow-1">
            <b-nav-item-dropdown
              right
              v-if="isAuthenticated"
            >
              <template #button-content>
                <em>{{ user.name }}</em>
              </template>
              <b-dropdown-item :to="`/profile/${user.id}`">Profile</b-dropdown-item>
              <b-dropdown-item @click="toggleAuth(false)">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item
              @click="toggleAuth(true)"
              v-else
            >Login</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'Narbar',
    computed: {
      ...mapGetters({
        isAuthenticated: 'auth/isAuthenticated',
        user: 'auth/user'
      }),
    },
    methods: {
      ...mapActions({
        toggleAuth: 'auth/toggleAuth'
      })
    }
  };
</script>

<style>
</style>
