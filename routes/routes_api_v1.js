// API version 1
const express = require('express');
const router = express.Router();
const path = require('path');
router.get('*', function(request, response) {
    response.status(404);
    response.json({
        "error": "Recipes REST server API version 1 is no longer supported. Please use API version 2."
    });
});
module.exports = router;