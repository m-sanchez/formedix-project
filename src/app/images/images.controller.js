/**
 * Created by miguelsanchez on 23/1/16.
 */
(function() {
    'use strict';

    angular
        .module('formedix')
        .controller('ImagesController', ImagesController);

    /** @ngInject */
    function ImagesController($routeParams,$q,imagesServer) {
        var vm=this;
        vm.changeImage=function(i){
            i=i<0?5:i% vm.urls.length;
            vm.index=i;
        };
        vm.transformCode=function(initialCode){

            var deferred = $q.defer();
            if(initialCode.length<=2){
                vm.imageCode=initialCode;
                deferred.resolve();
            }else{
                var arrayLetters = initialCode.split("");
                arrayLetters.shift();
                if(!/^\d+$/.test(arrayLetters[0])){
                    var nextCharacter = arrayLetters[0].charCodeAt(0)+1;
                    arrayLetters[0]= String.fromCharCode(nextCharacter);
                }
                arrayLetters.splice(1, 1);
                vm.transformCode(arrayLetters.join("")).then(function(){
                    deferred.resolve();
                });
            }
            return deferred.promise;
        };
        vm.index=0;
        var code = $routeParams.code;
        if(code){
            vm.transformCode(code).then(function(){
                vm.urls= [];
                for(var i=0;i<6;i++){
                    vm.urls[i]=imagesServer+"images/"+vm.imageCode+"/"+i+".jpg";
                }
            });
        }

        vm.test=function(test){
            return test;
        }
    }

})();
