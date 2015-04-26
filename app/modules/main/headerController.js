'use strict';

skillerApp.controller('HeaderController', function($scope, $http, $location) {
      $http.get('app/data/signInMethods.json').success(function(response) {
        $scope.signInMethods = response;
      });

      $scope.popUpOpened = false;

      $scope.signIn = function (method) {
        var jso = new JSO(this.signInMethods[method]);
        JSO.enablejQuery($);
        jso.wipeTokens();
        jso.ajax({
            dataType: 'json'
        });
      }

    }
);

