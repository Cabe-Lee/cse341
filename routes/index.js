const express = require('express');
const routes = express.Router();

const myController = require('../controllers');

routes.get('/', myController.awesomeFunction);
routes.get('/awesome', myController.anotherPerson);

module.exports = routes;