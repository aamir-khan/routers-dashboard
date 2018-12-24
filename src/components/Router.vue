<template>
  <div>
    <b-row class="justify-content-md-center">
      <b-card
        bg-variant="dark"
        text-variant="white"
        class="card-name-bar"
      >
        {{ router.name }}
      </b-card>
    </b-row>
    <br />

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
              <SlotsCard :card="slot.card" v-else />
            </b-col>
          </b-row>
        </b-col>
      </b-card>
    </b-row>
    </div>
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
  width: 98%;
}
div.card-name-bar {
  text-align: center;
}
div.card-name-bar div {
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
}

.empty-slot {
  background: lightslategray;
  height: 30px;
  border-radius: 1px;
  padding-bottom: 8px;
  margin-bottom: 20px;
  width: auto;
}
</style>
