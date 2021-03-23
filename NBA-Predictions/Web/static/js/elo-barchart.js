var dummy_elos = [
    {
      "elo": 1644.33, 
      "nickname": "Bucks"
    }, 
    {
      "elo": 1451.43, 
      "nickname": "Raptors"
    }, 
    {
      "elo": 1638.65, 
      "nickname": "76ers"
    }, 
    {
      "elo": 1520.6, 
      "nickname": "Celtics"
    }, 
    {
      "elo": 1490.46, 
      "nickname": "Pacers"
    }, 
    {
      "elo": 1598.36, 
      "nickname": "Nets"
    }, 
    {
      "elo": 1372.0, 
      "nickname": "Magic"
    }, 
    {
      "elo": 1382.35, 
      "nickname": "Pistons"
    }, 
    {
      "elo": 1439.91, 
      "nickname": "Hornets"
    }, 
    {
      "elo": 1531.93, 
      "nickname": "Heat"
    }, 
    {
      "elo": 1416.19, 
      "nickname": "Wizards"
    }, 
    {
      "elo": 1524.95, 
      "nickname": "Hawks"
    }, 
    {
      "elo": 1502.6, 
      "nickname": "Bulls"
    }, 
    {
      "elo": 1355.97, 
      "nickname": "Cavaliers"
    }, 
    {
      "elo": 1461.22, 
      "nickname": "Knicks"
    }, 
    {
      "elo": 1484.52, 
      "nickname": "Warriors"
    }, 
    {
      "elo": 1617.06, 
      "nickname": "Nuggets"
    }, 
    {
      "elo": 1309.99, 
      "nickname": "Rockets"
    }, 
    {
      "elo": 1504.61, 
      "nickname": "Trail Blazers"
    }, 
    {
      "elo": 1626.3, 
      "nickname": "Jazz"
    }, 
    {
      "elo": 1429.92, 
      "nickname": "Thunder"
    }, 
    {
      "elo": 1576.53, 
      "nickname": "Clippers"
    }, 
    {
      "elo": 1519.02, 
      "nickname": "Spurs"
    }, 
    {
      "elo": 1406.83, 
      "nickname": "Kings"
    }, 
    {
      "elo": 1621.84, 
      "nickname": "Lakers"
    }, 
    {
      "elo": 1327.66, 
      "nickname": "Timberwolves"
    }, 
    {
      "elo": 1559.85, 
      "nickname": "Mavericks"
    }, 
    {
      "elo": 1532.61, 
      "nickname": "Grizzlies"
    }, 
    {
      "elo": 1508.42, 
      "nickname": "Pelicans"
    }, 
    {
      "elo": 1666.66, 
      "nickname": "Suns"
    }
  ]

//sort bars based on value
// dataSorted = dummy_elos.sort(function (a) {
//     return d3.ascending(a.elo);
// })
d3.json("/elo").then(data => {
  dataSorted = data.sort(function(a, b) { return a.elo - b.elo });

  console.log(dataSorted)

  let elos = dataSorted.map(team=>team.elo)
  let names = dataSorted.map(team=>String(team.id))

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