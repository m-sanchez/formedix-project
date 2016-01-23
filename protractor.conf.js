exports.config = {
  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
    // 'browserName': 'firefox'
    // 'browserName': 'internet explorer'
  },

  specs: [
    'e2e/**/*.js'
  ],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true
  }
};
