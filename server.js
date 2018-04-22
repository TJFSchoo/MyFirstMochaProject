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


//
// app.get('/', function(request, response) {
//     response.send('Hello Avans!');
// });
// app.get('/about', function(request, response) {
//     response.send('Written by Tom Schoonbeek, Klas D');
// });
// app.post('/', function(request, response) {
//     response.send('Hello Avans, POST request received!');
// });
// app.put('/', function(request, response) {
//     response.send('Hello Avans, PUT request received!');
// });
// app.all('/api', function(request, response) {
//     response.send('API call!');
// });
//
// app.all('*', function(request, response) {
//     response.status(404);
//     response.send('404 - Not found');
// });


app.listen(port, function() {
    console.log('Server app is listening on port ' + port);
});