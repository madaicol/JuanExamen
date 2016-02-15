var applicacion = angular.module('Prueba', ['ui.router', 'ngAnimate', 'ngResource', 'toastr']);

applicacion.config(function ($stateProvider, $urlRouterProvider) {


    //$urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "RUTAS/Home.html",
            controller: 'HomeController'
        })
        .state('usuario', {
            url: "/usuario",
            templateUrl: "RUTAS/Usuario.html",
            controller: 'UsuarioController'
        })
        .state('pastel', {
            url: "/pastel/:idUsuario",
            templateUrl: "RUTAS/Pastel.html",
            controller: 'PastelController'
        })
        .state('ingrediente', {
            url: "/ingrediente",
            templateUrl: "RUTAS/Ingrediente.html",
            controller: 'IngredienteController'
        })


});

//0999849845