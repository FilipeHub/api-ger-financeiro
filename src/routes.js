const express = require('express');

const MessageController = require('./controllers/MessageController');
const SessionController = require('./controllers/SessionController');
const UserController = require('./controllers/UserController');

const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

routes.post('/login', SessionController.store);

routes.post('/users', UserController.store);

routes.get('/user/:id', UserController.detail);

routes.get('/messages/:page', MessageController.show);

module.exports = routes;