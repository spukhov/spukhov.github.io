'use strict';

skillerApp.controller('OccupationCtrl', ['$scope', '$log', '$routeParams', 'Skills',
    function($scope, $routeParams, $log, Skills) {
      $scope.loading = false;
      $scope.skills = [];
        console.log("1");
      Skills.get({ occupation: "java" }, function(data) {
          console.log(data);
        if (data && data.result && data.body.length) {
          $scope.loading = false;
          $scope.skills = data.body;
        }
      });
    }
]);

