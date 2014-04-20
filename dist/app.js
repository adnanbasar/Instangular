(function() {
  var app;

  app = angular.module('instangular-test', ['ngRoute', 'instangular']);

  app.config(function($routeProvider) {
    $routeProvider.when('/home', {
      controller: 'HomeCtrl',
      templateUrl: 'partials/home.html'
    });
    return $routeProvider.otherwise({
      redirectTo: '/home'
    });
  });

  app.controller('HomeCtrl', function($scope, instangular) {
    $scope.message = 'Adnan';
    return instangular.user.search('adnan').then(function(result) {
      return console.log(result);
    });
  });

  app.controller('LoginCtrl', function($scope) {});

}).call(this);
