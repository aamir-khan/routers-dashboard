<template>
  <b-card
    bg-variant="dark"
    text-variant="white"
    :title="name"
  >
    <router-link :to="'/' + id">
      <b-button variant="primary">{{ name }}
      </b-button>
    </router-link>
  </b-card>
</template>

<script>
export default {
  props: ["id", "name"]
};
</script>

<style scoped>
.card {
  margin-bottom: 20px !important;
  text-align: center;
  padding: 20px;
}
</style>
