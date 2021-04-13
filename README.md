# Nba-Game-Prediction
### Objective
Our project goal is create an ELO rating system for NBA teams and build a model that predicts game scores between teams, hence predicting which team will win. An Elo rating system is a method for calculating relative skill levels of teams. It is scaled such that a significantly better team will gain less from a win than if the two teams are near evenly matched in elo. We will be using NBA team records to create the ELO system which relies on game data showing which team won the game. The model will be built using historical NBA data and the ELO system created.
  
Our app will feature two models which include a tree and an elo model. Both models will predict the projected margin and win probability for all the games occuring on the same day. We will also display a bar graph and a line graph. The bar graph will show the total elos of every NBA team from highest to lowest which is updated everyday and changes based on game results of the previous night. The line graph shows the elo fluctuations of any chosen NBA team for the past three months.

### What We Are Using

##### Data Sources 
* NBA   

##### DataBase Services   
* PostgreSQL
                                                 
##### Languages 
* Python
* HTML, JS, CSS
  
##### Cloud Service  
* Heroku 

### Deployment

A flask app will be created and hosted on Heroku. https://fivethirtyeight-ish.herokuapp.com/ is our final product.
