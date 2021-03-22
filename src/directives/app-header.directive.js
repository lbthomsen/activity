/* 
 * app-header directive
 */
(function() {
    
    var module = angular.module("app-header-directive", []);
    
    module.controller("HeaderController", ["$log", "$scope", "SystemService", "Web3Service", 
        function($log, $scope, systemService, web3Service) {
            $log.debug("HeaderController: starting");
            
            var ctrl = this;
            ctrl.systemService = systemService;
            ctrl.web3Service = web3Service;
            
        }
    ]);
    
    module.directive("appHeader", [
        function() {
            return {
                restrict: "E", 
                replace: true, 
                templateUrl: "views/app-header.html", 
                controller: "HeaderController", 
                controllerAs: "headerCtrl"
            };
        }
    ]);
    
})();
/*
 * vim: ts=4 et nowrap autoindent
 */
