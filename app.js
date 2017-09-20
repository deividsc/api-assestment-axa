var express = require('express');
//import {getClientById, getClientByUsername} from './services/clients';
var clientsService = require('./services/clients');
var policiesService = require('./services/policies');
var app = express();

/**
 * @api {get} /clients/:id Search Client by Id
 * @apiName SearchClientById
 * @apiGroup Client
 * @apiParam {String} id client id 
 * @apiSuccess {Object} client client data
 * @apiError {Number} error Error code
 */
app.get('/clients/:id', function (req, res) {
  clientsService.getClientById(req.params.id).then(client => {
    res.json(client);
  })
    .catch(error => res.sendStatus(error))
});

/**
 * @api {get} /clients/by-name/:name Search Client by name
 * @apiName SearchClientByName
 * @apiGroup Client
 * @apiParam {String} id client id 
 * @apiSuccess {Object} client client data
 * @apiError {Number} error Error code
 */

app.get('/clients/by-name/:name', function (req, res) {
  clientsService.getClientByName(req.params.name).then(client => {
    res.json(client);
  })
    .catch(error => res.sendStatus(error))
});

/**
 * @api {get} /policies/by-name/:name Search Policies by  client name
 * @apiName SearchPoliciesByName
 * @apiGroup Policie
 * @apiParam {String} name client name linked to policies 
 * @apiParam {Number} begin begin pagination
 * @apiParam {Number} end end pagination
 * @apiSuccess {Object} client client data
 * @apiError {Number} error Error code
 */

app.get('/policies/by-name/:name', function (req, res) {
  let begin = req.query.begin && parseInt(req.query.begin)? parseInt(req.query.begin):0;
  let end = req.query.end && parseInt(req.query.end)? parseInt(req.query.end):30;
  policiesService.getPoliciesByClientName(req.params.name, begin, end).then(policies => {
    res.json(policies);
  })
    .catch(error => res.sendStatus(error))
});

/**
 * @api {get} /policies/:id Search Client linked to policie number
 * @apiName SearchPoliciesById
 * @apiGroup Policie
 * @apiParam {String} id policie number 
 * @apiSuccess {Object} client client data linked to policie number
 * @apiError {Number} error Error code
 */

app.get('/policies/:id', function (req, res) {
  policiesService.getClientByIdPolicie(req.params.id).then(client => {
    res.json(client);
  })
    .catch(error => res.sendStatus(error))
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});