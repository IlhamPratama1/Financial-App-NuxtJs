<template>
  <div class="grid grid-cols-3 gap-6">
    <div class="col-span-2 space-y-2">
      <div class="space-y-6">
        <div class="grid grid-cols-3 gap-6">
          <my-cards />
          <balances />
        </div>
        <money-flow />
      </div>
      <div class="grid grid-cols-3 gap-6">
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
        <div class="grow border-2 border-white-s rounded-3xl p-6 space-y-4">
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
      </div>
    </div>
    <div class="flex flex-col space-y-6">
      <div class="grow border-2 border-white-s rounded-3xl p-6 space-y-3">
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
      <div class="grow border-2 border-white-s rounded-3xl p-6 space-y-3">
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
