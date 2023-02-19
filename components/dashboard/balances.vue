<template>
  <div class="border-2 border-white-s rounded-3xl p-5 space-y-3">
    <div class="flex justify-between">
      <h1 class="font-semibold text-xl text-black-m dark:text-white-m">
        Balances
      </h1>
      <select
        class="form-select rounded-full border-2 border-gray-m py-1.5 px-4 appearance-none font-semibold text-sm focus:outline-none"
      >
        <option selected value="1">Last Week</option>
        <option value="2">Last Month</option>
        <option value="3">Last Year</option>
      </select>
    </div>
    <div class="space-y-1 bg-white-s w-full h-0.5 rounded-full"></div>
    <div class="space-y-3">
      <div class="flex justify-between items-center">
        <div class="flex justify-between space-x-2 items-center">
          <div
            class="h-10 px-3 rounded-xl border-2 border-white-s flex items-center"
          >
            <p class="m-auto text-blue-s font-bold">BCA</p>
          </div>
          <p class="font-medium text-sm">**** **** **** 3432</p>
        </div>
        <h1 class="font-bold">Rp 2.300</h1>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex justify-between space-x-2 items-center">
          <div
            class="h-10 px-3 rounded-xl border-2 border-white-s flex items-center"
          >
            <p class="m-auto text-red-s font-bold">BTN</p>
          </div>
          <p class="font-medium text-sm">**** **** **** 3432</p>
        </div>
        <h1 class="font-bold">Rp 2.300</h1>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex justify-between space-x-2 items-center">
          <div
            class="h-10 px-2 rounded-xl border-2 border-white-s flex items-center"
          >
            <p class="m-auto text-green-s font-bold">MANDIRI</p>
          </div>
          <p class="font-medium text-sm">**** **** **** 3432</p>
        </div>
        <h1 class="font-bold">Rp 2.300</h1>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex justify-between space-x-2 items-center">
          <div
            class="h-10 px-3 rounded-xl border-2 border-white-s flex items-center"
          >
            <p class="m-auto text-blue-s font-bold">BCA</p>
          </div>
          <p class="font-medium text-sm">**** **** **** 3432</p>
        </div>
        <h1 class="font-bold">Rp 2.300</h1>
      </div>
    </div>
  </div>
</template>
