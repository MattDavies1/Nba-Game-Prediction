d3.json("/elo").then(data => {
  dataSorted = data.sort(function(a, b) { return a.elo - b.elo });

  console.log(dataSorted)

  let elos = dataSorted.map(team=>team.elo)
  let names = dataSorted.map(team=>String(team.nickname))

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  var plotData = [{
    x: elos,
    y: names,
    type: "bar",
    orientation: 'h'
  }];

  var layout = {
    title: `Team ELOs as of ${today}`,
    height: 700,
    xaxis: {range: [1200, 1800],},
    yaxis: {type: 'category'},
  };

  Plotly.newPlot("elo-bars", plotData, layout)
  
});
