<template>
  <div>
    <apexchart type="area" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script lang="ts">
import VueApexCharts from "vue3-apexcharts";
export default {
  props: {
    dataseries: {
      type: Array,
      default: [30, 40, 25, 50, 49, 21, 70, 51],
    },
    xaxis: {
      type: Array,
      default: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  },
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        xaxis: {
          categories: this.xaxis,
        },
      },
      series: [
        {
          name: "series-1",
          data: this.dataseries,
        },
      ],
    };
  },
};
</script>
