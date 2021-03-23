# import libraries
import os
from flask.globals import session
from flask_sqlalchemy import SQLAlchemy

from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

from sqlalchemy import create_engine, engine
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session

import numpy as np
import pickle
from sklearn.ensemble import RandomForestClassifier
import datetime
import pandas as pd
# Flask Setup
app = Flask(__name__)

engine = create_engine("postgres://awajcqhq:4CfuU4ZPzBv5ax89ArRPL9P51juwwfQf@queenie.db.elephantsql.com:5432/awajcqhq")

Base = automap_base()
Base.prepare(engine, reflect=True)

Model = Base.classes.model
Elos = Base.classes.elos


# HTML Routes
@app.route("/")
def home():
    return render_template("index.html")

# Service Routes
@app.route("/teams")
def teamsroute():
    session = Session(engine)
    session.close()
    team_list = []
    return jsonify(team_list)

@app.route("/elo")
def eloroute():
    session = Session(engine)
    sel = [Elos.newdate, Elos.bucks, Elos.raptors, Elos.sixers,
    Elos.celtics, Elos.pacers, Elos.nets, Elos.magic, Elos.pistons, Elos.hornets,	
    Elos.heat,	Elos.wizards, Elos.hawks, Elos.bulls, Elos.cavs,	
    Elos.knicks, Elos.warriors, Elos.nuggets, Elos.rockets, Elos.blazers, Elos.jazz, Elos.thunder, Elos.clippers,
    Elos.spurs, Elos.kings, Elos.lakers, Elos.timberwolves, Elos.mavericks, Elos.grizzlies, Elos.pelicans, Elos.suns]
    results = session.query(*sel).all()
    session.close()
    elo_list = []
    for result in results:
        elo_dict ={}
        elo_dict["Date"] = result[0]
        elo_dict["Milwaukee Bucks"] = result[1]
        elo_dict["Toronto Raptors"] = result[2]
        elo_dict["Philadelphia 76ers"] = result[3]
        elo_dict["Boston Celtics"] = result[4]
        elo_dict["Indiana Pacers"] = result[5]
        elo_dict["Brooklyn Nets"] = result[6]
        elo_dict["Orlando Magic"] = result[7]
        elo_dict["Detroit Pistons"] = result[8]
        elo_dict["Charlotte Hornets"] = result[9]
        elo_dict["Miami Heat"] = result[10]
        elo_dict["Washington Wizards"] = result[11]
        elo_dict["Atlanta Hawks"] = result[12]
        elo_dict["Chicago Bulls"] = result[13]
        elo_dict["Cleveland Cavaliers"] = result[14]
        elo_dict["New York Knicks"] = result[15]
        elo_dict["Golden State Warriors"] = result[16]
        elo_dict["Denver Nuggets"] = result[17]
        elo_dict["Houston Rockets"] = result[18]
        elo_dict["Portland Trail Blazers"] = result[19]
        elo_dict["Utah Jazz"] = result[20]
        elo_dict["Oklahoma City Thunder"] = result[21]
        elo_dict["Los Angeles Clippers"] = result[22]
        elo_dict["San Antonio Spurs"] = result[23]
        elo_dict["Sacramento Kings"] = result[24]
        elo_dict["Los Angeles Lakers"] = result[25]
        elo_dict["Minnesota Timberwolves"] = result[26]
        elo_dict["Dallas Mavericks"] = result[27]
        elo_dict["Memphis Grizzlies"] = result[28]
        elo_dict["New Orleans Pelicans"] = result[29]
        elo_dict["Phoenix Suns"] = result[30]
        elo_list.append(elo_dict)
    return jsonify(elo_list)

@app.route("/model")
def modelroute():
    session = Session(engine)
    data = session.query(Model.game_id, Model.home, Model.away, Model.projected_winner, Model.predicted_line, Model.ELO_home, Model.ELO_away).all()
    session.close()
    model = []
    for game_id, home, away, proj_win, line, ELO_h, ELO_a in data:
        game = {}
        game["id"] = game_id
        game["home"] = home
        game["away"] = away
        game["proj_win"] = proj_win
        game["line"] = line
        game["ELO_h"] = ELO_h
        game["ELO_a"] = ELO_a
        model.append(game)
    return jsonify(model)

@app.route("/future")
def futureroute():
    session = Session(engine)
    session.close()
    future_df = {}
    return jsonify(future_df)

if __name__ == "__main__":
    app.run(debug=True)
