/* 
 * app-footer directive
 */
(function() {
    
    var module = angular.module("app-footer-directive", []);
    
    module.controller("FooterController", ["$log", "$scope", "SystemService", "Web3Service", 
        function($log, $scope, systemService, web3Service) {
            $log.debug("FooterController: starting");
            
            var footerCtrl = this;
            footerCtrl.systemService = systemService;
            footerCtrl.latestBlockNumber = -1;
            
            $scope.$watch(function() {
                return web3Service.latestBlock;
            }, function(latestBlock) {
                $log.debug("FooterController: latestBlock = %o", latestBlock);
                if (latestBlock && latestBlock.number) {
                    footerCtrl.latestBlockNumber = latestBlock.number;
                } else {
                    footerCtrl.latestBlockNumber = -1;
                }
            }, true);
            
        }
    ]);
    
    module.directive("appFooter", [
        function() {
            return {
                restrict: "E", 
                replace: true, 
                templateUrl: "views/app-footer.html", 
                controller: "FooterController", 
                controllerAs: "footerCtrl"
            };
        }
    ]);
    
})();
/*
 * vim: ts=4 et nowrap autoindent
 */
