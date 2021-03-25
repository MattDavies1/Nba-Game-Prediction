//new chart with current and starting elo ranking 
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

  var trace1= {
    x: elos,
    y: names,
    type: "bar",
    name:"Current Elo",
    orientation: 'h',
    marker: {color: 'rgba(58,200,225,.5)',
      line: {color: 'rgb(8,48,107)', width: 1.5}}
  };

var sorted = starting_elos.sort(function(a, b) { return a.elo - b.elo });
let teamnames = sorted.map(row=>row.nickname)
let elo = sorted.map(row=>row.elo)

var trace2 = {
      x: elo,
      y: teamnames,
      type: "bar",
      name:"Starting Elo",
      orientation: 'h',
      opacity: 0.5,
      marker: {
            color: 'rgb(158,202,225)',
            line: {color: 'rgb(8,48,107)', width: 1.5}}
    };

  var layout = {
      title: `Teams Starting Elos vs. Teams Current Elos`,
      height: 700,
      xaxis: {range: [1200, 1800]},
      yaxis: {type: 'category'},
      barmode: "group"
    };
    var tracedata = [trace1,trace2]

    Plotly.newPlot("elo-start", tracedata, layout)
  
});
