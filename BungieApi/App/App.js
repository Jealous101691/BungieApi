var services = angular.module("services", []);
var controllers = angular.module("controllers", []);
var directives = angular.module("directives", []);

var app = angular.module("BungieApi", [
    "ngRoute",
    "controllers",
    "services",
    "directives"
]);

app.config(['$routeProvider', '$httpProvider', function ($routeProvider) {
        $routeProvider.when('/', { redirectTo: '/explorer' });
        $routeProvider.when("/explorer", { templateUrl: "views/explorer.html", controller: "explorerCtrl" });
    }
]);