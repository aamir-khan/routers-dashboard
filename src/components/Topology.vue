<template>
  <div>
      <div id="mynetwork" style="width: 1500px; height: 800px; border: 1px solid lightgray;"></div>
  </div>
</template>

<script>

import vis from 'vis';

export default {
  name: 'Topology',
  props: ['nodes', 'edges'],
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
    // axios.get('/routers/topology').then(function (response) {
    //   this.nodes = response.data.nodes;
    //   this.edges = response.data.edges;
    //   console.log(this.nodes);
    //   console.log(this.edges);
    // });
    // this.edges = this.nodes_edges.edges;
    // this.nodes = this.nodes_edges.nodes;
    this.container = document.getElementById('mynetwork');
    this.network = new vis.Network(this.container, this.graph_data, this.options);
  },
};
</script>

<style scoped>

</style>
