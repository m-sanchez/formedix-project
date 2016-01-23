describe('Test', function () {

  beforeEach(function() {
    browser.get('http://localhost:3000/#');
  });

  it('redirects properly and gets the right code', function () {
    element(by.css('[ng-model="main.code"]')).sendKeys('ACE1');
    element(by.css('.btn-primary')).click();
    expect(element(by.id('code-reminder')).getText()).toEqual('For code: D1');
  });


});