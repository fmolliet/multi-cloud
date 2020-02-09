const { Router } = require('express');
// Controllers
const TranscriptionController = require('./controller/TranscriptionController');

const routes = Router();

routes.get('/transcriptions', TranscriptionController.index );
routes.post('/transcriptions', TranscriptionController.store );

module.exports = routes;