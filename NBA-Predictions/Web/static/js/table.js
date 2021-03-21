// finding the table in html
var table = document.getElementById("tableID");

var dummy_games = [{"game_date":"2021-03-20", "home_team":"TOR", "away_team":"OKC", "home_elo":1600, "away_elo":1500, "tree_winner":"TOR"}, {"game_date":"2021-03-20", "home_team":"ATL", "away_team":"GSW", "home_elo":1450, "away_elo":1800, "tree_winner":"GSW"}];

//creating table function
dummy_games.forEach((game) => {
    if(game.tree_winner== game.home_team){
        temp_home_elo = game.home_elo + 100;
        elo_diff = game.away_elo - temp_home_elo;
        home_chance = (1/(1+10**(elo_diff/400)))*100;
        home_chance = home_chance.toFixed(2);
        away_chance = (1-(1/(1+10**(elo_diff/400))))*100;
        away_chance = away_chance.toFixed(2);
        elo_est_pts_margin = (temp_home_elo - game.away_elo)/28;
    } else {
        temp_home_elo = game.home_elo + 100;
        elo_diff = temp_home_elo - game.away_elo;
        home_chance = (1/(1+10**(elo_diff/400)))*100;
        home_chance = home_chance.toFixed(2);
        away_chance = (1-(1/(1+10**(elo_diff/400))))*100;
        away_chance = away_chance.toFixed(2);
        elo_est_pts_margin = (game.away_elo - temp_home_elo)/28;
    }
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    cell1.innerHTML = game.game_date;
    cell2.innerHTML = game.home_team;
    cell3.innerHTML = game.away_team;
    cell4.innerHTML = game.home_elo;
    cell5.innerHTML = game.away_elo;
    cell6.innerHTML = game.tree_winner;
    cell7.innerHTML = (Math.round(home_chance)+"%");
    cell8.innerHTML = (Math.round(away_chance)+"%");
    cell9.innerHTML = "+"+Math.round(elo_est_pts_margin);
  });


var header = `
<thead>
    <tr>
        <th scope="col"></th>
        <th scope="col">ELO win margin</th>
        <th scope="col">ELO win prob.</th>
        <th scope="col">Tree spread</th>
        <th scope="col">Tree win prob</th>
    </tr>
</thead>
`


dummy_games.forEach(game=>{
    if(game.home_elo > geme.away_elo){
        temp_home_elo = game.home_elo + 100;
        elo_diff = game.away_elo - temp_home_elo;
        home_chance = (1/(1+10**(elo_diff/400)))*100;
        home_chance = home_chance.toFixed(2);
        away_chance = (1-(1/(1+10**(elo_diff/400))))*100;
        away_chance = away_chance.toFixed(2);
        elo_est_pts_margin = (temp_home_elo - game.away_elo)/28;
    }
    else if(game.home_elo < game.away_elo){
        temp_home_elo = game.home_elo + 100;
        elo_diff = temp_home_elo - game.away_elo;
        home_chance = (1/(1+10**(elo_diff/400)))*100;
        home_chance = home_chance.toFixed(2);
        away_chance = (1-(1/(1+10**(elo_diff/400))))*100;
        away_chance = away_chance.toFixed(2);
        elo_est_pts_margin = (game.away_elo - temp_home_elo)/28;
    }

    // add header of table card
    var container = d3.select("#game-cards")
    var column = container.append("div").attr("class", "col-sm-6")
    var card = column.append("div").attr("class", "card-body")
    var table = card.append("table").attr("class", "table").html(header)
    
    // define table body text here
    tbody_html = `<tr>
                   <th scope="row">${game.home_team}</th>
                   <td>-7</td>
                   <td>76%</td>
                   <td>-6</td>
                   <td>70%</td>
                 </tr>
                 <tr>
                   <th scope="row">${game.away_team}</th>
                   <td></td>
                   <td>24%</td>
                   <td></td>
                   <td>30%</td>
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