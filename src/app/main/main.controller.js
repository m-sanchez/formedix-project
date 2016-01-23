/**
 * Created by miguelsanchez on 23/1/16.
 */
(function() {
    'use strict';

    angular
        .module('formedix')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope,$location) {
        var vm = this;
        vm.code="";
        vm.getImages=function(){
            $location.path( "/images/" + vm.code );
        };
    }
})();
