// function games() {
//     var table = d3.select("#games")

//     var card = table.append("div").attr("class", "card")

// }

var path = Resources/dummy_games.json

d3.json(path).then(function(response){
    response.forEach(function(game){
        var table = d3.select("#games")
        table.append("div").attr("class", "card")
    })
})