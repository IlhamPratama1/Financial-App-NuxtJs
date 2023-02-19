<template>
  <apexchart
    width="100%"
    type="donut"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script lang="ts">
import VueApexCharts from "vue3-apexcharts";
export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          toolbar: {
            show: false,
          },
        },
        labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
        dataLabels: {
          enabled: false,
        },
        legend: { show: false },
        stroke: { width: 0 },
        colors: ["#9DC9A8", "#F7D3A1", "#BAC4DC", "#FF7A00"],
      },
      series: [58.6, 34.9, 6.5, 10.5],
    };
  },
};
</script>
