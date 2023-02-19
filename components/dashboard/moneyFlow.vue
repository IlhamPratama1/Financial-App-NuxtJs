<template>
  <div class="space-y-4">
    <div class="flex justify-between items-center">
      <h1 class="font-semibold text-xl text-black-m dark:text-white-m">
        Money Flow
      </h1>
      <div class="flex space-x-4">
        <div class="flex space-x-2 items-center">
          <div class="bg-orange-m h-3 w-3 rounded-full"></div>
          <p class="font-semibold text-gray-s text-xs">Total Saving</p>
        </div>
        <div class="flex space-x-2 items-center">
          <div class="bg-black-m h-3 w-3 rounded-full"></div>
          <p class="font-semibold text-gray-s text-xs">Total Expense</p>
        </div>
      </div>
      <select
        class="form-select rounded-full border-2 border-gray-m py-1.5 px-4 appearance-none font-semibold text-sm focus:outline-none"
      >
        <option selected value="1">Weekly</option>
        <option value="2">Montly</option>
        <option value="3">Yearly</option>
      </select>
    </div>
    <div class="">
      <money-flow-chart />
    </div>
  </div>
</template>
<script lang="ts">
import MoneyFlowChart from "~/components/dashboard/charts/moneyFlowChart.vue";

export default {
  components: {
    MoneyFlowChart,
  },
};
</script>
