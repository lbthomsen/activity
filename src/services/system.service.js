/* 
 * System Service
 */
(function () {

    var module = angular.module("system-service", []);

    module.factory("SettingsResource", ["$resource",
        function ($resource) {
            return $resource("json/settings.json");
        }
    ]);

    module.factory("SystemService", ["$log", "localStorageService", "SettingsResource",
        function ($log, localStorageService, settingsResource) {
            $log.debug("SystemService: starting");

            const service = {
                isReady: false
            };

            service.isReady = true;

            return service;
        }
    ]);

})();
/*
 * vim: ts=4 et nowrap autoindent
 */