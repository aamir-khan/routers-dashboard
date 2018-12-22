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
  </b-navbar>
</template>

<style scoped>
nav {
  margin-bottom: 30px;
}
</style>
