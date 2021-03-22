/* 
 * app-lside directive
 */
(function() {
    
    var module = angular.module("app-lside-directive", []);
    
    module.controller("LSideController", ["$log", 
        function($log) {
            $log.debug("LSideController: starting");
            
            
        }
    ]);
    
    module.directive("appLside", [
        function() {
            return {
                restrict: "E", 
                templateUrl: "views/app-lside.html",
                controller: "LSideController", 
                controllerAs: "lSideCtrl"
            };
        }
    ]);
    
})();
/*
 * vim: ts=4 et nowrap autoindent
 */