angular.module('services.userServices', ['ngResource'])
  .factory('LoginService', ['$resource',
    function ($resource) {
      return $resource('http://user1m-test.apigee.net/API/login', {}, {
        get: { method: 'GET', params: {}, isArray: false },
        post: { method: 'POST', params: {}, isArray: false }
      });
    }
  ])
  .factory('UserService', ['$resource',
    function ($resource) {
      return $resource('http://user1m-test.apigee.net/API/users/:id', {}, {
        get: { method: 'GET', params: {}, isArray: false }
      });
    }
  ])
  .factory('UserListService', ['$resource',
    function ($resource) {
      return $resource('http://user1m-test.apigee.net/API/users/:id/list', {}, {
        get: { method: 'GET', params: {}, isArray: false }
      });
    }
  ]);