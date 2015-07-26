angular.module('services.searsServices', ['ngResource'])
  .factory('DealService', ['$resource',
    function ($resource) {
      return $resource('http://user1m-test.apigee.net/API/deals', {}, {
        get: { method: 'GET', params: {}, isArray: false }
      });
    }
  ])
  .factory('ProductService', ['$resource',
    function ($resource) {
      return $resource('http://user1m-test.apigee.net/API/products/:partnum', {}, {
        get: { method: 'GET', params: {}, isArray: false }
      });
    }
  ]);