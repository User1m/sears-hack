angular.module('services.userService', ['ngResource'])
  .factory('UserService', ['$resource',
    function ($resource) {
      return $resource('http://user1m-test.apigee.net/API/login', {}, {
        get: { method: 'GET', params: {}, isArray: false },
        post: { method: 'POST', params: {}, isArray: false }
      });
    }
  ]);