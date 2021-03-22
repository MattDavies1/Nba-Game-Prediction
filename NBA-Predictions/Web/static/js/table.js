var table = document.getElementById("tableID");

var dummy_games = [{"game_date":"2021-03-20", "home_team":"TOR", "away_team":"OKC", "home_elo":1600, "away_elo":1500, "tree_winner":"TOR"}, {"game_date":"2021-03-20", "home_team":"ATL", "away_team":"GSW", "home_elo":1450, "away_elo":1800, "tree_winner":"ATL"}];

dummy_games.forEach((game) => {
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = game.game_date;
    cell2.innerHTML = game.home_team;
    cell3.innerHTML = game.away_team;
    cell4.innerHTML = game.home_elo;
    cell5.innerHTML = game.away_elo;
    cell6.innerHTML = game.tree_winner;
  });