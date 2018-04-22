// API version 2
const express = require('express');
const recipes = require('../recipes');
const router = express.Router();
const path = require('path');

router.get('/info', function(request, response) {
    response.status(200);
    response.json({
        "description": "API practicumopdracht 2, les 2"
    });
});

// Recipes API query, werkt met specificatie op category ( localhost:8080/api/v2/recipes?category=Pasta bijv.)
router.get('/recipes', function(request, response) {
    let catgr = request.query.category || '';
    let result = recipes.filter(function(y){
        return (y.category === catgr);
    });
    response.status(200);
    response.json(result);
});

// Recipes API query specifiek op nummer in de array ( localhost:8080/api/v2/recipes/2 bijv.)
router.get('/recipes/:number/', function(request, response) {
    let result = [];
    let number = request.params.number || '';

    if(number === ''){
        result ={"Result": "Recipe number not found."};
    } else {
        result = recipes[number];
    }
    response.status(200);
    response.json(result);
});

router.get('*', function(request, response) {
    response.status(404);
    response.json({
        "Error": "Page not found"
    });
});

module.exports = router;