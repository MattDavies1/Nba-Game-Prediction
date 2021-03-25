//original one just with current elo rankings
// d3.json("/elo").then(data => {
//   dataSorted = data.sort(function(a, b) { return a.elo - b.elo });

//   console.log(dataSorted)

//   let elos = dataSorted.map(team=>team.elo)
//   let names = dataSorted.map(team=>String(team.nickname))

//   var today = new Date();
//   var dd = String(today.getDate()).padStart(2, '0');
//   var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//   var yyyy = today.getFullYear();

//   today = mm + '/' + dd + '/' + yyyy;

//   var plotData = [{
//     x: elos,
//     y: names,
//     type: "bar",
//     orientation: 'h'
//   }];

//   var layout = {
//     title: `Team ELOs as of ${today}`,
//     height: 700,
//     xaxis: {range: [1200, 1800],},
//     yaxis: {type: 'category'},
//   };

//   Plotly.newPlot("elo-bars", plotData, layout)
  
// });


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
    marker:{color: 'rgba(255,153,51,0.6)'}
  };

  // var layout = {
  //   title: `Team ELOs as of ${today}`,
  //   height: 700,
  //   xaxis: {range: [1200, 1800],},
  //   yaxis: {type: 'category'},
  // };

  // Plotly.newPlot("elo-bars", plotData, layout)

  var starting_elos = [
  {
    "elo": 1596.47, 
    "nickname": "Bucks"
  }, 
  {
    "elo": 1659.04, 
    "nickname": "Raptors"
  }, 
  {
    "elo": 1509.09, 
    "nickname": "76ers"
  }, 
  {
    "elo": 1644.01, 
    "nickname": "Celtics"
  }, 
  {
    "elo": 1517.8, 
    "nickname": "Pacers"
  }, 
  {
    "elo": 1488.51, 
    "nickname": "Nets"
  }, 
  {
    "elo": 1474.44, 
    "nickname": "Magic"
  }, 
  {
    "elo": 1376.33, 
    "nickname": "Pistons"
  }, 
  {
    "elo": 1396.87, 
    "nickname": "Hornets"
  }, 
  {
    "elo": 1600.65, 
    "nickname": "Heat"
  }, 
  {
    "elo": 1399.82, 
    "nickname": "Wizards"
  }, 
  {
    "elo": 1394.5, 
    "nickname": "Hawks"
  }, 
  {
    "elo": 1385.07, 
    "nickname": "Bulls"
  }, 
  {
    "elo": 1385.08, 
    "nickname": "Cavaliers"
  }, 
  {
    "elo": 1377.69, 
    "nickname": "Knicks"
  }, 
  {
    "elo": 1386.59, 
    "nickname": "Warriors"
  }, 
  {
    "elo": 1555.18, 
    "nickname": "Nuggets"
  }, 
  {
    "elo": 1537.87, 
    "nickname": "Rockets"
  }, 
  {
    "elo": 1507.93, 
    "nickname": "Trail Blazers"
  }, 
  {
    "elo": 1549.71, 
    "nickname": "Jazz"
  }, 
  {
    "elo": 1521.34, 
    "nickname": "Thunder"
  }, 
  {
    "elo": 1608.09, 
    "nickname": "Clippers"
  }, 
  {
    "elo": 1510.85, 
    "nickname": "Spurs"
  }, 
  {
    "elo": 1486.18, 
    "nickname": "Kings"
  }, 
  {
    "elo": 1651.68, 
    "nickname": "Lakers"
  }, 
  {
    "elo": 1405.68, 
    "nickname": "Timberwolves"
  }, 
  {
    "elo": 1521.44, 
    "nickname": "Mavericks"
  }, 
  {
    "elo": 1513.12, 
    "nickname": "Grizzlies"
  }, 
  {
    "elo": 1500.2, 
    "nickname": "Pelicans"
  }, 
  {
    "elo": 1561.54, 
    "nickname": "Suns"
  }
]

var sorted = starting_elos.sort(function(a, b) { return a.elo - b.elo });
let teamnames = sorted.map(row=>row.nickname)
let elo = sorted.map(row=>row.elo)

var trace2 = {
      x: elo,
      y: teamnames,
      type: "bar",
      name:"Starting Elo",
      orientation: 'h',
      marker:{color:'rgba(55,128,191,0.6)'}
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
