/**
 * Created by miguelsanchez on 23/1/16.
 */

angular
  .module('formedix')
  .directive('onErrorSrc', function() {
    return {
      link: function(scope, element, attrs) {
        element.bind('error', function() {
          if (attrs.src != attrs.onErrorSrc) {
            attrs.$set('src', attrs.onErrorSrc);
          }
        });
      }
    }
  });

