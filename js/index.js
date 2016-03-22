var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'html/work.html'
        })
        .when('/about', {
            templateUrl: 'html/about.html'
        })
        .when('/lab', {
            templateUrl: 'html/lab.html',
            controller: 'LabCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);