applicacion.controller('UsuarioController', ['$scope', 'toastr', 'UsuarioFactory', function ($scope, toastr, UsuarioFactory) {

    console.log("Entro en el controlador del usuario");
    toastr.info('Info', 'Se cargo la vista Usuario');

    $scope.usuarios;

    UsuarioFactory.query().$promise.then(
        function correcto(respuesta) {
            console.log(respuesta);
            $scope.usuarios = respuesta;
        },
        function error(error) {
            console.log(error);
        });

    $scope.nuevoUsuario = {
        nombre: '',
        apellido: '',
        edad: '',
        correo: '',
        ciudad: '',
        foto: ''
    };

    $scope.agregarNuevoUsuario = function () {

        UsuarioFactory.save({
                nombre: $scope.nuevoUsuario.nombre,
                apellido: $scope.nuevoUsuario.apellido,
                edad: $scope.nuevoUsuario.edad,
                correo: $scope.nuevoUsuario.correo,
                ciudad: $scope.nuevoUsuario.ciudad,
                foto: $scope.nuevoUsuario.foto
            })
            .$promise.then(
                function correcto(respuesta) {
                    console.log(respuesta);

                    $scope.nuevoUsuario.nombre = '';
                    $scope.nuevoUsuario.apellido = '';
                    $scope.nuevoUsuario.edad = '';
                    $scope.nuevoUsuario.correo = '';
                    $scope.nuevoUsuario.ciudad = '';
                    $scope.nuevoUsuario.foto = '';
                    toastr.success('Exito', 'El usuario ha sido agregado con exito');
                    $scope.usuarios.push(respuesta);

                },
                function error(error) {
                    console.log(error);
                });
    }


}]);