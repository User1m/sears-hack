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
      return $resource('http://user1m-test.apigee.net/API/users/:uuid', {}, {
        get: { method: 'GET', params: {}, isArray: false }
      });
    }
  ])
  .factory('NewUserService', ['$resource',
    function ($resource) {
      return $resource('http://user1m-test.apigee.net/API/users/save', {}, {
        save: { method: 'POST', params: {}, isArray: false }
      });
    }
  ])
  .factory('UserListService', ['$resource',
    function ($resource) {
      return $resource('http://user1m-test.apigee.net/API/users/:uuid/list', {}, {
        get: { method: 'GET', params: {}, isArray: false }
      });
    }
  ])
  .factory('NewListService', ['$resource',
    function ($resource) {
      return $resource('http://user1m-test.apigee.net/API/users/list/save', {}, {
        save: { method: 'POST', params: {}, isArray: false }
      });
    }
  ])
  .factory('RegistryService', ['$resource',
    function ($resource) {
      return $resource('http://user1m-test.apigee.net/API/lists/:uuid', {}, {
        get: { method: 'GET', params: {}, isArray: false }
      });
    }
  ]);