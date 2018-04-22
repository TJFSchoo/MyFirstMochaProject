// API version 2
var express = require('express');
var router = express.Router();
var path = require('path');
router.get('*', function(request, response) {
    response.status(404);
    response.json({
        "description": "Error: not found"
    });
});
module.exports = router;