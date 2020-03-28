const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;

/**
 * express = rotas
 * Rota / Recurso(entidade)
 */

/**
 * Metodos / Http
 * 
 * Get: buscar informações no backend
 * Post: Criar uma informação no backend
 * Put: Alterar uma informação no backend
 * Delete: deletando uma informação no backend
 */

/**
 * Tipos de parâmetro:
 * 
 * Query Params: Parâmetros nomeados que são enviados na rota após o simbolo de ? (filtros, paginação).
 * Route Params: Parâmetros utilizados para indentificar recursos (users/:id).
 * Request Body: Corpo da requisição, utilizado para criar/alterar recursos.
 * 
 */

/**
 * SQL: mysql, sqlite, postgreSQL
 * noSQL: mongoDB
 */

/**
 * Driver: select * from users
 * Query Builder: 
 */