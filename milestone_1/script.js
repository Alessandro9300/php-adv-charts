$(document).ready(function (){


  var mesi = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]

  apiCharts();


  function apiCharts() {
    var ctx = $("#milestone_1");

    $.ajax({
      url: "api.php",
      method: "GET",
      success: function(data){
        console.log(data);
        var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: mesi,
        datasets: [{
            label: 'Vendite',
            data: data,

            backgroundColor: [
                'rgba(0, 255, 0, 0.4)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(153, 172, 255, 1)',
                'rgba(153, 172, 290, 1)',
                'rgba(186, 252, 101, 1)',
                'rgba(86, 155, 300, 1)',
                'rgba(10, 202, 10, 1)',
                'rgba(300, 202, 300, 1)'

            ],
            borderWidth: 5
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
      },
      error: function(){
        console.error("ciao");
      }
    })

  }





})
