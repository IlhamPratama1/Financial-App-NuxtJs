<template>
  <div class="border-2 border-white-s rounded-3xl p-6 space-y-3">
    <div class="flex justify-between">
      <h1 class="font-semibold text-xl text-black-m dark:text-white-m">
        Transactions
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
    <div class="space-y-4">
      <div class="flex justify-between items-center">
        <div class="flex justify-between space-x-2 items-center">
          <div class="h-16 w-16 bg-white-t rounded-xl p-4">
            <credit-card-icon class="w-full h-full text-red-s" />
          </div>
          <div class="space-y-1">
            <p class="font-semibold text-xl">Flight</p>
            <p class="font-medium text-sm text-gray-s">13 February 2023</p>
          </div>
        </div>
        <div class="space-y-1">
          <div class="flex justify-end">
            <div
              class="px-3 py-1 text-xs rounded-full bg-gray-m inline-block text-black-s"
            >
              operational
            </div>
          </div>
          <h1 class="text-xl font-bold">-Rp 2.300.000</h1>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex justify-between space-x-2 items-center">
          <div class="h-16 w-16 bg-white-t rounded-xl p-4">
            <credit-card-icon class="w-full h-full text-green-s" />
          </div>
          <div class="space-y-1">
            <p class="font-semibold text-xl">Flight</p>
            <p class="font-medium text-sm text-gray-s">13 February 2023</p>
          </div>
        </div>
        <div class="space-y-1">
          <div class="flex justify-end">
            <div
              class="px-3 py-1 text-xs rounded-full bg-gray-m inline-block text-black-s"
            >
              operational
            </div>
          </div>
          <h1 class="text-xl font-bold">-Rp 2.300.000</h1>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex justify-between space-x-2 items-center">
          <div class="h-16 w-16 bg-white-t rounded-xl p-4">
            <credit-card-icon class="w-full h-full text-yellow-m" />
          </div>
          <div class="space-y-1">
            <p class="font-semibold text-xl">Flight</p>
            <p class="font-medium text-sm text-gray-s">13 February 2023</p>
          </div>
        </div>
        <div class="space-y-1">
          <div class="flex justify-end">
            <div
              class="px-3 py-1 text-xs rounded-full bg-gray-m inline-block text-black-s"
            >
              operational
            </div>
          </div>
          <h1 class="text-xl font-bold">-Rp 2.300.000</h1>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex justify-between space-x-2 items-center">
          <div class="h-16 w-16 bg-white-t rounded-xl p-4">
            <credit-card-icon class="w-full h-full text-orange-m" />
          </div>
          <div class="space-y-1">
            <p class="font-semibold text-xl">Flight</p>
            <p class="font-medium text-sm text-gray-s">13 February 2023</p>
          </div>
        </div>
        <div class="space-y-1">
          <div class="flex justify-end">
            <div
              class="px-3 py-1 text-xs rounded-full bg-gray-m inline-block text-black-s"
            >
              operational
            </div>
          </div>
          <h1 class="text-xl font-bold">-Rp 2.300.000</h1>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex justify-between space-x-2 items-center">
          <div class="h-16 w-16 bg-white-t rounded-xl p-4">
            <credit-card-icon class="w-full h-full text-blue-s" />
          </div>
          <div class="space-y-1">
            <p class="font-semibold text-xl">Flight</p>
            <p class="font-medium text-sm text-gray-s">13 February 2023</p>
          </div>
        </div>
        <div class="space-y-1">
          <div class="flex justify-end">
            <div
              class="px-3 py-1 text-xs rounded-full bg-gray-m inline-block text-black-s"
            >
              operational
            </div>
          </div>
          <h1 class="text-xl font-bold">-Rp 2.300.000</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { CreditCardIcon } from "@heroicons/vue/24/solid";

export default {
  components: {
    CreditCardIcon,
  },
};
</script>
