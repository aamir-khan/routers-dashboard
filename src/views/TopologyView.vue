<template>
  <div v-if="loadingRoutersData">Loading....</div>
  <div v-else>
    <Topology :nodes=nodes :edges=edges :displaySize=displaySize />
  </div>
</template>

<script>
import axios from 'axios';
import Topology from '@/components/Topology.vue';

export default {
  components: { Topology },
  data() {
    return {
      loadingRoutersData: true, nodes: [], edges: [], displaySize: 'fullScreen',
    };
  },
  async mounted() {
    try {
      const res = await axios.get('/routers/topology');
      this.nodes = res.data.nodes;
      this.edges = res.data.edges;
      this.loadingRoutersData = false;
    } catch (err) {
      this.error = err;
    }
  },
};
</script>
