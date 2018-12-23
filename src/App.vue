<template>
  <b-container>
    <Navbar />

    <transition name="moveInUp">
      <router-view/>
    </transition>
  </b-container>
</template>

<script>

import Navbar from '@/components/Navbar.vue';

export default {
  components: { Navbar },
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
