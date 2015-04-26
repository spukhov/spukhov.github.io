'use strict';

var skillerApp = angular.module('skillerApp', [
    'OccupationsService',
    'ui.router'
]);


skillerApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'modules/main/mainRedisign.html'
        })
        .state('homepage', {
            url: '/homepage',
            //abstract: true,
            templateUrl: 'modules/homepage/homepage.html',
            controller: 'HomepageController'
        });
    $urlRouterProvider.otherwise('/')
});


skillerApp.factory('Skills', ['$resource',
        function($resource) {
            return $resource(
                'http://localhost:8080/skiller/api/skills/:occupation', { occupation: '@occupation'}, {
                    query: { method: 'GET', isArray: false, cache: true }
                }
            );
        }
    ]);

skillerApp.controller('LoginCtrl', ['$scope', '$http', '$log', function($scope, $http, $log){
    $scope.email = null;
    $scope.password = null;

    $scope.login = function() {
        $http.post("http://localhost:8080/skiller/api/user/login", {email:$scope.email, password:$scope.password})
            .success(function(data){$log.error(data)});
    }
}]);

