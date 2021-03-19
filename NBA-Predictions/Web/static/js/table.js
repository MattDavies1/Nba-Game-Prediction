var table = d3.select("#games")

var path = "dummy_games.json"

// d3.json(dummy_games).then(response=>{
//     console.log(response)
//     response.forEach(game=>{
//         table.append("div").attr("class", "card")
//     })
// })

// console.log(dummy_games)

dummy_games.forEach(game=>{
    table.append("div").attr("class", "card")
})