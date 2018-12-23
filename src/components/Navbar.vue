<template>
  <b-navbar
    toggleable="md"
    type="dark"
    variant="dark"
  >

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <router-link v-if="isLoggedIn"
      to="/"
      exact
    >
      <b-navbar-brand>
        Home
      </b-navbar-brand>
    </router-link>
    <router-link v-if="isLoggedIn"
      to="/topology"
      exact
    >
      <b-navbar-brand>
        Topology
      </b-navbar-brand>
    </router-link>

    <b-dropdown id="routers-dropdown" text="Routers" class="m-md-2 routers-dropdown"
                v-if="isLoggedIn">
      <b-dropdown-item
        v-for="routerItem in routersList"
        :key="routerItem.id"
      >
        <router-link :to="'/' + routerItem.id">
          {{routerItem.name}}
        </router-link>
      </b-dropdown-item>
    </b-dropdown>
  <b-collapse
    is-nav
    id="nav_collapse"
  >
  </b-collapse>

    <div v-if="isLoggedIn">
      <a @click="logout">
        <b-navbar-brand class="logout-button">
          Logout
        </b-navbar-brand>
      </a>
    </div>
    <div v-else>
      <router-link
        to="/login"
        exact
      >
        <b-navbar-brand>
          Login
        </b-navbar-brand>
      </router-link>
    </div>
  </b-navbar>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Navbar',
  methods: {
    logout() {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login');
        });
    },
  },
  data() {
    return { routersList: [] };
  },
  computed: {
    isLoggedIn() { return this.$store.getters.isLoggedIn; },
  },
  created() {
    this.$http.interceptors.response.use(undefined, err => new Promise(function (resolve, reject) {
      if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
        this.$store.dispatch('logout');
      }
      throw err;
    }));
  },
  async mounted() {
    try {
      const res = await axios.get('/routers');
      this.routersList = res.data;
    } catch (err) {
      this.error = err;
    }
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
.logout-button {
  cursor:pointer;
}
</style>
