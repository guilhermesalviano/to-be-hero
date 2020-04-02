const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);

routes.get('/ongs', OngController.index);
/** Query Params, Route params, e body params */
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(13),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.store);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);

routes.post('/incidents', IncidentController.store);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
}), IncidentController.delete);

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