var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainCtrl'
        })
        .when('/freelance', {
            templateUrl: 'views/freelance.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

});

app.controller('MainCtrl', function () {});