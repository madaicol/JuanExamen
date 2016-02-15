/**
* Pastel.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

 attributes: {
        nombre: {
            type: 'string'
        },
        tipo: {
            type: 'string',
            enum: ['hojaldre', 'azucarada', 'escaladas','reporsteria']
        },
        preparacion: {
            type: 'string'
        },
        foto: {
            type: 'string'
        },
        idUsuario:{
              model:'usuario'
        },   
        ingredientes: {
            collection: 'ingrediente',
            via: 'idPastel'
        }

    }
};

