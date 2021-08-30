<template>
  <Form />
</template>

<script>
import Form from "/src/components/Form.vue";
export default {
  components: {
    Form,
  },
};
var pivot = new WebDataRocks({
  container: "#pivotContainer",
  toolbar: true,
  height: 580,
  width: "100%",
  report: {
    dataSource: {
      dataSourceType: "csv",
      filename: "https://cdn.webdatarocks.com/data/data.csv",
    },
    slice: {
      rows: [
        {
          uniqueName: "Country",
        },
      ],
      columns: [
        {
          uniqueName: "Category",
        },
        {
          uniqueName: "Measures",
        },
      ],
      measures: [
        {
          uniqueName: "Price",
          aggregation: "sum",
          format: "3ys5qejd",
        },
      ],
    },
    options: {
      grid: {
        type: "classic",
      },
    },
    conditions: [
      {
        formula: "#value < 5000",
        measure: "Price",
        format: {
          backgroundColor: "#f45328",
          color: "#FFFFFF",
          fontFamily: "Arial",
          fontSize: "12px",
        },
      },
      {
        formula: "#value > 700000",
        measure: "Price",
        format: {
          backgroundColor: "#0598df",
          color: "#FFFFFF",
          fontFamily: "Arial",
          fontSize: "12px",
        },
      },
    ],
    formats: [
      {
        name: "3ys5qejd",
        thousandsSeparator: " ",
        decimalSeparator: ".",
        decimalPlaces: 2,
        currencySymbol: "$",
        currencySymbolAlign: "right",
        nullValue: "",
        textAlign: "right",
        isPercent: false,
      },
    ],
  },
  reportcomplete: function () {
    createPieChart();
  },
});

var chart;

function createPieChart() {
  /* Get all the data from the pivot grid (alternatively, a slice can be passed to getData() as the first argument) */
  pivot.amcharts.getData({}, drawChart, updateChart);
}

function drawChart(chartData, rawData) {
  /* Apply amCharts theme */
  am4core.useTheme(am4themes_animated);

  /* Create chart instance */
  chart = am4core.create("chartContainer", am4charts.PieChart);

  /* Add data processed by WebDataRocks to the chart */
  chart.data = chartData.data;
  var numberFormat = pivot.amcharts.getNumberFormatPattern(
    rawData.meta.formats[0]
  );

  /* Apply number formatting to the chart */
  chart.numberFormatter.numberFormat = numberFormat;

  /* Create and configure series for a pie chart */
  var pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.category = pivot.amcharts.getCategoryName(rawData);
  pieSeries.dataFields.value = pivot.amcharts.getMeasureNameByIndex(rawData, 0);
  pieSeries.slices.template.stroke = am4core.color("#fff");
  pieSeries.slices.template.strokeWidth = 2;
  pieSeries.slices.template.strokeOpacity = 1;

  /* Create initial animation */
  pieSeries.hiddenState.properties.opacity = 1;
  pieSeries.hiddenState.properties.endAngle = -90;
  pieSeries.hiddenState.properties.startAngle = -90;
}

function updateChart(chartData, rawData) {
  chart.dispose();
  drawChart(chartData, rawData);
}
</script>
