<template>
  <div class="col-span-2 space-y-3">
    <div class="flex justify-between items-center">
      <h1 class="font-semibold text-xl text-black-m dark:text-white-m">
        My Cards
      </h1>
      <div class="flex space-x-2">
        <button class="w-8 h-8 rounded-full border-2 border-gray-m p-1.5">
          <chevron-left-icon class="h-full w-full text-black-m text-bold" />
        </button>
        <button class="w-8 h-8 rounded-full border-2 border-gray-m p-1.5">
          <chevron-right-icon class="h-full w-full text-black-m" />
        </button>
      </div>
    </div>
    <div class="w-full">
      <div class="h-3/5 bg-gray-m rounded-t-3xl px-8 py-6 space-y-6">
        <div class="flex justify-end">
          <square-3-stack-3-d-icon class="h-6 w-6 text-black-m text-right" />
        </div>
        <div class="flex justify-between">
          <div class="text-black-m">
            <p class="uppercase text-base">name</p>
            <h1 class="text-xl font-bold">
              {{ capitalizeEachWord("ilham pratama") }}
            </h1>
          </div>
          <div class="text-black-m">
            <p class="uppercase text-base">number</p>
            <h1 class="text-xl font-bold">**** **** **** 3432</h1>
          </div>
          <div class="text-black-m">
            <p class="uppercase text-base">bank</p>
            <h1 class="text-xl font-bold">BCA</h1>
          </div>
        </div>
      </div>
      <div
        class="h-2/5 bg-black-s rounded-b-3xl py-6 px-8 flex justify-between"
      >
        <div class="text-white-m">
          <h1 class="font-bold text-2xl">Rp 2.300.000.000</h1>
          <p class="text-base uppercase text-gray-s">balance</p>
        </div>
        <img src="~/assets/icons/credit.svg" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  Square3Stack3DIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/vue/24/solid";
import word from "~/mixins/word";

export default {
  mixins: [word],
  components: {
    Square3Stack3DIcon,
    ChevronRightIcon,
    ChevronLeftIcon,
  },
};
</script>
