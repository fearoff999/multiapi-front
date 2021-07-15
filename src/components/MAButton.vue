<template>
  <v-btn
    outlined
    small
    :class="[
      'teal',
      {
        'lighten-2': secondary,
      },
      'white--text',
      'font-weight-bold'
    ]"
    @click="$emit('click')"
  >
    <v-icon class="mr-1">{{ iconName }}</v-icon>
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  name: 'MAButton',
  props: {
    text: {
      type: String,
      default: '',
    },
    iconName: {
      type: String,
      default: '',
    },
    secondary: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
