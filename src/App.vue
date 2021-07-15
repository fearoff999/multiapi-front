<template>
  <v-app>
    <v-app-bar class="teal lighten-4 font-weight-bold" dense>
      <v-toolbar-title class="text-center">
        MultiAPI available projects
      </v-toolbar-title>
    </v-app-bar>
    <v-layout>
      <v-container>
        <v-row>
          <v-col v-for="(col, colInd) in items" :key="colInd">
            <m-a-card :item="col" />
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
  </v-app>
</template>

<script>
import MACard from './components/MACard.vue';

export default {
  name: 'App',
  components: {
    MACard,
  },
  data: () => ({
    items: [],
  }),
  mounted() {
    if (window.items) {
      this.items = window.items;
    }
  },
};
</script>

<style lang='sass'>
header.v-toolbar
  display: flex
  justify-content: flex-start
  max-height: 48px
  .v-toolbar__content
    max-width: 100%
    width: 100%
    > *
      max-width: 100%
      width: 100%
.container
  .row
    .col
      max-width: 33%
      width: 33%
      flex-grow: 0
      flex-basis: auto
</style>
