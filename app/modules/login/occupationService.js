'use strict';

angular.module('OccupationsService', ['ngResource'])
    .factory('Occupations', ['$resource',
        function($resource) {
            return $resource(
                '/skiller/api/occupation', {}, {
                    query: { method: 'GET', isArray: false, cache: true }
                }
            );
        }
    ]);