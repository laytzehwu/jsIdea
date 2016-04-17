'use strict';

let dependency = [
    'ui.bootstrap',
    'ui.router'
];

let app = angular.module('app', dependency);
app.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise("/landing");
    $stateProvider
        .state('landing',{
            url: "/ladning",
            templateUrl: "html/landing.html"
        }) 
        .state('login', {
            url: "/login",
            templateUrl: "html/login.html"
        });
});