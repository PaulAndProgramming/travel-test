require('./config/config');

const path = require('path');
const _ = require('lodash');
const express = require('express');

let app = express();
const SERVER_PORT = process.env.PORT;

app.use(express.static('public'));
//handle errors to not send the full error stack to the client
app.use((err, req, res, next) => {
  res.status(400).send();
});

app.get('/hotels', function(req, res) {
	res.sendFile(path.join(__dirname, './JSONfiles/hotels.json'));
});

//serve index.html on all get routes
app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, './../public/index.html'));
});

app.listen(SERVER_PORT, () => {
	console.log(`server is listening on port ${SERVER_PORT}`);
});

module.exports = app;
