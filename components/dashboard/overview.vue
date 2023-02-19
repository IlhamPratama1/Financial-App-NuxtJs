<template>
  <div class="border-2 border-white-s rounded-3xl p-6 space-y-4">
    <div class="flex justify-between">
      <h1 class="font-semibold text-xl text-black-m dark:text-white-m">
        Overview
      </h1>
      <select
        class="form-select rounded-full border-2 border-gray-m py-1.5 px-4 appearance-none font-semibold text-sm focus:outline-none"
      >
        <option selected value="1">Last Week</option>
        <option value="2">Last Month</option>
        <option value="3">Last Year</option>
      </select>
    </div>
    <div class="space-y-1">
      <p class="font-medium text-gray-s text-sm">Total Balance</p>
      <h1 class="font-bold text-2xl">Rp 2.300.000.000</h1>
    </div>
    <div class="flex justify-between">
      <div class="space-y-1">
        <p class="font-medium text-gray-s text-sm">Total Transaction</p>
        <h1 class="font-bold text-3xl">14</h1>
      </div>
      <div class="space-y-1">
        <p class="font-medium text-gray-s text-sm">Total Income</p>
        <h1 class="font-bold text-3xl">2</h1>
      </div>
    </div>
  </div>
</template>
