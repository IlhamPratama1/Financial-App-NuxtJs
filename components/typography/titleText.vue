<template>
  <h1 class="font-semibold text-xl text-black-m dark:text-white-m">
    {{ text }}
  </h1>
</template>
<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      default: "Titel",
    },
  },
};
</script>
