var express = require('express');

var app = express();

app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Below will eliminate need for PATH
// app.use(express.static(__dirname + '/public'));

/* ROUTES */

// Home route
app.get('/', routes.home);

// Drone locations route
app.get('/drone_locations/:location_number?', routes.location_single);

// About drone route
app.get('/about', routes.about);

// NotFound route
app.get('*', routes.notFound);

// Listens on port 3000 || production PORT
var port = 3000;
app.listen(process.env.PORT || port);