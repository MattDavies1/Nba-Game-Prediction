// finding the table in html
var table = document.getElementById("tableID");

var dummy_games = [{"game_date":"2021-03-20", "home_team":"TOR", "away_team":"OKC", "home_elo":1600, "away_elo":1500, "tree_winner":"TOR"}, {"game_date":"2021-03-20", "home_team":"ATL", "away_team":"GSW", "home_elo":1450, "away_elo":1800, "tree_winner":"ATL"}];

//creating table function
dummy_games.forEach((game) => {
    if(game.tree_winner== game.home_team){
        temp_home_elo = game.home_elo + 100;
        elo_diff = game.away_elo - temp_home_elo;
        home_chance = (1/(1+10**(elo_diff/400)))*100;
        home_chance = home_chance.toFixed(2);
        away_chance = (1-(1/(1+10**(elo_diff/400))))*100;
        away_chance = away_chance.toFixed(2);
    } else {
        temp_home_elo = game.home_elo + 100;
        elo_diff = temp_home_elo - game.away_elo;
        home_chance = (1/(1+10**(elo_diff/400)))*100;
        home_chance = home_chance.toFixed(2);
        away_chance = (1-(1/(1+10**(elo_diff/400))))*100;
        away_chance = away_chance.toFixed(2);
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
    cell1.innerHTML = game.game_date;
    cell2.innerHTML = game.home_team;
    cell3.innerHTML = game.away_team;
    cell4.innerHTML = game.home_elo;
    cell5.innerHTML = game.away_elo;
    cell6.innerHTML = game.tree_winner;
    cell7.innerHTML = (home_chance+"%");
    cell8.innerHTML = (away_chance+"%");
  });