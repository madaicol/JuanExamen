applicacion.factory('UsuarioFactory', ['$resource', function ($resource) {

    var factory = $resource(
        'http://localhost:1337/Usuario/:idUsuario', {
            idUsuario: '@idUsuario'
        }, {
            actualizar: {
                method: 'PUT',
                params: {
                    idUsuario: '@idUsuario'
                }

            }
        });

    return factory;

}]);




applicacion.factory('PastelesFactory', ['$resource', function ($resource) {
    var factory = $resource(
        'http://localhost:1337/Pastel/:idPastel', {
            idMascota: '@idPastel'
        }, {
            actualizar: {
                method: 'PUT',
                params: {
                    idMascota: '@idPastel'
                }
            },
            busquedaPorIdUsuario: {
                url: 'http://localhost:1337/Pastel?idUsuario=:idUsuario',
                method: 'GET',
                isArray: true,
                params: {
                    idUsuario: '@idUsuario'
                }
            }
        });
    return factory;
}]);


applicacion.factory('IngredienteFactory', ['$resource', function ($resource) {

    var factory = $resource(
        'http://localhost:1337/Ingrediente/:idIngrediente', {
            idIngrediente: '@idIngrediente'
        }, {
            actualizar: {
                method: 'PUT',
                params: {
                    idIngrediente: '@idIngrediente'
                }

            }
        });

    return factory;

}]);
