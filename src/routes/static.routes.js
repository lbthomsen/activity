/* 
 * Static Routes
 */
(function () {

    var module = angular.module("static-routes", []);

    module.config(["$routeProvider",
        function ($routeProvider) {
            $routeProvider
                    .when("/", {
                        templateUrl: "views/home.html",
                        leftSidebar: true, 
                        rightSidebar: false
                    })
                    .when("/about", {
                        templateUrl: "views/about.html", 
                        leftSidebar: true, 
                        rightSidebar: false
                    })
                    .when("/privacy", {
                        templateUrl: "views/privacy.html", 
                        leftSidebar: true, 
                        rightSidebar: false
                    })
                    .when("/tos", {
                        templateUrl: "views/tos.html", 
                        leftSidebar: true, 
                        rightSidebar: false
                    })
                    .when("/how", {
                        templateUrl: "views/how.html", 
                        leftSidebar: true, 
                        rightSidebar: false
                    })
                    .otherwise({
                        redirectTo: "/"
                    });
        }
    ]);

})();
/*
 * vim: ts=4 et nowrap autoindent
 */
