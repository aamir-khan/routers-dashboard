<template>
  <div class="topology">
    <div id="mynetwork" :class="displaySize"></div>
  </div>
</template>

<script>

import vis from 'vis';

export default {
  name: 'Topology',
  props: {
    nodes: Array,
    edges: Array,
    displaySize: String,
  },
  data() {
    return {
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
    this.container = document.getElementById('mynetwork');
    this.network = new vis.Network(this.container, this.graph_data, this.options);
  },
};
</script>

<style scoped>

#mynetwork {
  width: 1112px;
  height: 600px;
  border: 1px solid lightgray;
  margin-top: 5px;
}
.fullScreen {
  height: 800px!important;
}
</style>
