// create dropdown
var url = "../static/js/output.csv"
var test = "/elochart"

var dropdown = d3.select("#dropdown")
d3.json(test).then(function(data){
  console.log(Object.keys(data[0]))
  var keys = Object.keys(data[0])

keys.forEach((key)=>{
    dropdown.append("option").text(key).property("value",key).attr("id",key)
  });
});

// var teams = {
//   1610612737: "Atlanta Hawks",
//   1610612738:	'Boston Celtics',
//   1610612740:	'New Orleans Pelicans',
//   1610612741:'Chicago Bulls',
//   1610612742:	'Dallas Mavericks',
//   1610612743: 'Denver Nuggets',
//   1610612745:	'Houston Rockets',
//   1610612746:	'Los Angeles Clippers',
//   1610612747:	'Los Angeles Lakers',
//   1610612748:	'Miami Heat',
//   1610612749:	'Milwaukee Bucks',
//   1610612750:	'Minnesota Timberwolves',
//   1610612751:	'Brooklyn Nets',
//   1610612752:	'New York Knicks',
//   1610612753:	'Orlando Magic',
//   1610612754:	'Indiana Pacers',
//   1610612755:	'Philadelphia 76ers',
//   1610612756:	'Phoenix Suns',
//   1610612757:	'Portland Trail Blazers',
//   1610612758:	'Sacramento Kings',
//   1610612759:'San Antonio Spurs',
//   1610612760: 'Oklahoma City Thunder',
//   1610612761: 'Toronto Raptors',
//   1610612762:	'Utah Jazz',
//   1610612763:	'Memphis Grizzlies',
//   1610612764:	'Washington Wizards',
//   1610612765:	'Detroit Pistons',
//   1610612766:	'Charlotte Hornets',
//   1610612739:	'Cleveland Cavaliers',
//   1610612744:	'Golden State Warriors'
//   };
// Object.entries(teams).forEach(([key,value])=>{
//   dropdown.append("option").text(value).property("value",key).attr("id",key)
// })


function updatePlot(teamid){
  // Define SVG area dimensions
  var svgWidth = 960;
  var svgHeight = 500;

  // Define the chart's margins as an object
  var margin = {
    top: 60,
    right: 60,
    bottom: 60,
    left: 60
  };

  // Define dimensions of the chart area
  var chartWidth = svgWidth - margin.left - margin.right;
  var chartHeight = svgHeight - margin.top - margin.bottom;

  // Select body, append SVG area to it, and set its dimensions
  var svg = d3.select("#elo_chart")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  // Append a group area, then set its margins
  var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Configure a parseTime function which will return a new Date object from a string
  var parseTime = d3.timeParse("%Y-%m-%d");

  // Load data
  d3.json(test).then(function(teamdata) {

      // Print the teamdata
      console.log(teamdata);

      // Format the date 
      teamdata.forEach(function(data) {
        data.date = parseTime(data.Date);
        data.team = +data[teamid];
        // console.log(data)
      });

      // Configure a time scale with a range between 0 and the chartWidth
      // Set the domain for the xTimeScale function
      // d3.extent returns the an array containing the min and max values for the property specified
      var xTimeScale = d3.scaleTime()
        .range([0, chartWidth])
        .domain(d3.extent(teamdata, data => data.date));

      // Configure a linear scale with a range between the chartHeight and 0
      // Set the domain for the xLinearScale function
      var yLinearScale = d3.scaleLinear()
        .range([chartHeight, 0])
        .domain([d3.min(teamdata, data => data.team), d3.max(teamdata, data => data.team)]);

      // Create two new functions passing the scales in as arguments
      // These will be used to create the chart's axes
      var bottomAxis = d3.axisBottom(xTimeScale).tickFormat(d3.timeFormat("%d-%b-%Y"));
      var leftAxis = d3.axisLeft(yLinearScale);

      // Configure a drawLine function which will use our scales to plot the line's points
      var drawLine = d3
        .line()
        .x(data => xTimeScale(data.date))
        .y(data => yLinearScale(data.team));

      // Append an SVG path and plot its points using the line function
      chartGroup.append("path")
        // The drawLine function returns the instructions for creating the line for teamdata
        .attr("d", drawLine(teamdata))
        .classed("line", true);

      // Append an SVG group element to the SVG area, create the left axis inside of it
      chartGroup.append("g")
        .classed("axis", true)
        .call(leftAxis);

      // Append an SVG group element to the SVG area, create the bottom axis inside of it
      // Translate the bottom axis to the bottom of the page
      chartGroup.append("g")
        .classed("axis", true)
        .attr("transform", "translate(0, " + chartHeight + ")")
        .call(bottomAxis);
      
      // Create axes labels
    chartGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left + 2)
    .attr("x", 0 - (chartHeight / 2))
    .attr("dy", "1em")
    .attr("class", "axisText")
    .text("ELO Ranking");

  chartGroup.append("text")
    .attr("transform", `translate(${chartWidth / 2}, ${chartHeight + margin.top -15})`)
    .attr("class", "axisText")
    .text("Dates");

    }).catch(function(error) {
      console.log(error);
    });
  }

function defaultChart(){
  updatePlot("Atlanta Hawks")
}
defaultChart()

function optionChanged(newid){
  d3.select('#elo_chart').selectAll('svg').remove();
  updatePlot(newid);
}
