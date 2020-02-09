const axios = require('axios');


//const Dev = require('../models/Dev');
//const parseStringAsArray = require('../utils/parseStringAsArray')
// carrega o model
module.exports = { 
    async index(req, res){
        const transcriptions = 1; // colocar o model 
        // await ele buscar
        // GET all the 
        return res.json(transcriptions);
    },

    async store(req, res){
        const {} = request.body;

        // pode verificar dualidade

        // await create()
    }
}