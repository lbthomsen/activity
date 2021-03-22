/* 
 * app-page directive
 */
(function() {
    
    var module = angular.module("app-page-directive", []);
    
    module.controller("PageController", ["$log", "$route", "SystemService", 
        function($log, $route, systemService) {
            $log.debug("PageController: starting - $route = %o", $route);
            
            var pageCtrl = this;
            pageCtrl.leftSidebar = $route.current.$$route.leftSidebar;
            pageCtrl.rightSidebar = $route.current.$$route.rightSidebar;
            
        }
    ]);
    
    module.directive("appPage", [
        function() {
            return {
                restrict: "E", 
                templateUrl: "views/app-page.html", 
                controller: "PageController", 
                controllerAs: "pageCtrl"
            };
        }
    ]);
    
})();
/*
 * vim: ts=4 et nowrap autoindent
 */