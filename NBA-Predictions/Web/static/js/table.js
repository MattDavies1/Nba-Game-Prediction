// finding the table in html
// var table = document.getElementById("tableID");

var dummy_games = [
{
"ELO_a": 1485.84, 
"ELO_h": 1536.55, 
"away": "IND", 
"home": "MIA", 
"id": "0022000645", 
"line": "-4.5", 
"proj_win": "IND"
},
{
"ELO_a": 1428.08, 
"ELO_h": 1311.83, 
"away": "OKC", 
"home": "HOU", 
"id": "0022000016", 
"line": "-4.5", 
"proj_win": "HOU"
},
{
"ELO_a": 1500.75, 
"ELO_h": 1624.73, 
"away": "NOP", 
"home": "DEN", 
"id": "0022000646", 
"line": "-5.5", 
"proj_win": "NOP"
},
{
"ELO_a": 1384.9, 
"ELO_h": 1507.7, 
"away": "ORL", 
"home": "BOS", 
"id": "0022000167", 
"line": "-1", 
"proj_win": "ORL"
}
];

function roundHalf(num) {
    return Math.round(num*2)/2;
}

var header = `
<thead>
    <tr>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col">ELO win<br> margin</th>
        <th scope="col">ELO win<br> prob.</th>
        <th scope="col">Tree<br>spread</th>
    </tr>
</thead>
`


dummy_games.forEach(game=>{
    home_adj_elo = game.ELO_h + 100
    // set elo parameters
    if(home_adj_elo > game.ELO_a){
        elo_diff = game.ELO_a - home_adj_elo;
        home_chance = (1/(1+10**(elo_diff/400)));
        home_chance = home_chance.toFixed(2);
        away_chance = (1-(1/(1+10**(elo_diff/400))));
        away_chance = away_chance.toFixed(2);
        elo_pts_margin_home = roundHalf((home_adj_elo - game.ELO_a)/28);
        elo_pts_margin_away = "-"
    }
    else if(home_adj_elo < game.ELO_a){
        elo_diff = home_adj_elo - game.ELO_a;
        home_chance = (1/(1+10**(elo_diff/400)));
        home_chance = home_chance.toFixed(2);
        away_chance = 1-(1/(1+10**(elo_diff/400)));
        away_chance = away_chance.toFixed(2);
        elo_pts_margin_home = "-"
        elo_pts_margin_away = roundHalf((game.ELO_a - home_adj_elo)/28);
    }
    else {
        elo_diff = 0;
        home_chance = 0.50;
        away_chance = 0.50;
        elo_pts_margin_home = "-"
        elo_pts_margin_away = "-";
    }
    if(game.proj_win == game.home){
        tree_spread_home = game.line
        tree_spread_away = "-"
 
    }
    else{
        tree_spread_home = "-"
        tree_spread_away = game.line

    }

    // add header of table card
    var container = d3.select("#game-cards")
    var column = container.append("div").attr("class", "col-sm-6")
    var card = column.append("div").attr("class", "card mb-3")
    var card_body = card.append("div").attr("class", "card-body")
    var table = card_body.append("table").attr("class", "table").html(header)
    
    // define table body text here
    tbody_html = `<tr>
                    <td><img src="static/images/teams/${game.home}.png" class="mx-auto d-block" style="height:25px;"></td>
                   <th scope="row">${game.home}</th>
                   <td>${elo_pts_margin_home}</td>
                   <td>${home_chance}</td>
                   <td>${tree_spread_home}</td>
                 </tr>
                 <tr>
                 <td><img src="static/images/teams/${game.away}.png" class="mx-auto d-block" style="height:25px;"></td>
                   <th scope="row">${game.away}</th>
                   <td>${elo_pts_margin_away}</td>
                   <td>${away_chance}</td>
                   <td>${tree_spread_away}</td>
                 </tr>`
    
    tbody = table.append("tbody").html(tbody_html)
    
});






// <div class="col-sm-6">
//     <div class="card">
//       <div class="card-body">
//         <table class="table">
//           <thead>
//             <tr>
//               <th scope="col"></th>
//               <th scope="col">ELO Spread</th>
//               <th scope="col">ELO win prob.</th>
//               <th scope="col">Tree spread</th>
//               <th scope="col">Tree win prob</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <th scope="row">Raptors</th>
//               <td>-7</td>
//               <td>76%</td>
//               <td>-6</td>
//               <td>70%</td>
//             </tr>
//             <tr>
//               <th scope="row">Thunder</th>
//               <td></td>
//               <td>24%</td>
//               <td></td>
//               <td>30%</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
// </div>