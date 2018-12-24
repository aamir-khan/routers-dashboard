<template>
  <b-container>
    <Navbar />
    <router-view :key="$route.path" />
  </b-container>
</template>

<script>

import Navbar from '@/components/Navbar.vue';

export default {
  components: { Navbar },
};
</script>

<style>
    body {
        background-color: #F0F0F0;
    }
    h1 {
        padding: 0;
        margin-top: 0;
    }
    #app {
        width: 1024px;
        margin: auto;
    }
</style>
