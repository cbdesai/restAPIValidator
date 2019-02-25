//server.js
// This might need some more clean up
// This server.js is same as app.js in https://www.npmjs.com/package/request-validation#full-setup-example
// Also resembles Mongoose program's server.js
//Request validation and joi-add related coding is added to the original Mongo program


var express = require('express');
app = express(),
  port = process.env.PORT || 3000,

bodyParser = require('body-parser');

const rv = require('request-validation');
const baseJoi = require('joi');
require('joi-add')(baseJoi);


routingInfo = './api/routes/universalMasterRoutes';

const fs = require('fs');
const path = require('path');

const modelsPath = path.resolve(__dirname, './api/models')
fs.readdirSync(modelsPath).forEach(file => {
  require(modelsPath + '/' + file);
  console.log ("printing File " + file + "\n printing fs" + fs);
})


rv.handler(function (err, req, res, next)  {
    // If it's not a Joi error, send to global error handler
    if (!err.isJoi) return next(err);
 
    const details = err.details[0];
    const message = (details.context.isExplicit || details.context.addLabel)
        ? details.message
        : 'Bad Request';
    res.status(400).json({
        status: 'error',
        message: message,
        full: err.message
    });
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require(routingInfo); //importing route
routes(app); //register the route


app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.use(function (req, res) {
  //res.status(500).send({ url: req.originalUrl + ' not found' })
  res.status(500).send({ url: req.originalUrl + err.message})
});

app.listen(port);
console.log('RESTful API server started on: ' + port);
