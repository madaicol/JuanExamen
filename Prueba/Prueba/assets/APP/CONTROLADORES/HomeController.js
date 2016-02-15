applicacion.controller('HomeController', ['$scope', 'toastr', 'UsuarioFactory', function ($scope, toastr, UsuarioFactory) {

    console.log("Entro en el controlador del home");
    toastr.info('Info', 'Se cargo la vista Home');


    $scope.usuario = {
        nombre: '',
        apellido: '',
        edad: '',
        correo: '',
        ciudad: '',
        foto: ''
    };

    $scope.usuarios;

    UsuarioFactory.query().$promise.then(
        function correcto(respuesta) {
            console.log(respuesta);
            $scope.usuarios = respuesta;
        },
        function error(error) {
            console.log(error);
        });


    $scope.editarUsuario = function (usuario, indice) {
        console.log(usuario);
        console.log(indice);

        UsuarioFactory.actualizar({
            idUsuario: usuario.id
        }, {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            edad: usuario.edad,
            correo: usuario.correo,
            ciudad: usuario.ciudad,
            foto: usuario.foto
        }).$promise.then(
            function correctoLlamoEntrenadores(respuesta) {
                console.log(respuesta);
            },
            function errorNoLlamoEntrenadores(error) {
                console.log(error);
            });

    };



}]);