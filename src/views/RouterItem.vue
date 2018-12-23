<template>
  <div>
    <Server :router="router" />
    <div v-if="loading">Loading....</div>
    <div v-else>
      <Topology :nodes=nodes :edges=edges />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Server from '@/components/Server.vue';
import Topology from '@/components/Topology.vue';

export default {
  components: { Server, Topology },
  data() {
    return {
      router: [], nodes: [], edges: [], true: false, error: null, loading: true,
    };
  },
  async mounted() {
    try {
      const res = await axios.get(`/routers/${this.$route.params.id}`);
      this.router = res.data;
    } catch (err) {
      this.error = err;
    }
    try {
      const res = await axios.get(`/routers/topology/${this.$route.params.id}`);
      this.nodes = res.data.nodes;
      this.edges = res.data.edges;
      this.loading = false;
    } catch (err) {
      this.error = err;
    }
  },
};
</script>
