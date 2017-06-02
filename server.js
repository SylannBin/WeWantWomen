'use strict';

var path       = require('path');
var favicon    = require('serve-favicon');
var bodyParser = require('body-parser');
var express    = require('express');
var Index      = require('./routes/index');
var Model      = require('./routes/model');
var Formulaire = require('./routes/formulaire');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.ico')));

app.use(express.static(path.resolve(__dirname, 'public')));

app.get("/", Index);
app.get("/model", Model);
app.post("/formulaire", Formulaire);

// Server listen and log
const PORT = process.env.PORT || 3000;
const IP = process.env.IP || "0.0.0.0";
app.listen(PORT, IP, function ()
{
  console.log(`Server listening on, ${IP}:${PORT}`)
});
