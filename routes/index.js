const apiRoute = require('express').Router();

apiRoute.use('/office-dogs', require('./Office-dogs/office-dogs'));

module.exports = apiRoute;