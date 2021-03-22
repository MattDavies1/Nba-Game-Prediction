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

engine = create_engine('postgres://awajcqhq:4CfuU4ZPzBv5ax89ArRPL9P51juwwfQf@queenie.db.elephantsql.com:5432/awajcqhq')

Base = automap_base()
Base.prepare(engine, reflect=True)

Model = Base.classes.model

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
    session.close()
    elo_df = {}
    return jsonify(elo_df)

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
