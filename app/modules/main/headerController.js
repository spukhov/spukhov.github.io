'use strict';

skillerApp.controller('HeaderController', function($scope, $http, $location) {
      $http.get('app/data/signInMethods.json').success(function(response) {
        $scope.signInMethods = response;
      });

      $scope.popUpOpened = false;

      $scope.signIn = function (method) {
        console.log(this.signInMethods[method]);
      }

    }
);

