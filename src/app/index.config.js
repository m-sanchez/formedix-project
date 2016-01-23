/**
 * Created by miguelsanchez on 23/1/16.
 */
(function() {
    'use strict';

    angular
        .module('formedix')
        .config(config);

    /** @ngInject */
    function config($logProvider) {
        // Enable log
        $logProvider.debugEnabled(true);

    }

})();
