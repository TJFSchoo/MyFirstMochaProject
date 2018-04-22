let express = require('express');
let app = express();

// Het gebruiken van config.json met daarin de goede lokale port, toewijzen aan variabele 'port'
let config = require('./config.json');
app.set('PORT', config.webPort);
let port = process.env.PORT || app.get('PORT');

app.all('*', function(request, response, next) {
    console.log(request.method + " " + request.url);
    next();
});

app.use('/api/v1', require('./routes/routes_api_v1'));
app.use('/api/v2', require('./routes/routes_api_v2'));

app.listen(port, function() {
    console.log('Server app is listening on port ' + port);
});

module.exports = app;