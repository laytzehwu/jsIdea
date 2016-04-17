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

var LoginController = function ($scope) {
    $scope.email = 'laytzehwu@yahoo.com';
    $scope.password = '';
    var $form = $('form#loginForm');
    $scope.doSubmit = function () {
        console.log('Submitting ...');
        console.log($scope);
    }
    $scope.onSubmit = function () {
        if($form.valid()) {
            var data = {
                email: $scope.email,
                password: $scope.password
            };
            console.log(data);
        }        
    }
    $form.validate();
   console.log('LoginController is fired');
};

app.controller('LoginController', LoginController);