<template>
  <div>
    <Router :router="router" />
    <div v-if="loading">Loading....</div>
    <div v-else>
      <Topology :nodes=nodes :edges=edges />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Router from '@/components/Router.vue';
import Topology from '@/components/Topology.vue';

export default {
  components: { Router, Topology },
  data() {
    return {
      router: [], nodes: [], edges: [], error: null, loading: true,
    };
  },
  async mounted() {
    try {
      const routesResp = await axios.get(`/routers/${this.$route.params.id}`);
      const topologyResp = await axios.get(`/routers/topology/${this.$route.params.id}`);
      this.router = routesResp.data;
      this.nodes = topologyResp.data.nodes;
      this.edges = topologyResp.data.edges;
      this.loading = false;
    } catch (err) {
      this.error = err;
    }
  },
};
</script>
