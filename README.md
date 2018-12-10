# Assignment 2 - Web API - Automated development process.

Name: Linan Chen

## Overview.

The application is designed for users to order their meal online. Customers can search the dishes and they also can add, delete or update their order after register and login.

## API endpoints.
 + GET /dishes - Get all dishes
 + GET /dishes/:id - Get one dish by id
 + POST /dishes - Add one dish
 + DELETE /dishes/:id - Delete one dish by id
 + PUT /dishes/:id - Update one dish information by id
 + GET /dish-search/name/keyword - Search dishes by dish name
 
 + GET /users - Get all users
 + GET /users/:id - Get one user by id
 + POST /users - Add one user
 + DELETE /users/:id - Delete one user by id
 + PUT /users/:id - Update one user information by id

 + GET /orders - Get all orders
 + GET /orders/:id - Get one order by id
 + POST /orders - Add one order
 + DELETE /orders/:id - Delete one order by id
 + PUT /orders/:id - Update one order information by id

 + POST /register - Create a new user
 + POST /login - Login if the user infomation exists in database and give a token
 
 

## Continuous Integration and Test results.

https://travis-ci.org/Lina20082479/meal-orderingAPI



. . . URL of published test coverage results on Coveralls, e.g.  

https://coveralls.io/github/diarmuidoconnor/donationsAPI


## Extra features.
Create an administrator to manage the dish menu.
Deploy to Heroku : https://meal-ordering-wit.herokuapp.com
