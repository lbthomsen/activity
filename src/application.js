/* 
 * Main Application
 */
(function () {

    var appName = "activity";
    var app = angular.module(appName, [
        "ngRoute",
        "ngResource",
        "ngAnimate",
        "ngTouch",
        "ngFileUpload",
        "ui.bootstrap",
        "LocalStorageModule",
        "angularMoment", 
        "angular-inview",
        "angular-loading",
        "angular-head",
        "system-service",
        "app-page-directive",
        "app-menu-directive", 
        "app-header-directive",
        "app-lside-directive",
        "app-rside-directive",
        "app-main-directive",
        "app-footer-directive",
        "static-routes"
    ]);

    app.run(["$log",
        function ($log) {
            $log.debug(appName + " is running!");
        }
    ]);

    app.config(["$logProvider", "$locationProvider", "$httpProvider", "localStorageServiceProvider", "HeadServiceProvider", "LoadingServiceProvider",
        function ($logProvider, $locationProvider, $httpProvider, localStorageServiceProvider, headServiceProvider, loadingServiceProvider) {

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: true
            });

            // This is where the HeadService default values are configured!
            headServiceProvider.setTitle("Activity");
            headServiceProvider.setMetas({
                description: "Activity",
                keywords: "blog",
                author: "Lars Boegild Thomsen <lbthomsen@gmail.com",
                generator: "AngularJS"
            });

            //$httpProvider.interceptors.push("UserInterceptor"); // defined in UserService

            localStorageServiceProvider.setPrefix(appName);

            loadingServiceProvider.setOverlayOpacity(0.4);
            loadingServiceProvider.setFrameOpacity(0.8);
            loadingServiceProvider.setIcon("fa-spinner");

            // Fugly debug disable hack
            if (!window.location.port) {
                //$logProvider.debugEnabled(false);
            }

        }
    ]);

})();
/*
 * vim: ts=4 et nowrap autoindent
 */
