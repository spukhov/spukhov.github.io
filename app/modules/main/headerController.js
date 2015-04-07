'use strict';

skillerApp.controller('HeaderController', ['$scope', 
    function($scope) {
    }
    $scope.console = function (text) {
      console.log(text);
    }
    $scope.popUpOpened = false;
]);

