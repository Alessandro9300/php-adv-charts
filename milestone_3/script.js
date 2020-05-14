$(document).ready(function(){


  $.ajax({
    url: "api.php",
    method: "get",
    data: {
      user: getUser()
    },
    success: function(data){
      if (data.fatturato){
        graficoUno(data)
      }
      if (data.fatturatoAgenti){
        graficoDue(data)
      }
      if (data.teamEfficiency){
        graficoTre(data)
      }
    },
    error: function() {
      console.error("error");
    }
  })

  //get user
  function getUser() {
    var url = window.location.href;
    var pippoUrl = new URL(url);
    return pippoUrl.searchParams.get("user")
  }

  // funzione per i mesi
  function getMonths() {
    moment.locale("it");
    return moment.months();
  }

  //grafico uno
  function graficoUno(data){

    var mesi = getMonths();
    var grafico1 = $("#milestone_3_1");

    var colore1 = rgbaRandom()

    var chart1 = new Chart(grafico1, {
      type: data.fatturato.tipo,
      data: {
        labels: mesi,
        datasets: [{
          label: 'Vendite',
          data: data.fatturato.data,
          borderColor: colore1 + ", 1)",
          backgroundColor:   colore1 + ", .2)",
          pointBackgroundColor: colore1 + ", 1)"
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

  //grafico due
  function graficoDue(data){

    var grafico2 = $("#milestone_3_2");

    var arrayColor = [];

    for (var i = 0; i < data.fatturatoAgenti.data.length; i++) {

      arrayColor.push(rgbaRandom()  + ", 0.7)");

    }

    var chart1 = new Chart(grafico2, {
      type: data.fatturatoAgenti.tipo,
      data: {
        labels: data.fatturatoAgenti.nomi,
        datasets: [{
          data: data.fatturatoAgenti.data,
          backgroundColor: arrayColor
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

  //grafico true
  function graficoTre(data) {

    var grafico3 = $("#milestone_3_3");

    var arrayTeams = [];


    for (var nomeTeam in data.teamEfficiency.data) {

      var colore1 = rgbaRandom();

      arrayTeams.push({
        label: nomeTeam,
        data: data.teamEfficiency.data[nomeTeam],
        borderColor: colore1 + ", 1)",
        backgroundColor: colore1 + ", .1)",
        pointBackgroundColor: colore1 + ", 1)"
      })
    }

    var chart1 = new Chart(grafico3, {
      type: data.teamEfficiency.tipo,
      data: {
        labels: getMonths(),
        datasets: arrayTeams
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

})


// funzioni colore random sul blu

function rgbaRandom(){

  rNumber1 = Math.floor((Math.random() * 170) + 1);
  rNumber2 = Math.floor((Math.random() * 100) + 10);
  rNumber3 = Math.floor((Math.random() * 60) + 180);
  return "rgba(" + rNumber1 + ", " + rNumber2 + ", " + rNumber3;
}
