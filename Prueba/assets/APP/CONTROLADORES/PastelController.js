applicacion.controller('PastelController', ['$scope', '$stateParams', 'toastr', 'PastelesFactory', 'UsuarioFactory', 'IngredienteFactory', function ($scope, $stateParams, toastr, PastelesFactory, UsuarioFactory, IngredienteFactory) {

    console.log("Entro en el controlador de Pastel");
    toastr.info('Info', 'Se cargo la vista Pastel');


    $scope.usuario;
    $scope.pasteles;

    $scope.nuevoIngrediente = {
        nombre: ''
    };


    $scope.nuevoPastel = {
        nombre: '',
        tipo: '',
        foto: '',
        preparacion: '',
        idUsuario: ''
    };
    
    PastelesFactory.busquedaPorIdUsuario({
        idUsuario: $stateParams.idUsuario
    }).$promise.then(
        function success(respuesta) {
            $scope.pasteles = respuesta;
        },
        function error(error) {
        });




    UsuarioFactory.get({
        id: $stateParams.idUsuario
    }).$promise.then(
        function success(respuesta) {
            $scope.existeUsuario = true;
            $scope.usuario = respuesta;
            console.log($scope.usuario);
        },
        function error(error) {
            $scope.existeUsuario = false;
            $scope.error = "No existe ese usuario";
        });


    $scope.agregarIngrediente = function (pastel) {
        
        IngredienteFactory.save({
                nombre: $scope.nuevoIngrediente.nombre,
                idPastel: pastel.id
            })
            .$promise.then(
                function correcto(respuesta) {
                    console.log(respuesta);
                    $scope.nuevoIngrediente.nombre = '';
                    toastr.success('Exito', 'El Ingrediente ha sido agregado con exito');
                    pastel.ingredientes.push(respuesta);
                },
                function error(error) {
                    console.log(error);
                });
    };



    $scope.agregarPastel = function () {
        PastelesFactory.save({
                nombre: $scope.nuevoPastel.nombre,
                tipo: $scope.nuevoPastel.tipo,
                foto: $scope.nuevoPastel.foto,
                preparacion: $scope.nuevoPastel.preparacion,
                idUsuario: $stateParams.idUsuario
            })
            .$promise.then(
                function correcto(respuesta) {
                    console.log(respuesta);
                    $scope.nuevoPastel.nombre = '';
                    $scope.nuevoPastel.tipo = '';
                    $scope.nuevoPastel.foto = '';
                    $scope.nuevoPastel.preparacion = '';
                    toastr.success('Exito', 'El pastel ha sido agregado con exito');
                    $scope.pasteles.push(respuesta);
                },
                function error(error) {
                    console.log(error);
                });
    };




}]);