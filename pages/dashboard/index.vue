<template>
  <div class="grid grid-cols-3 gap-6">
    <div class="col-span-2 space-y-6">
      <div class="grid grid-cols-3 gap-6">
        <div class="col-span-2 space-y-4">
          <div class="flex justify-between">
            <h1 class="font-semibold text-2xl text-black-m dark:text-white-m">
              My Cards
            </h1>
          </div>
          <div class="w-full">
            <div class="h-3/5 bg-yellow-m rounded-t-2xl px-8 py-6 space-y-6">
              <div class="flex justify-end">
                <square-3-stack-3-d-icon
                  class="h-6 w-6 text-black-m text-right"
                />
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
              class="h-2/5 bg-black-s rounded-b-2xl py-6 px-8 flex justify-between"
            >
              <div class="text-white-m">
                <h1 class="font-bold text-2xl">Rp 2.300.000.000</h1>
                <p class="text-base uppercase">balance</p>
              </div>
              <img src="~/assets/icons/credit.svg" />
            </div>
          </div>
        </div>
        <div class="flex flex-col space-y-4">
          <div class="flex justify-between">
            <h1 class="font-semibold text-2xl text-black-m dark:text-white-m">
              Balance
            </h1>
          </div>
          <div class="grow border-2 border-white-t rounded-2xl">
            <div class=""></div>
          </div>
        </div>
      </div>
      <div class="space-y-4">
        <div class="flex justify-between">
          <h1 class="font-semibold text-2xl text-black-m dark:text-white-m">
            Financial Records
          </h1>
        </div>
        <div class="grid grid-cols-3 gap-6">
          <div class="bg-green-m rounded-2xl p-8">
            <div class="flex justify-between">
              <p class="font-sm text-black-m">Total Income</p>
              <ellipsis-vertical-icon class="h-6 w-6" />
            </div>
            <ClientOnly>
              <div>
                <area-chart />
              </div>
            </ClientOnly>
          </div>
          <div class="bg-red-m rounded-2xl">test</div>
          <div class="bg-blue-m rounded-2xl">test</div>
        </div>
      </div>
    </div>
    <div class="bg-white-t"></div>
  </div>
</template>

<script lang="ts">
import { Square3Stack3DIcon } from "@heroicons/vue/24/solid";
import { EllipsisVerticalIcon } from "@heroicons/vue/24/solid";
import AreaChart from "~/components/master/charts/areaChart.vue";
import word from "~/mixins/word";

export default {
  mixins: [word],
  components: {
    Square3Stack3DIcon,
    EllipsisVerticalIcon,
    AreaChart,
  },
};
</script>
