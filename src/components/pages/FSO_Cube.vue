<template>
  <Form />
  <div class="chart container-fluid">
    <h2>Bar Chart</h2>
    <vue3-chart-js v-bind="{ ...barChart }" />
  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import Form from "/src/components/Form.vue";

export default {
  name: "App",
  components: {
    Vue3ChartJs,
    Form,
  },
  setup() {
    const barChart = {
      type: "bar",
      options: {
        min: 0,
        max: 100,
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
      data: {
        labels: [
          "Total Lunas",
          "Sudah Isi Material",
          "Belum Isi Material",
          "Sudah Di WO",
          "Sudah Dikirim ke Petugas",
          "Belum Dikirim ke Petugas",
          "Ditolak Petugas",
          "Diterima Petugas",
          "Selesai Dikerjakan (Pasang)",
          "Ditangguhkan",
        ],
        datasets: [
          {
            label: "My First Dataset",
            backgroundColor: [
              "#FFFF00",
              "#2F4F4F",
              "#7CFC00",
              "#1abc9c",
              "#FF1493",
              "#f1c40f",
              "#2980b9",
              "#006400",
              "#00CED1",
              "#FF0000",
            ],
            data: [40, 22, 30, 10, 35, 20, 25, 10, 5, 4],
          },
        ],
      },
    };

    return {
      barChart,
    };
  },
};
</script>
