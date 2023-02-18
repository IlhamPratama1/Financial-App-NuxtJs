<template>
  <svg v-bind="$attrs"><use :href="`asset/sprite.svg#icon-${id}`" /></svg>
</template>

<script lang="ts">
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
};
</script>
