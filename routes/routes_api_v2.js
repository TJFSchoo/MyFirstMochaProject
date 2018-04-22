// API version 2
const express = require('express');
const recipes = require('../recipes');
const router = express.Router();
const path = require('path');

router.get('/info', function(request, response) {
    response.status(404);
    response.json({
        "description": "API practicumopdracht 2, les 2"
    });
});

router.get('/recipes', function(request, response) {
    response.status(200);
    response.json(recipes);
});

router.get('*', function(request, response) {
    response.status(404);
    response.json({
        "Error": "Page not found"
    });
});

module.exports = router;