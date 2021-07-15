<template>
  <v-card-subtitle>
    <v-list dense class="teal lighten-4">
      <v-list-item v-for="(item, itemInd) in items" :key="itemInd">
        <v-list-item-title>
          <v-layout class="font-weight-black flex justify-space-between">
            <span>{{ item.name }}</span>
            <span>{{ item.mtime }}</span>
          </v-layout>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card-subtitle>
</template>

<script>
export default {
  name: 'MAList',
  props: {
    items: {
      type: Array,
      default: () => ([]),
    },
  },
};
</script>

<style></style>
