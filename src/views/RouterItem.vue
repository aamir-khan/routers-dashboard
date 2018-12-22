<template>
  <Server :router="router" />
</template>

<script>
import axios from 'axios';
import Server from '@/components/Server.vue';

export default {
  components: { Server },
  data() {
    return { router: [], loading: false, error: null };
  },
  async mounted() {
    try {
      const res = await axios.get('/routers/' + this.$route.params.id);
      this.router = res.data;
    } catch (err) {
      this.error = err;
    }
  }
};
</script>
