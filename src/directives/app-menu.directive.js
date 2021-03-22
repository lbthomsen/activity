/* 
 * app-menu directive
 */
(function() {
    
    var module = angular.module("app-menu-directive", []);
    
    module.directive("appMenu", [
        function() {
            return {
                restrict: "E", 
                templateUrl: "views/app-menu.html"
            };
        }
    ]);
    
})();
/*
 * vim: ts=4 et nowrap autoindent
 */