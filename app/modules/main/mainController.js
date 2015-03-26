'use strict';

skillerApp.controller('MainCtrl', ['$scope', '$location', 'Occupations',
    function($scope, $location, Occupations) {
      $scope.loading = false;
      $scope.occupations = [];
      $scope.selectedOccupation = {};

      Occupations.query(function(data) {
        if (data && data.result && data.body.length) {
          $scope.loading = false;
          $scope.occupations = data.body;
        }
      });
    }
]);

