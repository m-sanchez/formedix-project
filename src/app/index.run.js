/**
 * Created by miguelsanchez on 23/1/16.
 */
(function() {
    'use strict';

    angular
        .module('formedix')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log) {

        $log.debug('runBlock end');
    }

})();
