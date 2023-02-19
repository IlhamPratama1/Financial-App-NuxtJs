<template>
  <div class="flex justify-between items-center">
    <h1 class="text-3xl font-bold text-black-m dark:text-white-m">
      {{ capitalizeEachWord(String($route.name)) }}
    </h1>
    <div class="flex justify-end space-x-4">
      <button @click="changeThemeMode()" class="w-10 h-10 rounded-full p-2.5">
        <sun-icon v-if="isDark" class="h-6 w-6 text-white-m" />
        <moon-icon v-else class="h-6 w-6 text-black-m" />
      </button>
      <div class="flex">
        <input
          type="text"
          class="rounded-l-full bg-white-t outline-0 pl-6 h-10"
          placeholder="Search..."
        />
        <button class="w-10 h-10 bg-white-t rounded-r-full p-3">
          <div
            class="bg-[url('~/assets/icons/search.svg')] w-full h-full flex justify-end"
          ></div>
        </button>
      </div>

      <button class="w-10 h-10 bg-white-t rounded-full p-2">
        <div
          class="bg-[url('~/assets/icons/notification.svg')] w-full h-full flex justify-end"
        >
          <div class="bg-orange-m w-2 h-2 rounded-full"></div>
        </div>
      </button>
      <button class="w-10 h-10 bg-white-t rounded-full p-2">
        <div
          class="bg-[url('~/assets/icons/profile.svg')] w-full h-full flex justify-end"
        >
          <div class="bg-orange-m w-2 h-2 rounded-full"></div>
        </div>
      </button>
      <button class="w-10 h-10 bg-white-t rounded-full p-2">
        <div
          class="bg-[url('~/assets/icons/logout.svg')] w-full h-full flex justify-end"
        >
          <div class="bg-orange-m w-2 h-2 rounded-full"></div>
        </div>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import word from "~/mixins/word";
import { SunIcon, MoonIcon } from "@heroicons/vue/24/outline";

export default {
  mixins: [word],
  components: {
    SunIcon,
    MoonIcon,
  },
  computed: {
    isDark() {
      return this.$colorMode.value === "dark";
    },
  },
  methods: {
    changeThemeMode() {
      if (this.$colorMode.value === "dark")
        this.$colorMode.preference = "light";
      else this.$colorMode.preference = "dark";
    },
  },
};
</script>
