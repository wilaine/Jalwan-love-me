// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Mar", "Apr", "May", "June", "July", "August", "September", "October"],
    datasets: [{
      label: "Actual Saving",
      lineTension: 0.3,
      backgroundColor: "",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      
      data: [3000, 3560, 4120, 5135, 4000, 3660, 3500, 2800],
 },{
      label: "Projected Saving",
      lineTension: 0.3,
      backgroundColor: "",
      borderColor: "  #A52A2A",
      pointRadius: 5,
      pointBackgroundColor: " #A52A2A",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      
      data: [3000, 3600, 4500, 5500, 6600, 7800, 10000, 12500],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 14
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 20
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
      
    }
  }
});
