var app = angular.module("madLibsApp", ["ngRoute"]);

app.config(function($routeProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'partials/view1.html',
            controller: 'inputCtrl'
        })

        // about page
        .when('/view1', {
            templateUrl: 'partials/view1.html',
            controller: 'inputCtrl'
        })

        // contact page
        .when('/view2', {
            templateUrl: 'partials/view2.html',
            controller: 'outputCtrl'
        });

});
