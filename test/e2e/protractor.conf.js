const jasmineSpecReporter = require('jasmine-spec-reporter');

exports.config = {
    // directConnect: true,
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['specs/**/*.spec.js'],
    baseUrl: 'http://127.0.0.1:8000',
    jasmineNodeOpts: {
        // remove ugly protractor dot reporter
        print: () => { }
    },
    onPrepare: function(){
        var SpecReporter = jasmineSpecReporter.SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: 'all' }));
    }
};
