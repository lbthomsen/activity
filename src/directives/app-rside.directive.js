/* 
 * app-rside directive
 */
(function() {
    
    var module = angular.module("app-rside-directive", []);
    
    module.directive("appRside", [
        function() {
            return {
                restrict: "E", 
                templateUrl: "views/app-rside.html"
            };
        }
    ]);
    
})();
/*
 * vim: ts=4 et nowrap autoindent
 */