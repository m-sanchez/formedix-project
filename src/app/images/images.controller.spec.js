(function() {
  'use strict';

  describe('controllers', function(){
    var vm;


    beforeEach(module('formedix'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('ImagesController');
    }));

    it('should return the right code',
        function () {
          vm.transformCode("ACE1");
          expect(vm.imageCode).toEqual("D1");
        });


  });
})();
