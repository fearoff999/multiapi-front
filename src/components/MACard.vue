<template>
  <v-card color="teal lighten-4">
    <v-card-title class="font-weight-black justify-space-between">
      {{ item.title }}
      <v-icon class="font-weight-black">
        {{ item.protectionStatus ? "mdi-lock" : "mdi-lock-open-variant" }}
      </v-icon>
    </v-card-title>
    <m-a-list :items="item.items" />
    <v-card-actions class="justify-end">
      <m-a-button text="Go to API page" icon-name="mdi-eye" @click="goToURL(item.link)" />
      <m-a-button
        text="Copy URL to clipboard"
        icon-name="mdi-clipboard-multiple-outline"
        secondary
        @click="copyURL(item.link)"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
import MAButton from './MAButton.vue';
import MAList from './MAList.vue';

export default {
  name: 'MACard',
  components: { MAButton, MAList },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    copyURL(url) {
      const el = document.createElement('textarea');
      el.value = `${window.location.protocol}//${window.location.host}${url}`;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    },
    goToURL(url) {
      window.open(url, '_blank');
    },
  },
};
</script>

<style lang="sass">
  .v-sheet.v-card
    max-height: 300px
    height: 300px
    .v-card__title+.v-card__subtitle
      margin-top: -16px
      height: 200px
      max-height: 200px
      overflow-y: auto
</style>
