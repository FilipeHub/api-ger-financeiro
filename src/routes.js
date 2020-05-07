const express = require('express');

const RegistroController = require('./controllers/RegistroController');
const SessionController = require('./controllers/SessionController');
const UserController = require('./controllers/UserController');

const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

routes.post('/login', SessionController.store);

routes.post('/user', UserController.store);

routes.get('/user/:id', authMiddleware, UserController.detail);

routes.post('/registro', authMiddleware, RegistroController.store);

routes.get('/registro', authMiddleware, RegistroController.show);

routes.delete('/registro/:id', authMiddleware, RegistroController.delete);

routes.put('/registro/:id', authMiddleware, RegistroController.edit);



module.exports = routes;