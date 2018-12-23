<template>
  <b-container>
    <Navbar :routersList=routersList />
    <transition name="moveInUp">
       <router-view/>
  </transition>
  </b-container>
</template>

<script>

import axios from 'axios';
import Navbar from '@/components/Navbar.vue';

export default {
  components: { Navbar },
  data() {
    return { routersList: [] };
  },
  async mounted() {
    try {
      const res = await axios.get('/routers');
      this.routersList = res.data;
    } catch (err) {
      this.error = err;
    }
  },
};
</script>
<style scoped>
.moveInUp-enter-active{
  opacity: 0;
  transition: opacity 1s ease-in;
}
.moveInUp-enter-active{
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}
  .moveInUp-leave-active{
  animation: moveInUp .3s ease-in;
}
@keyframes moveInUp{
 0%{
  transform: translateY(0);
 }
  100%{
  transform: translateY(-400px);
 }
}
</style>
