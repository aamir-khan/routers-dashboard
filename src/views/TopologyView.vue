<template>
  <Topology />
</template>

<script>
import axios from 'axios';
import Topology from '@/components/Topology.vue';

export default {
  components: { Topology },
  data() {
    return {};
  },
  // async mounted() {
  //   try {
  //     const res = await axios.get('/routers/topology');
  //     this.nodes = res.data.nodes;
  //     this.edges = res.data.edges;
  //   } catch (err) {
  //     this.error = err;
  //   }
  // },
};
</script>
