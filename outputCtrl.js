var app = angular.module("madLibsApp");
app.controller("outputCtrl", function($scope, madLibsFactory) {

$scope.madLibsObject = madLibsFactory.returnObject();
console.log($scope.madLibsObject);


});
