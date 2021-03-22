/* 
 * app-main directive
 */
(function() {
    
    var module = angular.module("app-main-directive", []);
    
    module.controller("MainController", ["$log", "$scope", "$route", 
        function($log, $scope, $route) {
            $log.debug("MainController: starting - route = %o", $route);
            
            var ctrl = this;
            ctrl.leftSidebar = $route.current.$$route.leftSidebar;
            ctrl.rightSidebar = $route.current.$$route.rightSidebar;          
            
            $scope.$watch(function() {
                return $route.current.$$route;
            }, function(route) {
                $log.debug("MainController: route has changed - now = %o", route);
                ctrl.leftSidebar = route.leftSidebar;
                ctrl.rightSidebar = route.rightSidebar;
            }, true);
        }
    ]);
    
    module.directive("appMain", [
        function() {
            return {
                restrict: "E", 
                replace: true, 
                templateUrl: "views/app-main.html", 
                controller: "MainController", 
                controllerAs: "mainCtrl"
            };
        }
    ]);
    
})();
/*
 * vim: ts=4 et nowrap autoindent
 */
