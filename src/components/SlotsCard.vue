<template>
  <div class="slot">
    <ul v-if="card">
      <li
        v-for="interface_ in card.interfaces"
        :key="interface_.id"
        :class="{ 'red': interface_.status === 'Down' }"
        v-b-tooltip.hover
        :title="interface_.name"
        v-on:click="navigate(interface_.connected_router)"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { slotColor: '' };
  },
  props: ['card'],
  methods: {
    navigate(connectedRouter) {
      if (connectedRouter) {
        this.$router.push({ name: 'routeritem', params: { id: connectedRouter } });
      } else {
        console.log('The port is not connected to any router.');
      }
    },
  },
};
</script>

<style scoped>
div {
  background: darkslategray;
  border-radius: 1px;
  display: inline-block;
  padding-bottom: 8px;
  margin-bottom: 20px;
}
.slot {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
}

div ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

div ul li {
  width: 10px;
  height: 10px;
  float: left;
  margin-top: 8px;
  margin-left: 6px;
  margin-right: 6px;
  background: rgba(149, 244, 118, 1);
}

.red {
  background: rgb(244, 118, 118);
}
</style>
