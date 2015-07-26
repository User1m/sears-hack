// // Ionic Starter App

// // angular.module is a global place for creating, registering and retrieving Angular modules
// // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// // the 2nd parameter is an array of 'requires'
// angular.module('starter', ['ionic','services.userService'])

// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//     // for form inputs).
//     // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
//     // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
//     // useful especially with forms, though we would prefer giving the user a little more room
//     // to interact with the app.
//     if (window.cordova && window.cordova.plugins.Keyboard) {
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//       cordova.plugins.Keyboard.disableScroll(true);
//     }
//     if (window.StatusBar) {
//       // Set the statusbar to use the default style, tweak this to
//       // remove the status bar on iOS or change it to use white instead of dark colors.
//       StatusBar.styleDefault();
//     }
//   });
// });

angular.module('app', ['ionic', 'ngRoute', 'services.userServices', 'services.searsServices'])
.controller("MyController", 
  ['$scope', 'LoginService', 'UserService', 'UserListService', 'DealService', 'ProductService',
  function($scope, LoginService, UserService, UserListService, DealService, ProductService) {
  $scope.username = 'TestUsername';
  
  /*
    API tests
  */
  LoginService.get({username: "g", password: "p"}, function(data){
    console.log("LoginService");
    console.log(data);
  });
  
  UserService.get({id: 1}, function(data){
    console.log("UserService");
    console.log(data);
  });
  
  UserListService.get({id: 1}, function(data){
    console.log("UserListService");
    console.log(data);
  });
  
  ProductService.get({keyword: "TV", store: "Sears"}, function(data){
    console.log("ProductService (List)");
    console.log(data);
  });
 
  
  ProductService.get({partnum: 1, store: "Sears"}, function(data){
    console.log("ProductService (Single)");
    console.log(data);
  });
    
  DealService.get({store: "Sears", category: "Electronics"}, function(data){
    console.log("DealService");
    console.log(data);
  });
  
  /*
    functions
  */
  
  $scope.searchForProducts = function(query){
    ProductService.get({keyword: query, store: "Sears"}, function(data){
      console.log("ProductService (List)");
      console.log(data);
    });
  };
  
}])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
    .state('page2', {
      url: '/login',
      templateUrl: 'page2.tpl.html'
    })
    
    .state('page4', {
      url: '/search',
      templateUrl: 'page4.tpl.html'
    })
    
    .state('side-menu1', {
      url: '/menu',
      templateUrl: 'side-menu1.tpl.html'
    })
    ;
    
  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/login');
  

});


