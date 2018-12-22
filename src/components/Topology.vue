<template id="mytmp">
    <div>
        <div id="mynetwork"></div>
    </div>
</template>

<script>

import axios from 'axios';
import vis from 'vis';

export default {
  name: 'Topology',
  data() {
    return {
      nodes: [],
      edges: [],
      options: {
        manipulation: {
          enabled: true,
          initiallyActive: true,
          addEdge(edgeData, callback) {
            callback(edgeData);
          },
        },
        nodes: {
          physics: false,
        },
      },
      container: '',
      network: null,
    };
  },

  computed: {
    graph_data() {
      return {
        nodes: this.nodes,
        edges: this.edges,
      };
    },
  },

  mounted() {
    axios.get('/routers/topology').then(function (response) {
      this.nodes = response.data.nodes;
      this.edges = response.data.edges;
      console.log(this.nodes);
      console.log(this.edges);
    });
    this.container = document.getElementById('mynetwork');
    this.network = new vis.Network(this.container, this.graph_data, this.options);
  },
};
</script>

<style scoped>

#mynetwork {
  width: 1200px;
  height: 600px;
  border: 1px solid lightgray;
}
</style>
