<template>
  <div id="app-layout">
    <main>
      <div class="bg-white-t flex font-quicksand">
        <sidebar />
        <div
          class="transition-colors duration-300 rounded-l-3xl w-full bg-white dark:bg-black-m py-8 px-10 space-y-4"
        >
          <navbar />
          <div class="w-full h-px bg-black-m dark:bg-white-m opacity-5"></div>
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>
<script lang="ts">
import sidebar from "./sidebar.vue";
import navbar from "./navbar.vue";

export default {
  components: {
    sidebar,
    navbar,
  },
};
</script>
