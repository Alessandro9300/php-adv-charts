$(document).ready(function(){



ajaxCall();



// funzione per fare il grafico
function charts(data) {
  console.log(data);

  var grafico1 = $("#milestone_2_1");
  var grafico2 = $("#milestone_2_2");


  var chart1 = new Chart(grafico1, {
    type: data.fatturato.tipo,
    data: {
      labels: getMonths(),
      datasets: [{
        label: 'Vendite',
        data: data.fatturato.data
      }],

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
  })

  var chart1 = new Chart(grafico2, {
    type: data.fatturatoAgenti.tipo,
    data: {
      labels: data.fatturatoAgenti.nomi,
      datasets: [{
        data: data.fatturatoAgenti.data
      }],
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

  })

}

// chiamata api
function ajaxCall() {
  $.ajax({
    url: "api.php",
    method: "get",
    success: function(data){
      charts(data);
    },
    error: function() {
      console.error("error");
    }
  })
}

// funzione per i mesi
function getMonths() {
  moment.locale("it");
  return moment.months();
}

})
