var app = angular.module('myApp', ["ngRoute"])

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "template/main.html"
  })
  .when("/manage", {
    templateUrl : "template/manage.html"
  });
});
