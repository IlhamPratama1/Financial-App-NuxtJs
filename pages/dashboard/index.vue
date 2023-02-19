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
        <financial-records />
        <overview />
      </div>
    </div>
    <div class="flex flex-col space-y-6">
      <transactions />
      <categories />
    </div>
  </div>
</template>

<script lang="ts">
import MyCards from "~/components/dashboard/myCards.vue";
import Balances from "~/components/dashboard/balances.vue";
import MoneyFlow from "~/components/dashboard/moneyFlow.vue";
import FinancialRecords from "~/components/dashboard/financialRecords.vue";
import Overview from "~/components/dashboard/overview.vue";
import Transactions from "~/components/dashboard/transactions.vue";
import Categories from "~/components/dashboard/categories.vue";
import word from "~/mixins/word";

export default {
  mixins: [word],
  components: {
    MyCards,
    Balances,
    MoneyFlow,
    FinancialRecords,
    Overview,
    Transactions,
    Categories,
  },
};
</script>
