var app = angular.module("madLibsApp", ["ngRoute"]);
app.config(function($routeProvider){
  $routeProvider.when("/view1", {
    controller: "inputCtrl",
    templateUrl: "partials/view1.html"
  }).when("/view2", {
    controller: "outputCtrl",
    templateUrl: "partials/view2.html"
  }).otherwise("partials/view1.html")
});
