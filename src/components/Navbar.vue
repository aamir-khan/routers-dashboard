<template>
  <b-navbar
    toggleable="md"
    type="dark"
    variant="dark"
  >

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <router-link
      to="/"
      exact
    >
      <b-navbar-brand>
        Home
      </b-navbar-brand>
    </router-link>
    <router-link
      to="/topology"
      exact
    >
      <b-navbar-brand>
        Topology
      </b-navbar-brand>
    </router-link>

    <b-collapse
      is-nav
      id="nav_collapse"
    >
    </b-collapse>

    <b-dropdown id="routers-dropdown" text="Routers" class="m-md-2 routers-dropdown">
        <b-dropdown-item
          v-for="routerItem in routersList"
          :key="routerItem.id"
        >
          <router-link :to="'/' + routerItem.id">
            {{routerItem.name}}
          </router-link>
        </b-dropdown-item>
      </b-dropdown>

  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    routersList: Array,
  },
};
</script>

<style scoped>
nav {
  margin-bottom: 10px;
  padding-top: 0.5rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
}
.routers-dropdown {
  margin: 0rem;
}
</style>
