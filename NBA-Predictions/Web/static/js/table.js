
function roundHalf(num) {
    return Math.round(num*2)/2;
}

var url = "/model"

var header = `
<thead>
    <tr>
        <th scope="col"></th>
        <th scope="col">ELO</th>
        <th scope="col"></th>
        <th scope="col">Tree</th>
        <th scope="col"></th>
    </tr>
    <tr>
        <th scope="col"></th>
        <th scope="col">Spread</th>
        <th scope="col">Win Prob</th>
        <th scope="col">Spread</th>
        <th scope="col">Win Prob</th>
    </tr>
</thead>
`

d3.json(url).then(data=>{
    data.forEach(game => {
        //console.log(game)
        home_adj_elo = game.elo_h + 100
        // set elo parameters
        if(home_adj_elo < game.elo_a){
            elo_diff = game.elo_a - home_adj_elo;
            home_chance = (1/(1+10**(elo_diff/400)));
            home_chance = home_chance.toFixed(2);
            away_chance = (1-(1/(1+10**(elo_diff/400))));
            away_chance = away_chance.toFixed(2);
            elo_pts_margin_home = "-"
            elo_pts_margin_away = roundHalf((home_adj_elo - game.elo_a)/28);
        }
        else if(home_adj_elo > game.elo_a){
            elo_diff = home_adj_elo - game.elo_a;
            home_chance = (1/(1+10**(elo_diff/400)));
            home_chance = home_chance.toFixed(2);
            away_chance = 1-(1/(1+10**(elo_diff/400)));
            away_chance = away_chance.toFixed(2);
            elo_pts_margin_home = roundHalf((game.elo_a - home_adj_elo)/28);
            elo_pts_margin_away = "-"
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
            tree_prob_home = game.home_win
            tree_prob_away = game.away_win
    
        }
        else{
            tree_spread_home = "-"
            tree_spread_away = game.line
            tree_prob_away = game.away_win
            tree_prob_home = game.home_win
        }

        // add header of table card
        var container = d3.select("#game-cards")
        var column = container.append("div").attr("class", "col-sm-6")
        var card = column.append("div").attr("class", "card")
        var card_body = card.append("div").attr("class", "card-body")
        var table = card_body.append("table").attr("class", "table").html(header)
        
        // define table body text here
        tbody_html = `<tr>
                    <th scope="row">${game.away}</th>
                    <td>${elo_pts_margin_away}</td>
                    <td>${away_chance}</td>
                    <td>${tree_spread_away}</td>
                    <td>${tree_prob_away}</td>
                    </tr>
                    <tr>
                    <th scope="row">${game.home}</th>
                    <td>${elo_pts_margin_home}</td>
                    <td>${home_chance}</td>
                    <td>${tree_spread_home}</td>
                    <td>${tree_prob_home}</td>
                    </tr>
                    `
        
        
        tbody = table.append("tbody").html(tbody_html)
        }
        );
})