app = angular.module 'instangular-test', ['ngRoute','instangular']

app.config ($routeProvider) ->

    $routeProvider.when '/home',
        controller: 'HomeCtrl'
        templateUrl: 'partials/home.html'

    $routeProvider.otherwise redirectTo: '/home'


app.controller 'HomeCtrl', ($scope,instangular) ->
    $scope.message = 'Adnan'
    
    instangular.user.search('adnan').then (result) ->
        console.log result
  

app.controller 'LoginCtrl',($scope) ->
