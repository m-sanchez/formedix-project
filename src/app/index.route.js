/**
 * Created by miguelsanchez on 23/1/16.
 */
(function() {
    'use strict';

    angular
        .module('formedix')
        .config(routeConfig);

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            }) .when('/images/:code', {
                templateUrl: 'app/images/images.html',
                controller: 'ImagesController',
                controllerAs: 'images'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})();
