<template>
  <div class="col-span-2 space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="font-semibold text-xl text-black-m dark:text-white-m">
        Financial Records
      </h1>
      <select
        class="form-select rounded-full border-2 border-gray-m py-1.5 px-4 appearance-none font-semibold text-sm focus:outline-none"
      >
        <option selected value="1">Weekly</option>
        <option value="2">Montly</option>
        <option value="3">Yearly</option>
      </select>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <div class="bg-green-m rounded-3xl p-8 space-y-3">
        <div class="flex justify-between">
          <p class="text-sm text-black-m">Total Income</p>
          <ellipsis-vertical-icon class="h-4 w-4" />
        </div>
        <div class="flex">
          <overview-chart />
        </div>
        <div class="flex justify-between items-end">
          <h1 class="text-black-m font-semibold text-sm">Rp 1,000K</h1>
          <div class="flex items-center space-x-1">
            <arrow-up-icon class="h-4 w-4 text-green-s" />
            <p class="text-sm font-semibold text-black-m">17%</p>
          </div>
        </div>
      </div>
      <div class="bg-red-m rounded-3xl p-8 space-y-3">
        <div class="flex justify-between">
          <p class="text-sm text-black-m">Total Expense</p>
          <ellipsis-vertical-icon class="h-4 w-4" />
        </div>
        <div class="flex">
          <overview-chart
            :colors="['#DDAF98']"
            :dataseries="[51, 20, 25, 10, 29, 31, 40, 11]"
            prefix="Expense"
          />
        </div>
        <div class="flex justify-between items-end">
          <h1 class="text-black-m font-semibold text-sm">Rp 1,000K</h1>
          <div class="flex items-center space-x-1">
            <arrow-up-icon class="h-4 w-4 text-red-s" />
            <p class="text-sm font-semibold text-black-m">17%</p>
          </div>
        </div>
      </div>
      <div class="bg-blue-m rounded-3xl p-8 space-y-3">
        <div class="flex justify-between">
          <p class="text-sm text-black-m">Total Saving</p>
          <ellipsis-vertical-icon class="h-4 w-4" />
        </div>
        <div class="flex">
          <overview-chart
            :colors="['#BAC4DC']"
            :dataseries="[22, 11, 33, 42, 43, 23, 43, 56]"
            prefix="Saving"
          />
        </div>
        <div class="flex justify-between items-end">
          <h1 class="text-black-m font-semibold text-sm">Rp 1,000K</h1>
          <div class="flex items-center space-x-1">
            <arrow-up-icon class="h-4 w-4 text-blue-s" />
            <p class="text-sm font-semibold text-black-m">17%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Square3Stack3DIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  ArrowsRightLeftIcon,
  CreditCardIcon,
} from "@heroicons/vue/24/solid";
import OverviewChart from "~/components/dashboard/charts/overviewChart.vue";
import MoneyFlowChart from "~/components/dashboard/charts/moneyFlowChart.vue";
import CategoriesBar from "~/components/dashboard/charts/categoriesBar.vue";
import MyCards from "~/components/dashboard/myCards.vue";
import Balances from "~/components/dashboard/balances.vue";
import MoneyFlow from "~/components/dashboard/moneyFlow.vue";
import word from "~/mixins/word";

export default {
  mixins: [word],
  components: {
    MyCards,
    Balances,
    MoneyFlow,
    Square3Stack3DIcon,
    EllipsisVerticalIcon,
    ArrowUpIcon,
    OverviewChart,
    MoneyFlowChart,
    CategoriesBar,
    ChevronRightIcon,
    ChevronLeftIcon,
    ArrowsRightLeftIcon,
    CreditCardIcon,
  },
};
</script>
