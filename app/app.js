'use strict';

var skillerApp = angular.module('skillerApp', [
    'ngRoute'
]);


skillerApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'app/modules/main/main.html',
                controller: 'MainCtrl'
            })
            .when('/login', {
                templateUrl: 'app/modules/login/login.html',
                controller: 'LoginCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);

skillerApp.controller('MainCtrl', [function(){

}]);

skillerApp.controller('LoginCtrl', ['$scope', '$http', '$log', function($scope, $http, $log){
    $scope.email = null;
    $scope.password = null;

    $scope.login = function() {
        $http.post("http://localhost:8080/skiller/api/user/login", {email:$scope.email, password:$scope.password})
            .success(function(data){$log.error(data)});
    }
}]);
