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

dataSorted = dummy_elos.sort(function(a, b) { return b.elo - a.elo });

// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3
  .select("#elo-bars")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

  // Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
var chartGroup = svg.append("g")
.attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

dataSorted.forEach(data => {
    data.elo = +data.elo
})

var barSpacing = 10;
var scaleY = .333;

// Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
var barWidth = (chartWidth - (barSpacing * (dataSorted.length - 1))) / dataSorted.length;

chartGroup.selectAll(".bar")
    .data(dataSorted)
    .enter()
    .append("rect")
    .classed("bar", true)
    .attr("width", d => barWidth)
    .attr("height", d => d.elo*scaleY)
    .attr("x", (d, i) => i * (barWidth + barSpacing))
    .attr("y", d => chartHeight - d.elo * scaleY);
