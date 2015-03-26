'use strict';

skillerApp.controller('OccupationCtrl', ['$scope', '$routeParams', 'Skills',
    function($scope, $routeParams, Skills) {
      $scope.loading = false;
      $scope.occupation = $routeParams.occupation;
      $scope.skills = [];

      Skills.get({ occupation: $scope.occupation }, function(data) {
        if (data && data.result && data.body.length) {
          $scope.loading = false;
          $scope.skills = data.body;
        }
      });
    }
]);

