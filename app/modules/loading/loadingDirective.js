'use strict';

skillerApp.directive('loadingState', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/modules/loading/loading.html',
    scope: {
      show: '=show'
    }
  }
});

