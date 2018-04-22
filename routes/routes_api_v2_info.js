// API version 2 INFO
var express = require('express');
var router = express.Router();
var path = require('path');
router.get('*', function(request, response) {
    response.status(200);
    response.json({
        "description": "API practicumopdracht 2, les 2"
    });
});
module.exports = router;