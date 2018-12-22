<template>
  <b-container>
    <Navbar />
    <router-view />
  </b-container>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: { Navbar }
};
</script>
