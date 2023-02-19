<template>
  <div class="border-2 border-white-s rounded-3xl p-6 space-y-3">
    <div class="flex justify-between">
      <h1 class="font-semibold text-xl text-black-m dark:text-white-m">
        Categories
      </h1>
      <select
        class="form-select rounded-full border-2 border-gray-m py-1.5 px-4 appearance-none font-semibold text-sm focus:outline-none"
      >
        <option selected value="1">Weekly</option>
        <option value="2">Monthly</option>
        <option value="3">Yearly</option>
      </select>
    </div>
    <div class="space-y-1 bg-white-s w-full h-0.5 rounded-full"></div>
    <div class="grid grid-cols-2 gap-3">
      <div class="space-y-2">
        <categories-bar />
        <div class="flex justify-center">
          <button class="bg-gray-m rounded-full px-6 py-2">
            <div class="flex space-x-2 items-center">
              <arrows-right-left-icon class="h-5 w-5 text-black-m" />
              <p class="font-bold text-black-m">Detail</p>
            </div>
          </button>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div class="border-2 border-gray-m rounded-xl space-y-2 p-3">
          <div class="h-3 w-3 bg-orange-m rounded-full"></div>
          <div>
            <h1 class="font-bold text-black-m text-sm">Rp 20.0000</h1>
            <p class="text-gray-s font-bold text-xs">Category 1</p>
          </div>
        </div>
        <div class="border-2 border-gray-m rounded-xl space-y-2 p-3">
          <div class="h-3 w-3 bg-green-s rounded-full"></div>
          <div>
            <h1 class="font-bold text-black-m text-sm">Rp 20.0000</h1>
            <p class="text-gray-s font-bold text-xs">Category 2</p>
          </div>
        </div>
        <div class="border-2 border-gray-m rounded-xl space-y-2 p-3">
          <div class="h-3 w-3 bg-yellow-m rounded-full"></div>
          <div>
            <h1 class="font-bold text-black-m text-sm">Rp 20.0000</h1>
            <p class="text-gray-s font-bold text-xs">Category 3</p>
          </div>
        </div>
        <div class="border-2 border-gray-m rounded-xl space-y-2 p-3">
          <div class="h-3 w-3 bg-blue-s rounded-full"></div>
          <div>
            <h1 class="font-bold text-black-m text-sm">Rp 20.0000</h1>
            <p class="text-gray-s font-bold text-xs">Category 4</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ArrowsRightLeftIcon } from "@heroicons/vue/24/solid";
import CategoriesBar from "~/components/dashboard/charts/categoriesBar.vue";

export default {
  components: {
    CategoriesBar,
    ArrowsRightLeftIcon,
  },
};
</script>
