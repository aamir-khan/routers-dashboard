<template>
  <b-row class="justify-content-md-center">
    <b-card
      bg-variant="dark"
      text-variant="white"
    >
      <b-col
        cols="12"
        md="auto"
      >
        <b-row>
          <b-col
            cols="4"
            v-for="slot in router.slots"
            :key="slot.id"
          >
            <div
              v-if="!slot.card"
              class="empty-slot"
            >
            </div>
            <SlotsCard :card="slot.card" />
          </b-col>
        </b-row>
      </b-col>
    </b-card>
  </b-row>
</template>

<script>

import SlotsCard from './SlotsCard.vue';

export default {
  props: ['router'],
  components: { SlotsCard },
};
</script>

<style scoped>
div.card {
  width: 70%;
}

.empty-slot {
  background: lightslategray;
  height: 30px;
}
</style>
