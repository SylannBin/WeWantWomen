/**
 * Adds the chart in the main container
 *
 * @global {Chart} chartCanvas
 */
function generateChart()
{
  // Remove everything from the container before reloading it
  $("#main-container").empty();

  // build container
  $("#main-container").append(`
<div class="chart-container">
  <canvas id="chart-canvas"></canvas>
</div>
`);

  // get context
  var ctx = document.getElementById("chart-canvas");

  // instantiate a new chart and set the canvas with it
  // (global variable) chartCanvas
  chartCanvas = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["Oui", "Non", "Ø"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#22bb11",
            "#ff4242",
            "#4286f4"
          ],
          hoverBackgroundColor: [
            "#22bb11",
            "#ff4242",
            "#4286f4"
          ]
        }]
    },
    options: {
      animation: {
        animateScale: true
      }
    }
  });
}

