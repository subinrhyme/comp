var mobileApp = angular.module('mobileApp', ['ngRoute']);

mobileApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/list.html',
        controller: 'listController'
    }).when('/detail/:id', {
        templateUrl: 'pages/detail.html',
        controller: 'detailController'
    }).otherwise({
        redirectTo: '/'
    })
});