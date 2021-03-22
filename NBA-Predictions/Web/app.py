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

# Flask Setup
app = Flask(__name__)

engine = create_engine("postgres://awajcqhq:4CfuU4ZPzBv5ax89ArRPL9P51juwwfQf@queenie.db.elephantsql.com:5432/awajcqhq")

Base = automap_base()
Base.prepare(engine, reflect=True)

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

@app.route("/api/elo")
def eloroute():
    session = Session(engine)
    results = session.query(Elos).all()
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
    session.close()
    model_df = {}
    return jsonify(model_df)

@app.route("/future")
def futureroute():
    session = Session(engine)
    session.close()
    future_df = {}
    return jsonify(future_df)

if __name__ == "__main__":
    app.run(debug=True)
