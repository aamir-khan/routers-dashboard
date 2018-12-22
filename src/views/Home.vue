<template>
  <b-row>
    <b-col
      cols="4"
      v-for="router in routers"
      :key="router.id"
    >
      <Card
        :id="router.id"
        :name="router.name"
      />
    </b-col>
  </b-row>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card.vue";

export default {
  components: { Card },
  data() {
    return { routers: null, loading: false, error: null };
  },
  async mounted() {
    try {
      const res = await axios.get("/routers/");
      this.routers = res.data;
    } catch (err) {
      this.error = err;
    }
  }
};
</script>
