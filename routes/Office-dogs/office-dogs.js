const dogsRoute = require('express').Router();
const dogsController = require('./office-dogs.controller');

dogsRoute.route('/dogs')
    .get(dogsController.getAllDogs)
    .post(dogsController.addNewDog);

dogsRoute.route('/dogs/:id')
    .get(dogsController.getSingleDog)
    .put(dogsController.updateSingleDog)
    .delete(dogsController.deleteSingleDog);

module.exports = dogsRoute;