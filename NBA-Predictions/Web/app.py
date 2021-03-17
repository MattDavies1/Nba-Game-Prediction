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

engine = create_engine("postgres://rjwcbiog:OaptK8Zo92u-VEYN5GPg_HZB0HhUUdZ2@queenie.db.elephantsql.com:5432/rjwcbiog")

Base = automap_base()
Base.prepare(engine, reflect=True)

@app.route("/")
def home():
    return render_template("index.html")



if __name__ == "__main__":
    app.run(debug=True)
