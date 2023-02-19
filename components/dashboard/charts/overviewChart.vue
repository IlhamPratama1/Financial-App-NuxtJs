<template>
  <apexchart
    width="100%"
    height="50px"
    :options="chartOptions"
    :series="series"
  ></apexchart>
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
    colors: {
      type: Array,
      default: ["#9DC9A8"],
    },
    prefix: {
      type: String,
      default: "Income",
    },
  },
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "area",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
          sparkline: { enabled: true },
        },
        tooltip: {
          shared: false,
        },
        xaxis: {
          categories: this.xaxis,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          dashArray: [0, 5],
          width: [2],
        },
        colors: this.colors,
      },
      series: [
        {
          name: this.prefix,
          data: this.dataseries,
        },
      ],
    };
  },
};
</script>
