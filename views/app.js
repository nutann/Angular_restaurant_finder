/**
 * Created by nutan on 4/4/2017.
 */
(function () {


    var app = angular.module("search",["ngRoute"]);

    app.config(function($routeProvider){
        $routeProvider
            .when('/main',{
                templateUrl : "main.html",
                controller : "mainCtrl"
            })
            .when('/place/:placename/:lat/:lng',{
                templateUrl : "result.html",
                controller : "resultCtrl"
            })
            .otherwise({redirectTo : "/main"});
    });
})();