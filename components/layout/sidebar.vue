<template>
  <div class="lg:w-80 h-screen p-14">
    <div class="space-y-6 2xl:space-y-20 h-full flex flex-col">
      <div class="text-center">
        <h1 class="font-bold text-xl text-black-m">Financial App</h1>
      </div>
      <div class="w-full flex-auto flex flex-col justify-between">
        <div class="space-y-3">
          <div class="flex justify-center">
            <img
              src="~/assets/avatar/ava1.png"
              class="rounded-full w-24 h-24 border-4 border-white"
              alt="avatar"
            />
          </div>
          <div class="text-center">
            <h4 class="font-bold text-xl text-black-m">Ilham Pratama</h4>
            <p class="font-sm text-base text-black-m">Software Engineer</p>
          </div>
        </div>
        <div class="w-full h-px bg-black-m opacity-5"></div>
        <div class="space-y-1 2xl:space-y-5">
          <div v-for="(route, index) in routes" :key="index">
            <NuxtLink v-slot="{ navigate }" :to="`/${route}`" custom>
              <button @click="navigate">
                <h4 :class="selectedRouteStyle(route)">
                  {{ capitalizeEachWord(route) }}
                </h4>
              </button>
            </NuxtLink>
          </div>
        </div>
        <div class="w-full h-px bg-black-m opacity-5"></div>
        <div class="h-36 bg-gray-m w-full rounded-2xl">
          <img
            class="relative bottom-14"
            src="~/assets/gifs/cat_full.gif"
            alt="gif"
          />
          <div class="relative bottom-16 px-4 space-y-1">
            <h1 class="font-bold text-base text-black-m">Start Investment</h1>
            <div class="flex space-x-2 items-center">
              <p class="text-sm opacity-50">Invest Now</p>
              <arrow-long-right-icon class="h-6 w-6 text-black-m" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import menu from "~/mixins/menu";
import word from "~/mixins/word";
import { ArrowLongRightIcon } from "@heroicons/vue/24/solid";

export default {
  mixins: [menu, word],
  components: {
    ArrowLongRightIcon,
  },
  methods: {
    selectedRouteStyle(route: string): string {
      if (route === this.$route.name) return "font-bold text-md text-black-m";
      else return "font-bold text-md text-gray-s";
    },
  },
};
</script>
