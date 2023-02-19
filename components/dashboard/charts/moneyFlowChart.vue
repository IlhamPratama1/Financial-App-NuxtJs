<template>
  <apexchart
    width="100%"
    height="220px"
    type="area"
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
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [2, 2],
          curve: "smooth",
          dashArray: [0, 6],
        },
        legend: {
          show: false,
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            opacityFrom: 0.3,
            opacityTo: 0,
          },
        },
        colors: ["#14121E", "#FF7A00"],
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6,
          },
        },
        xaxis: {
          categories: [
            "01 Jan",
            "02 Jan",
            "03 Jan",
            "04 Jan",
            "05 Jan",
            "06 Jan",
            "07 Jan",
            "08 Jan",
            "09 Jan",
            "10 Jan",
            "11 Jan",
            "12 Jan",
          ],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            show: false,
          },
          labels: {
            style: {
              colors: ["#A7A6A9"],
              fontSize: "12px",
              fontFamily: "Quicksand",
            },
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            show: false,
          },
          labels: {
            style: {
              colors: ["#A7A6A9"],
              fontSize: "12px",
              fontFamily: "Quicksand",
              fontWeight: 400,
            },
          },
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val: string) {
                  return val + " (mins)";
                },
              },
            },
            {
              title: {
                formatter: function (val: string) {
                  return val + " per session";
                },
              },
            },
            {
              title: {
                formatter: function (val: string) {
                  return val;
                },
              },
            },
          ],
        },
        grid: {
          show: false,
        },
      },
      series: [
        {
          name: "Total Visits",
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
        },
        {
          name: "Session Duration",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
        },
      ],
    };
  },
};
</script>
