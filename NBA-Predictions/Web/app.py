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
